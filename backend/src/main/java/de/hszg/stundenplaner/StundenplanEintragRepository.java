package de.hszg.stundenplaner;

import de.hszg.stundenplaner.model.StundenplanEintrag;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface StundenplanEintragRepository extends JpaRepository<StundenplanEintrag, Long> {
    
    // Hilfsmethode, um den fertigen Plan für die API-Anfrage zu filtern
    List<StundenplanEintrag> findBySemesterAndKalenderwoche(String semester, Integer kalenderwoche);
    
    // Falls kalenderwoche null ist (für den Standard-Wochenplan)
    List<StundenplanEintrag> findBySemesterAndKalenderwocheIsNull(String semester);
}