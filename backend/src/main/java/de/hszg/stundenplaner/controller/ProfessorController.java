package de.hszg.stundenplaner.controller;

import de.hszg.stundenplaner.ProfessorRepository;
import de.hszg.stundenplaner.model.Professor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "${FRONTEND_URL}")
@RequestMapping("/api/v1")
public class ProfessorController {

    private final ProfessorRepository professorRepository;

    public ProfessorController(ProfessorRepository professorRepository) {
        this.professorRepository = professorRepository;
    }

    @GetMapping("/professors")
    public List<Professor> getAllProfessors() {
        return professorRepository.findAll();
    }
}
