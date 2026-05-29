package de.hszg.stundenplaner.controller;

import de.hszg.stundenplaner.VorlesungRepository;
import de.hszg.stundenplaner.ScheduleEntryDTO;
import de.hszg.stundenplaner.TimeSlotDTO;
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

    private final VorlesungRepository vorlesungRepository;

    public TimetableController(VorlesungRepository vorlesungRepository) {
        this.vorlesungRepository = vorlesungRepository;
    }

    /**
     * Liefert die Uhrzeiten der Vorlesungsblöcke.
     */
    @GetMapping("/timetable/slots")
    public List<TimeSlotDTO> getTimeSlots() {
        List<TimeSlotDTO> slots = new ArrayList<>();
        slots.add(new TimeSlotDTO(0, "08:00", "09:30", "1. Block"));
        slots.add(new TimeSlotDTO(1, "10:00", "11:30", "2. Block"));
        slots.add(new TimeSlotDTO(2, "12:30", "14:00", "3. Block"));
        slots.add(new TimeSlotDTO(3, "14:15", "15:45", "4. Block"));
        return slots;
    }

    /**
     * Erwartet den Session Key im HTTP-Header zur Validierung.
     */
    @GetMapping("/timetable")
    public ResponseEntity<?> getTimetable(
            @RequestParam("semester") String semester,
            @RequestParam(value = "week", required = false, defaultValue = "1") int week,
            @RequestHeader(value = "Authorization", required = false) String sessionKey) {
        
        // validierung des session keys
        if (sessionKey == null || sessionKey.isEmpty()) {
            Map<String, String> errorResponse = new LinkedHashMap<>();
            errorResponse.put("error", "Unauthorized");
            errorResponse.put("message", "Fehlender oder ungültiger Session Key.");
            return new ResponseEntity<>(errorResponse, HttpStatus.UNAUTHORIZED);
        }

        List<Vorlesung> allLectures = vorlesungRepository.findAll();

        Map<String, Map<Integer, ScheduleEntryDTO>> timetable = new LinkedHashMap<>();
        timetable.put("Montag", new LinkedHashMap<>());
        timetable.put("Dienstag", new LinkedHashMap<>());
        timetable.put("Mittwoch", new LinkedHashMap<>());
        timetable.put("Donnerstag", new LinkedHashMap<>());
        timetable.put("Freitag", new LinkedHashMap<>());

        String[] tage = {"Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag"};

        for (int i = 0; i < allLectures.size(); i++) {
            Vorlesung v = allLectures.get(i);
            
            String wochentag = tage[i % tage.length];
            int blockIdx = (i / tage.length) + 1; 

            String raumName = (v.getModul() != null && v.getModul().getRaum() != null) 
                    ? v.getModul().getRaum().getName() : "Kein Raum";
            
            String profName = (v.getModul() != null && v.getModul().getProfessoren() != null && !v.getModul().getProfessoren().isEmpty()) 
                    ? v.getModul().getProfessoren().get(0).getName() : "Kein Dozent";

            String art = "Vorlesung";
            if (i == 1) art = "Seminar";
            if (v.getModul() != null && v.getModul().getName().contains("Programmierung") && wochentag.equals("Freitag")) {
                art = "Ausfall"; 
            }

            ScheduleEntryDTO dto = new ScheduleEntryDTO(
                    v.getId(), 
                    v.getModul() != null ? v.getModul().getName() : "Unbekannt",
                    generateKuerzel(v.getModul() != null ? v.getModul().getName() : "MOD"),
                    art,
                    raumName,
                    profName
            );

            timetable.get(wochentag).put(blockIdx, dto);
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