# Maven-Befehle & Anleitung

## 1. Grundlegende Maven-Befehle

### Projekt bauen

```bash
mvn clean install
```

Löscht alte Builds, kompiliert und erstellt das JAR.

### App starten (Entwicklungsmodus)

```bash
mvn spring-boot:run
```

Startet die App direkt aus dem Code für Entwicklung.

### JAR-Datei direkt ausführen

```bash
java -jar target/stundenplaner-0.0.1-SNAPSHOT.jar
```
Führt die fertige Datei aus.



### Tests überspringen

```bash
mvn clean install -DskipTests

```

Baut das Projekt ohne die Ausführung der Unit-Tests.

### Abhängigkeiten prüfen

```bash
mvn dependency:tree

```

 Zeigt eine hierarchische Liste aller (auch transitiver) Abhängigkeiten an. 

---

## 2. Dependencies hinzufügen – Kurzanleitung

### Schritt 1: Snippet einfügen

Jede neue Dependency muss in der `pom.xml` innerhalb des `<dependencies>`-Blocks eingefügt werden:

```xml
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-web</artifactId>
</dependency>

```

> **Hinweis:** Bei "Spring Boot Starters" ist meist keine manuelle Versionsnummer nötig, da diese über das Parent-Projekt (z. B. Version 3.2.0) gesteuert wird.

### Schritt 2: Maven neu laden

Nach jeder Änderung an der `pom.xml` müssen die Änderungen synchronisiert werden:

* **Über die Konsole:** 

```bash
mvn clean install
```

---

## 3. H2-Datenbank

H2 ist eine in Java geschriebene, eingebettete SQL-Datenbank. Sie läuft direkt in der Spring-Boot-App — keine separate Installation nötig.

### Dependency in `pom.xml`

```xml
<dependency>
  <groupId>com.h2database</groupId>
  <artifactId>h2</artifactId>
  <scope>runtime</scope>
</dependency>

<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-data-jpa</artifactId>
</dependency>
```

### Konfiguration in `application.properties`

```properties
spring.datasource.url=jdbc:h2:file:./data/stundenplaner
spring.datasource.driver-class-name=org.h2.Driver
spring.datasource.username=sa
spring.datasource.password=
spring.jpa.database-platform=org.hibernate.dialect.H2Dialect
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.h2.console.enabled=true
```

### H2-Konsole aufrufen

Nach dem Start der App ist die Web-Konsole erreichbar unter:

```
http://localhost:8080/h2-console
```

JDBC URL: `jdbc:h2:file:./data/stundenplaner`, User: `sa`, Passwort leer lassen.

> **Hinweis:** Daten werden in `./data/stundenplaner.mv.db` gespeichert und bleiben nach Neustart erhalten. `ddl-auto=update` bedeutet: Tabellen werden beim Start aktualisiert aber nicht gelöscht.

---

## 4. Beispiel: H2-Datenbank in Java nutzen

```java
// --- model/Kurs.java ---
@Entity                          // wird zur Tabelle in H2
public class Kurs {
    @Id @GeneratedValue          // automatische ID (1, 2, 3 ...)
    private Long id;
    private String name;         // Spalte in der Tabelle
}
```

```java
// --- repository/KursRepository.java ---
// Spring generiert automatisch save(), findAll(), findById() usw.
public interface KursRepository extends JpaRepository<Kurs, Long> {}
```

```java
// --- controller/KursController.java ---
@RestController
public class KursController {
    @Autowired
    private KursRepository repo;  // Datenbankzugriff wird injiziert

    @PostMapping("/kurse")
    public Kurs erstellen(@RequestBody Kurs kurs) {
        return repo.save(kurs);   // speichert in H2 und gibt mit ID zurück
    }

    @GetMapping("/kurse")
    public List<Kurs> alle() {
        return repo.findAll();    // liest alle Einträge aus der Tabelle
    }
}
```
