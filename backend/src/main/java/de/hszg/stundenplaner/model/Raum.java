package de.hszg.stundenplaner.model;

import jakarta.persistence.*;
import java.util.List;

@Entity
public class Raum {

    @Id 
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String name;
    private int kapazitaet;

    @ManyToMany
    @JoinTable(
        name = "raum_ausstattung", // Name der SQL-Zwischentabelle
        joinColumns = @JoinColumn(name = "raum_id"),
        inverseJoinColumns = @JoinColumn(name = "ausstattung_id")
    )
    private List<Ausstattung> ausstattungen;

    // Getter und Setter
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    
    public int getKapazitaet() { return kapazitaet; }
    public void setKapazitaet(int kapazitaet) { this.kapazitaet = kapazitaet; }
    
    public List<Ausstattung> getAusstattungen() { return ausstattungen; }
    public void setAusstattungen(List<Ausstattung> ausstattungen) { this.ausstattungen = ausstattungen; }
}
