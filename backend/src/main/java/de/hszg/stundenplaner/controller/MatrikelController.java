package de.hszg.stundenplaner.controller;

import de.hszg.stundenplaner.MatrikelRepository;
import de.hszg.stundenplaner.model.Matrikel;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "${FRONTEND_URL}")
@RequestMapping("/api/v1")
public class MatrikelController {

    private final MatrikelRepository matrikelRepository;

    public MatrikelController(MatrikelRepository matrikelRepository) {
        this.matrikelRepository = matrikelRepository;
    }

    @GetMapping("/matrikel")
    public List<Matrikel> getAllMatrikel() {
        return matrikelRepository.findAll();
    }
}
