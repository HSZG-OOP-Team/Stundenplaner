package de.hszg.stundenplaner.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Matrikel {

    @Id 
    @GeneratedValue
    private Long id;
    
    private String name;
    private int anzahl;

    // Getter und Setter
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    
    public int getAnzahl() { return anzahl; }
    public void setAnzahl(int anzahl) { this.anzahl = anzahl; }
}
