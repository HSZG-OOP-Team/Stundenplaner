package de.hszg.stundenplaner;

import de.hszg.stundenplaner.model.Matrikel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MatrikelRepository extends JpaRepository<Matrikel, Long> {
}
