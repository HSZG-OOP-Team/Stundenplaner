package de.hszg.stundenplaner.controller;

import de.hszg.stundenplaner.ModulRepository;
import de.hszg.stundenplaner.model.Modul;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
