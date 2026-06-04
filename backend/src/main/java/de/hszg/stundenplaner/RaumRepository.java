package de.hszg.stundenplaner;

import de.hszg.stundenplaner.model.Raum;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RaumRepository extends JpaRepository<Raum, Long> {
}
