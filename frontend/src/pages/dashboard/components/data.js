// alt

export const getEventColors = (theme) => ({
  Vorlesung: {
    bg: theme?.palette?.stundenplan?.vorlesung?.bg || '#e8f5e9',
    border: theme?.palette?.stundenplan?.vorlesung?.border || '#4caf50',
    text: theme?.palette?.stundenplan?.vorlesung?.text || '#1b5e20',
    chip: theme?.palette?.stundenplan?.vorlesung?.chip || '#4caf50',
  },
  Seminar: {
    bg: theme?.palette?.stundenplan?.seminar?.bg || '#fff3e0',
    border: theme?.palette?.stundenplan?.seminar?.border || '#ff9800',
    text: theme?.palette?.stundenplan?.seminar?.text || '#e65100',
    chip: theme?.palette?.stundenplan?.seminar?.chip || '#ff9800',
  },
  Ausfall: {
    bg: theme?.palette?.stundenplan?.ausfall?.bg || '#ffebee',
    border: theme?.palette?.stundenplan?.ausfall?.border || '#f44336',
    text: theme?.palette?.stundenplan?.ausfall?.text || '#b71c1c',
    chip: theme?.palette?.stundenplan?.ausfall?.chip || '#f44336',
  },
});

export const DEMO_EVENTS = {
  Montag: {
    2: { name: 'Ther. Inform.', kuerzel: 'TI',  art: 'Vorlesung', raum: 'A303', personal: 'G.V:Baatz' },
    3: { name: 'Ther. Inform.', kuerzel: 'TI',  art: 'Seminar',   raum: 'A303', personal: 'G.V:Baatz' },
  },
  Dienstag: {
    1: { name: 'Mensch. Comp. Inter.', kuerzel: 'MCI', art: 'Vorlesung', raum: 'online', personal: 'Lutz'   },
    3: { name: 'Rel. Datenbanken',     kuerzel: 'RDB', art: 'Vorlesung', raum: 'A112',   personal: 'Ulrich' },
    4: { name: 'Rel. Datenbanken',     kuerzel: 'RDB', art: 'Seminar',   raum: 'A303',   personal: 'Ulrich' },
  },
  Mittwoch: {
    0: { name: 'Ther. Inform.', kuerzel: 'TI', art: 'Vorlesung', raum: 'A112',   personal: 'G.V:Baatz' },
    1: { name: 'Ther. Inform.', kuerzel: 'TI', art: 'Seminar',   raum: 'A303',   personal: 'G.V:Baatz' },
  },
  Donnerstag: {
    0: { name: 'Betriebssysteme', kuerzel: 'OS', art: 'Vorlesung', raum: 'A307',   personal: 'Ruhland' },
    1: { name: 'Betriebssysteme', kuerzel: 'OS', art: 'Seminar',   raum: 'A307',   personal: 'Ruhland' },
    2: { name: 'Objekt Orientierte Programmierung', kuerzel: 'TI', art: 'Vorlesung', raum: 'A307',   personal: 'G.Ringwelski' },
  },
  Freitag: {
    1: { name: 'Diskrete Mathematik', kuerzel: 'DM', art: 'Vorlesung', raum: 'B154',   personal: 'U.Schnell' },
    2: { name: 'Diskrete Mathematik', kuerzel: 'DM', art: 'Seminar',   raum: 'B154',   personal: 'U.Schnell' },
    3: { name: 'Objekt Orientierte Programmierung', kuerzel: 'TI', art: 'Ausfall', raum: 'A207',   personal: 'G.Ringwelski' },
  },
};

export const DAYS = [
  { full: 'Montag', short: 'Mo.' },
  { full: 'Dienstag', short: 'Di.' },
  { full: 'Mittwoch', short: 'Mi.' },
  { full: 'Donnerstag', short: 'Do.' },
  { full: 'Freitag', short: 'Fr.' },
];

export const SLOTS = [
  { label: '08:00 – 09:30', start: '08:00', end: '09:30' },
  { label: '10:00 – 11:30', start: '10:00', end: '11:30' },
  { label: '12:30 – 14:00', start: '12:30', end: '14:00' },
  { label: '14:30 – 16:00', start: '14:30', end: '16:00' },
  { label: '16:15 – 17:45', start: '16:15', end: '17:45' }
];
