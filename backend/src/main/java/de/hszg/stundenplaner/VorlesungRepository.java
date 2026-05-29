package de.hszg.stundenplaner;

import de.hszg.stundenplaner.model.Vorlesung;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VorlesungRepository extends JpaRepository<Vorlesung, Long> {
}
