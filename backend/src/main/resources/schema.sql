CREATE TABLE IF NOT EXISTS hibernate_sequence (
    next_val BIGINT
);
-- startwert für id-generation wenn noch keine existiert
INSERT INTO hibernate_sequence (next_val) SELECT 1 WHERE NOT EXISTS (SELECT 1 FROM hibernate_sequence);


CREATE TABLE IF NOT EXISTS ausstattung (
    id BIGINT PRIMARY KEY,
    bezeichnung VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS raum (
    id BIGINT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    kapazitaet INT NOT NULL,
    ausstattung_id BIGINT,
    FOREIGN KEY (ausstattung_id) REFERENCES ausstattung(id) ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS matrikel (
    id BIGINT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    anzahl INT NOT NULL
);

CREATE TABLE IF NOT EXISTS professor (
    id BIGINT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    verfuegbarkeit VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS modul (
    id BIGINT PRIMARY KEY,
    raum_id BIGINT,
    ausstattung_id BIGINT,
    name VARCHAR(150) NOT NULL,
    sws INT NOT NULL, 
    schwierigkeitsgrad INT,
    FOREIGN KEY (raum_id) REFERENCES raum(id) ON DELETE SET NULL,
    FOREIGN KEY (ausstattung_id) REFERENCES ausstattung(id) ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS modul_professor (
    modul_id BIGINT,
    professor_id BIGINT,
    PRIMARY KEY (modul_id, professor_id),
    FOREIGN KEY (modul_id) REFERENCES modul(id) ON DELETE CASCADE,
    FOREIGN KEY (professor_id) REFERENCES professor(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS vorlesung (
    id BIGINT PRIMARY KEY,
    modul_id BIGINT NOT NULL,
    matrikel_id BIGINT NOT NULL,
    FOREIGN KEY (modul_id) REFERENCES modul(id) ON DELETE CASCADE,
    FOREIGN KEY (matrikel_id) REFERENCES matrikel(id) ON DELETE CASCADE
);
