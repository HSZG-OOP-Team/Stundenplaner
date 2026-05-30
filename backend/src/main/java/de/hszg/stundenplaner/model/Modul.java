package de.hszg.stundenplaner.model;

import jakarta.persistence.*;
import java.util.List;

@Entity
public class Modul {

    @Id 
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String name;
    private int sws;
    private int schwierigkeitsgrad;


    @ManyToMany
    @JoinTable(
        name = "modul_ausstattung",
        joinColumns = @JoinColumn(name = "modul_id"),
        inverseJoinColumns = @JoinColumn(name = "ausstattung_id")
    )
    private List<Ausstattung> ausstattungen;

    @ManyToMany
    @JoinTable(
        name = "modul_professor",
        joinColumns = @JoinColumn(name = "modul_id"),
        inverseJoinColumns = @JoinColumn(name = "professor_id")
    )
    private List<Professor> professoren;

    // Getter und Setter
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    
    public int getSws() { return sws; }
    public void setSws(int sws) { this.sws = sws; }
    
    public int getSchwierigkeitsgrad() { return schwierigkeitsgrad; }
    public void setSchwierigkeitsgrad(int schwierigkeitsgrad) { this.schwierigkeitsgrad = schwierigkeitsgrad; }
    
    public List<Ausstattung> getAusstattungen() { return ausstattungen; }
    public void setAusstattungen(List<Ausstattung> ausstattungen) { this.ausstattungen = ausstattungen; }
    
    public List<Professor> getProfessoren() { return professoren; }
    public void setProfessoren(List<Professor> professoren) { this.professoren = professoren; }
}
