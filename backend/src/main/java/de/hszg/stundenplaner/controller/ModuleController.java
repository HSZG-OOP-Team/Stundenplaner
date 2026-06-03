package de.hszg.stundenplaner.controller;

import de.hszg.stundenplaner.ModulRepository;
import de.hszg.stundenplaner.model.Modul;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "${FRONTEND_URL}")
@RequestMapping("/api/v1")
public class ModuleController {

    private final ModulRepository modulRepository;

    public ModuleController(ModulRepository modulRepository) {
        this.modulRepository = modulRepository;
    }

    @GetMapping("/modules")
    public List<Modul> getAllModules() {
        return modulRepository.findAll();
    }

    @GetMapping("/modules/{id}")
    public ResponseEntity<Modul> getModuleById(@PathVariable Long id) {
        return modulRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping("/modules")
    public ResponseEntity<Modul> createModule(@RequestBody Modul modul) {
        Modul gespeichert = modulRepository.save(modul);
        return ResponseEntity.status(HttpStatus.CREATED).body(gespeichert);
    }

    @PutMapping("/modules/{id}")
    public ResponseEntity<Modul> updateModule(@PathVariable Long id, @RequestBody Modul modul) {
        return modulRepository.findById(id)
                .map(vorhanden -> {
                    vorhanden.setName(modul.getName());
                    vorhanden.setSws(modul.getSws());
                    vorhanden.setSchwierigkeitsgrad(modul.getSchwierigkeitsgrad());
                    vorhanden.setAusstattungen(modul.getAusstattungen());
                    vorhanden.setProfessoren(modul.getProfessoren());
                    return ResponseEntity.ok(modulRepository.save(vorhanden));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/modules/{id}")
    public ResponseEntity<Void> deleteModule(@PathVariable Long id) {
        if (!modulRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        modulRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
