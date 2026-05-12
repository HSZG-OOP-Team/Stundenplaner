package de.hszg.stundenplaner;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DemoController {
    
    @GetMapping("/")
    public String hello() {
        return "Hello, World!";
    }

    @GetMapping("/test/")
    public String test() {
        return "test!";
    }
}