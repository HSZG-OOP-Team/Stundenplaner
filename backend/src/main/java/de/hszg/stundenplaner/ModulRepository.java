package de.hszg.stundenplaner;

import de.hszg.stundenplaner.model.Modul;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ModulRepository extends JpaRepository<Modul, Long> {
    // Spring Boot stellt hier automatisch alle DB-Methoden wie findAll() bereit
}
