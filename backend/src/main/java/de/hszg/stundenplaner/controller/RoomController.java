package de.hszg.stundenplaner.controller;

import de.hszg.stundenplaner.RaumRepository;
import de.hszg.stundenplaner.model.Raum;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "${FRONTEND_URL}")
@RequestMapping("/api/v1")
public class RoomController {

    private final RaumRepository raumRepository;

    public RoomController(RaumRepository raumRepository) {
        this.raumRepository = raumRepository;
    }

    @GetMapping("/rooms")
    public List<Raum> getAllRooms() {
        return raumRepository.findAll();
    }
}
