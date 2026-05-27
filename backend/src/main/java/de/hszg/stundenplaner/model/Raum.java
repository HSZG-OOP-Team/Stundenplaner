package de.hszg.stundenplaner.model;

import jakarta.persistence.*;

@Entity
public class Raum {

    @Id 
    @GeneratedValue
    private Long id;
    
    private String name;
    private int kapazitaet;

    @ManyToOne
    @JoinColumn(name = "ausstattung_id")
    private Ausstattung ausstattung;

    // Getter und Setter
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    
    public int getKapazitaet() { return kapazitaet; }
    public void setKapazitaet(int kapazitaet) { this.kapazitaet = kapazitaet; }
    
    public Ausstattung getAusstattung() { return ausstattung; }
    public void setAusstattung(Ausstattung ausstattung) { this.ausstattung = ausstattung; }
}
