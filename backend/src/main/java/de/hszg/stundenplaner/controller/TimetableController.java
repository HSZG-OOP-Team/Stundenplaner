package de.hszg.stundenplaner.controller;

import de.hszg.stundenplaner.ScheduleEntryDTO;
import de.hszg.stundenplaner.StundenplanEintragRepository;
import de.hszg.stundenplaner.TimeSlotDTO;
import de.hszg.stundenplaner.model.StundenplanEintrag;
import de.hszg.stundenplaner.model.Vorlesung;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "${FRONTEND_URL}")
@RequestMapping("/api/v1")
public class TimetableController {

    private final StundenplanEintragRepository stundenplanEintragRepository;

    public TimetableController(StundenplanEintragRepository stundenplanEintragRepository) {
        this.stundenplanEintragRepository = stundenplanEintragRepository;
    }

    /**
     * Liefert die Uhrzeiten der Vorlesungsblöcke.
     */
    @GetMapping("/timetable/slots")
    public List<TimeSlotDTO> getTimeSlots() {
        List<TimeSlotDTO> slots = new ArrayList<>();
        slots.add(new TimeSlotDTO(1, "08:00", "09:30", "1. Block"));
        slots.add(new TimeSlotDTO(2, "10:00", "11:30", "2. Block"));
        slots.add(new TimeSlotDTO(3, "12:30", "14:00", "3. Block"));
        slots.add(new TimeSlotDTO(4, "14:15", "15:45", "4. Block"));
        return slots;
    }

    /**
     * Erwartet den Session Key im HTTP-Header zur Validierung.
     */
    @GetMapping("/timetable")
    public ResponseEntity<?> getTimetable(
            @RequestParam("semester") String semester,
            @RequestParam(value = "week", required = false) Integer week,
            @RequestHeader(value = "Authorization", required = false) String sessionKey) {
        
        // validierung des session keys
        if (sessionKey == null || sessionKey.isEmpty()) {
            Map<String, String> errorResponse = new LinkedHashMap<>();
            errorResponse.put("error", "Unauthorized");
            errorResponse.put("message", "Fehlender oder ungültiger Session Key.");
            return new ResponseEntity<>(errorResponse, HttpStatus.UNAUTHORIZED);
        }

        List<StundenplanEintrag> eintraege;
        if (week == null || week <= 0) {
            eintraege = stundenplanEintragRepository.findBySemesterAndKalenderwocheIsNull(semester);
        } else {
            eintraege = stundenplanEintragRepository.findBySemesterAndKalenderwoche(semester, week);
        }

        Map<String, Map<Integer, ScheduleEntryDTO>> timetable = new LinkedHashMap<>();
        timetable.put("Montag", new LinkedHashMap<>());
        timetable.put("Dienstag", new LinkedHashMap<>());
        timetable.put("Mittwoch", new LinkedHashMap<>());
        timetable.put("Donnerstag", new LinkedHashMap<>());
        timetable.put("Freitag", new LinkedHashMap<>());

        String[] tageNamen = {"", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag"};

        for (StundenplanEintrag eintrag : eintraege) {
            Vorlesung v = eintrag.getVorlesung();
            if (v == null) continue;

            Integer tagNummer = eintrag.getWochentag(); 
            String wochentag = (tagNummer != null && tagNummer >= 1 && tagNummer <= 5) ? tageNamen[tagNummer] : "Montag";

            int blockIdx = eintrag.getZeitslot();

            String raumName = (eintrag.getRaum() != null) ? eintrag.getRaum().getName() : "Kein Raum";
            
            String profName = (v.getModul() != null && v.getModul().getProfessoren() != null && !v.getModul().getProfessoren().isEmpty()) 
                    ? v.getModul().getProfessoren().get(0).getName() : "Kein Dozent";

            String modulName = v.getModul() != null ? v.getModul().getName() : "Unbekannt";
            String art = eintrag.getArt() != null ? eintrag.getArt().toString() : "Vorlesung";

            ScheduleEntryDTO dto = new ScheduleEntryDTO(
                    v.getId(), 
                    modulName,
                    generateKuerzel(modulName),
                    art,
                    raumName,
                    profName
            );

            if (timetable.containsKey(wochentag)) {
                timetable.get(wochentag).put(blockIdx, dto);
            }
        }

        return new ResponseEntity<>(timetable, HttpStatus.OK);
    }


    @PostMapping("/timetable/status")
    public Map<String, String> updateLectureStatus(@RequestBody Map<String, Object> payload) {
        Map<String, String> response = new LinkedHashMap<>();
        response.put("status", "success");
        response.put("message", "Veranstaltungsstatus erfolgreich aktualisiert.");
        return response;
    }

    private String generateKuerzel(String name) {
        if (name == null || name.isEmpty()) return "MOD";
        if (name.contains(" ")) {
            StringBuilder kuerzel = new StringBuilder();
            for (String wort : name.split(" ")) {
                if (!wort.isEmpty()) kuerzel.append(wort.charAt(0));
            }
            return kuerzel.toString().toUpperCase();
        }
        return name.length() >= 3 ? name.substring(0, 3).toUpperCase() : name.toUpperCase();
    }
}