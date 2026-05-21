CREATE TABLE raum (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    kapazitaet INT NOT NULL,
    ausstattung TEXT
);

CREATE TABLE matrikel (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    anzahl INT NOT NULL
);

CREATE TABLE professor (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    verfuegbarkeit VARCHAR(255)
);


CREATE TABLE modul (
    id INT AUTO_INCREMENT PRIMARY KEY,
    raum_id INT,
    name VARCHAR(150) NOT NULL,
    sws INT NOT NULL, 
    schwierigkeitsgrad VARCHAR(50),
    raumanforderung TEXT,
    FOREIGN KEY (raum_id) REFERENCES raum(id) ON DELETE SET NULL
);

CREATE TABLE student (
    id INT AUTO_INCREMENT PRIMARY KEY,
    matrikel_id INT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE,
    FOREIGN KEY (matrikel_id) REFERENCES matrikel(id) ON DELETE SET NULL
);


CREATE TABLE modul_professor (
    modul_id INT,
    professor_id INT,
    PRIMARY KEY (modul_id, professor_id),
    FOREIGN KEY (modul_id) REFERENCES modul(id) ON DELETE CASCADE,
    FOREIGN KEY (professor_id) REFERENCES professor(id) ON DELETE CASCADE
);

CREATE TABLE vorlesung (
    id INT AUTO_INCREMENT PRIMARY KEY,
    modul_id INT NOT NULL,
    matrikel_id INT NOT NULL,
    wochentag VARCHAR(20) NOT NULL,
    uhrzeit TIME NOT NULL,
    FOREIGN KEY (modul_id) REFERENCES modul(id) ON DELETE CASCADE,
    FOREIGN KEY (matrikel_id) REFERENCES matrikel(id) ON DELETE CASCADE
);

CREATE TABLE gaststudent (
    vorlesung_id INT,
    student_id INT,
    PRIMARY KEY (vorlesung_id, student_id),
    FOREIGN KEY (vorlesung_id) REFERENCES vorlesung(id) ON DELETE CASCADE,
    FOREIGN KEY (student_id) REFERENCES student(id) ON DELETE CASCADE
);