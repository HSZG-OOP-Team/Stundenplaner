CREATE TABLE IF NOT EXISTS hibernate_sequence (
    next_val BIGINT
);
-- startwert für id-generation wenn noch keine existiert
INSERT INTO hibernate_sequence (next_val) SELECT 1 WHERE NOT EXISTS (SELECT 1 FROM hibernate_sequence);


CREATE TABLE NOT EXISTS raum (
    id BIGINT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    kapazitaet INT NOT NULL,
    ausstattung TEXT
);

CREATE TABLE NOT EXISTS matrikel (
    id BIGINT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    anzahl INT NOT NULL
);

CREATE TABLE NOT EXISTS professor (
    id BIGINT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    verfuegbarkeit VARCHAR(255)
);


CREATE TABLE NOT EXISTS modul (
    id BIGINT PRIMARY KEY,
    raum_id BIGINT,
    name VARCHAR(150) NOT NULL,
    sws INT NOT NULL, 
    schwierigkeitsgrad VARCHAR(50),
    raumanforderung TEXT,
    FOREIGN KEY (raum_id) REFERENCES raum(id) ON DELETE SET NULL
);

CREATE TABLE NOT EXISTS student (
    id BIGINT PRIMARY KEY,
    matrikel_id BIGINT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE,
    FOREIGN KEY (matrikel_id) REFERENCES matrikel(id) ON DELETE SET NULL
);


CREATE TABLE NOT EXISTS modul_professor (
    modul_id BIGINT,
    professor_id BIGINT,
    PRIMARY KEY (modul_id, professor_id),
    FOREIGN KEY (modul_id) REFERENCES modul(id) ON DELETE CASCADE,
    FOREIGN KEY (professor_id) REFERENCES professor(id) ON DELETE CASCADE
);

CREATE TABLE NOT EXISTS vorlesung (
    id BIGINT PRIMARY KEY,
    modul_id BIGINT NOT NULL,
    matrikel_id BIGINT NOT NULL,
    wochentag VARCHAR(20) NOT NULL,
    uhrzeit TIME NOT NULL,
    FOREIGN KEY (modul_id) REFERENCES modul(id) ON DELETE CASCADE,
    FOREIGN KEY (matrikel_id) REFERENCES matrikel(id) ON DELETE CASCADE
);

CREATE TABLE NOT EXISTS gaststudent (
    vorlesung_id BIGINT,
    student_id BIGINT,
    PRIMARY KEY (vorlesung_id, student_id),
    FOREIGN KEY (vorlesung_id) REFERENCES vorlesung(id) ON DELETE CASCADE,
    FOREIGN KEY (student_id) REFERENCES student(id) ON DELETE CASCADE
);