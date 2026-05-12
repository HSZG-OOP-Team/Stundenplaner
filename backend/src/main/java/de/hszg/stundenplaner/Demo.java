package de.hszg.stundenplaner;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import io.github.cdimascio.dotenv.Dotenv;

@SpringBootApplication
public class Demo {
    public static void main(String[] args) {
        Dotenv dotenv = Dotenv.configure()
                        .directory("./") 
                        .filename(".env")
                        .load();

        dotenv.entries().forEach(entry -> 
                    System.setProperty(entry.getKey(), entry.getValue())
                );

        SpringApplication.run(Demo.class, args);
    }
}