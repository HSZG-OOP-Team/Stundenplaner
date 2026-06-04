package de.hszg.stundenplaner;

public class ScheduleEntryDTO {
    private Long lectureId;
    private String name;
    private String kuerzel;
    private String art;
    private String raum;
    private String personal;

    public ScheduleEntryDTO(Long lectureId, String name, String kuerzel, String art, String raum, String personal) {
        this.lectureId = lectureId;
        this.name = name;
        this.kuerzel = kuerzel;
        this.art = art;
        this.raum = raum;
        this.personal = personal;
    }

    public Long getLectureId() { return lectureId; }
    public String getName() { return name; }
    public String getKuerzel() { return kuerzel; }
    public String getArt() { return art; }
    public String getRaum() { return raum; }
    public String getPersonal() { return personal; }
}