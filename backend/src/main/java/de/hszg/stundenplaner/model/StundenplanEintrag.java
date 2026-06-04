package de.hszg.stundenplaner.model;

import jakarta.persistence.*;

@Entity
@Table(name = "stundenplan_eintrag")
public class StundenplanEintrag {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "vorlesung_id", nullable = false)
    private Vorlesung vorlesung;

    @ManyToOne
    @JoinColumn(name = "raum_id", nullable = false)
    private Raum raum;


    @Enumerated(EnumType.STRING)
    @Column(name = "art", nullable = false)
    private VeranstaltungsTyp art;

    @Column(name = "wochentag", nullable = false)
    private Integer wochentag;


    @Column(name = "zeitslot", nullable = false)
    private Integer zeitslot;


    @Column(name = "semester", nullable = false)
    private String semester;


    @Column(name = "kalenderwoche")
    private Integer kalenderwoche;


    public StundenplanEintrag() {}

    // Getter und Setter
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public Vorlesung getVorlesung() { return vorlesung; }
    public void setVorlesung(Vorlesung vorlesung) { this.vorlesung = vorlesung; }

    public Raum getRaum() { return raum; }
    public void setRaum(Raum raum) { this.raum = raum; }

    public VeranstaltungsTyp getArt() { return art; }
    public void setArt(VeranstaltungsTyp art) { this.art = art; }

    public Integer getWochentag() { return wochentag; }
    public void setWochentag(Integer wochentag) { this.wochentag = wochentag; }

    public Integer getZeitslot() { return zeitslot; }
    public void setZeitslot(Integer zeitslot) { this.zeitslot = zeitslot; }

    public String getSemester() { return semester; }
    public void setSemester(String semester) { this.semester = semester; }

    public Integer getKalenderwoche() { return kalenderwoche; }
    public void setKalenderwoche(Integer kalenderwoche) { this.kalenderwoche = kalenderwoche; }
}
