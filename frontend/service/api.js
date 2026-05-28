/**
 * Diese Datei:
 * Verwaltet alle API-Calls zum Backend mit automatischem Fallback auf Dummy-Daten
 */

import dummyData from '../data/dummyData.json';

// Konfiguration
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api/v1';

// Session Token aus Clerk holen
const getSessionToken = async () => {
  try {
    // Bei Verwendung von Clerk muss hier die Session abgerufen werden
    // Placeholder: wird später mit echter Clerk-Integration ersetzt
    const token = localStorage.getItem('sessionToken');
    return token || null;
  } catch (error) {
    console.error('Error getting session token:', error);
    return null;
  }
};

// Helper: Standardisierter Fetch mit Authorization Header
/**
 * Wrapper um fetch() mit automatischem Authorization-Header
 * 
 * @param {string} endpoint - API Endpoint (z.B. '/auth/me')
 * @param {object} options - Fetch-Optionen
 * @returns {Promise<Response>}
 */
const authorizedFetch = async (endpoint, options = {}) => {
  const sessionToken = await getSessionToken();
  
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  // Authorization-Header mit Session Token
  if (sessionToken) {
    headers['Authorization'] = `Bearer ${sessionToken}`;
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    throw new Error(`API Error: ${response.status} ${response.statusText}`);
  }

  return response.json();
};

// API FUNKTIONEN

/**
 * 1. Nutzerdaten abrufen
 * GET /api/v1/auth/me
 * 
 * Validiert Anmeldestatus und liefert Nutzer-Informationen.
 * Fallback: Dummy-Nutzer aus dummyData.json (Prof. Dr. Tim Metzig)
 */
export const fetchUser = async () => {
  try {
    console.log('Fetching user data from backend...');
    const data = await authorizedFetch('/auth/me');
    console.log('User data from backend:', data);
    return data;
  } catch (error) {
    console.warn('Error fetching user, using dummy data:', error.message);
    return dummyData.user;
  }
};

/**
 * 2. Semester-Liste abrufen
 * GET /api/v1/semesters
 * 
 * Liefert alle verfügbaren Semester.
 * Fallback: Dummy-Semester aus dummyData.json
 */
export const fetchSemesters = async () => {
  try {
    console.log('Fetching semesters from backend...');
    const data = await authorizedFetch('/semesters');
    console.log('Semesters from backend:', data);
    return data;
  } catch (error) {
    console.warn('Error fetching semesters, using dummy data:', error.message);
    return dummyData.semesters;
  }
};

/**
 * 3. Time-Slots abrufen
 * GET /api/v1/timetable/slots
 * 
 * Liefert die verfügbaren Zeitfenster (Vorlesungsblöcke).
 * Fallback: Dummy-TimeSlots aus dummyData.json
 */
export const fetchTimeSlots = async () => {
  try {
    console.log('Fetching time slots from backend...');
    const data = await authorizedFetch('/timetable/slots');
    console.log('Time slots from backend:', data);
    return data;
  } catch (error) {
    console.warn('Error fetching time slots, using dummy data:', error.message);
    return dummyData.timeSlots;
  }
};

/**
 * 4. Kalenderwochen abrufen
 * GET /api/v1/calendar/weeks?year=2025
 * 
 * Liefert die akademischen Wochen des Jahres.
 * Fallback: Dummy-CalendarWeeks aus dummyData.json
 */
export const fetchCalendarWeeks = async (year = 2025) => {
  try {
    console.log(`Fetching calendar weeks for year ${year}...`);
    const data = await authorizedFetch(`/calendar/weeks?year=${year}`);
    console.log('Calendar weeks from backend:', data);
    return data;
  } catch (error) {
    console.warn('Error fetching calendar weeks, using dummy data:', error.message);
    return dummyData.calendarWeeks;
  }
};

/**
 * 5. Stundenplan abrufen
 * GET /api/v1/timetable?semester=SoSe2025&week=21
 * 
 * Liefert den Stundenplan für ein Semester und eine Woche.
 * WICHTIG: Matrikel wird mit Session Key abgerufen (im Backend)
 * 
 * @param {string} semester - Semester (z.B. 'SoSe2025')
 * @param {number} week - Kalenderwoche (z.B. 21)
 * @returns {Promise<object>} Stundenplan-Daten
 * 
 * Fallback: Dummy-Stundenplan aus dummyData.json
 */
export const fetchTimetable = async (semester = 'SoSe 2025', week = 21) => {
  try {
    // URL-Parameter zusammenbauen
    const params = new URLSearchParams({
      semester: semester.replace(/\s+/g, ''), // "SoSe 2025" → "SoSe2025"
      week: week,
    });

    console.log(`Fetching timetable for ${semester}, week ${week}...`);
    const data = await authorizedFetch(`/timetable?${params.toString()}`);
    console.log('Timetable from backend:', data);
    return data;
  } catch (error) {
    console.warn('Error fetching timetable, using dummy data:', error.message);
    // Fallback mit aktuellen Parametern
    return {
      semester,
      week,
      matricel: dummyData.timetable.matricel,
      data: dummyData.timetable.data,
    };
  }
};

/**
 * 6. Status-Änderung (POST)
 * POST /api/v1/timetable/status
 * 
 * Profs ändern Veranstaltungsstatus (z.B. Vorlesung → Ausfall)
 * eig ja die Verwalter - aber glaub die gibt es noch nicht
 * 
 * @param {object} statusUpdate - Status-Update Objekt
 * @returns {Promise<object>} Response vom Backend
 */
export const updateEventStatus = async (statusUpdate) => {
  try {
    console.log('Updating event status:', statusUpdate);
    const data = await authorizedFetch('/timetable/status', {
      method: 'POST',
      body: JSON.stringify(statusUpdate),
    });
    console.log('Status updated:', data);
    return data;
  } catch (error) {
    console.error('Error updating status:', error.message);
    throw error;
  }
};

/**
 * 7. Event-Details abrufen (erweitert)
 * GET /api/v1/timetable/event/:lectureId
 * 
 * @param {number} lectureId - ID der Veranstaltung
 * @returns {Promise<object>} Event-Details
 */
export const fetchEventDetails = async (lectureId) => {
  try {
    console.log(`Fetching event details for lecture ${lectureId}...`);
    const data = await authorizedFetch(`/timetable/event/${lectureId}`);
    console.log('Event details from backend:', data);
    return data;
  } catch (error) {
    console.warn('Error fetching event details:', error.message);
    return null;
  }
};


/**
 * Testet die Verbindung zum Backend
 * Hilfreich für Debugging
 */

export const testBackendConnection = async () => {
  try {
    console.log(`Testing connection to ${API_BASE_URL}...`);
    const data = await authorizedFetch('/health');
    console.log('Backend is reachable:', data);
    return true;
  } catch (error) {
    console.error('Backend is not reachable:', error.message);
    return false;
  }
};

export default {
  fetchUser,
  fetchSemesters,
  fetchTimeSlots,
  fetchCalendarWeeks,
  fetchTimetable,
  updateEventStatus,
  fetchEventDetails,
  testBackendConnection,
};