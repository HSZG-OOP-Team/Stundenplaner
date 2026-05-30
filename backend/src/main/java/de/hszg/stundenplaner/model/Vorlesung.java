package de.hszg.stundenplaner.model;

import jakarta.persistence.*;

@Entity
public class Vorlesung {

    @Id 
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "modul_id", nullable = false)
    private Modul modul;

    @ManyToOne
    @JoinColumn(name = "matrikel_id", nullable = false)
    private Matrikel matrikel;


    // Getter und Setter
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    
    public Modul getModul() { return modul; }
    public void setModul(Modul modul) { this.modul = modul; }
    
    public Matrikel getMatrikel() { return matrikel; }
    public void setMatrikel(Matrikel matrikel) { this.matrikel = matrikel; }


}
