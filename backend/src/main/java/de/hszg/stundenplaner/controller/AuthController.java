package de.hszg.stundenplaner.controller;

import de.hszg.stundenplaner.UserDTO;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "${FRONTEND_URL}")
@RequestMapping("/api/v1")
public class AuthController {

    /**
     * Validiert den Anmeldestatus und liefert Nutzer-Informationen.
     */
    @GetMapping("/auth/me")
    public UserDTO getCurrentUser() {
        // Mock-Daten
        return new UserDTO("user_2F9008...", "Prof. Dr. Max Maximilian Maximilius Maxi Max Mustermann", "m.mustermann@hszg.de", "PROFESSOR");
    }
}