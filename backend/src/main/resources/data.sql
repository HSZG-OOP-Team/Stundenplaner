-- =========================================================================
-- 1. STAMMDATEN & KONFIGURATION (Input für den Solver)
-- =========================================================================

-- Beispieldaten erstmal komplett mit KI generiert

-- Ausstattungen anlegen (Generierte IDs: 1, 2)
INSERT INTO ausstattung (bezeichnung) VALUES ('Ohne PC');
INSERT INTO ausstattung (bezeichnung) VALUES ('Mit PC');

-- Räume anlegen (Generierte IDs: 1, 2, 3)
INSERT INTO raum (name, kapazitaet) VALUES ('A303', 40);
INSERT INTO raum (name, kapazitaet) VALUES ('A112', 60);
INSERT INTO raum (name, kapazitaet) VALUES ('A307', 30);

-- NEU: Zuordnung Raum zu Ausstattung (ManyToMany)
-- Raum A303 (1) und A112 (2) haben "Ohne PC" (1)
-- Raum A307 (3) hat "Mit PC" (2)
INSERT INTO raum_ausstattung (raum_id, ausstattung_id) VALUES (1, 1);
INSERT INTO raum_ausstattung (raum_id, ausstattung_id) VALUES (2, 1);
INSERT INTO raum_ausstattung (raum_id, ausstattung_id) VALUES (3, 2);

-- Module anlegen (Generierte IDs: 1, 2)
INSERT INTO modul (name, sws, schwierigkeitsgrad) VALUES ('Theoretische Informatik', 4, 4);
INSERT INTO modul (name, sws, schwierigkeitsgrad) VALUES ('Relationale Datenbanken', 4, 2);

-- NEU: Zuordnung Modul zu benötigter Ausstattung (ManyToMany)
-- Beide Module benötigen "Ohne PC" (1) für die reguläre Vorlesung
INSERT INTO modul_ausstattung (modul_id, ausstattung_id) VALUES (1, 1);
INSERT INTO modul_ausstattung (modul_id, ausstattung_id) VALUES (2, 1);

-- Professoren anlegen (Generierte IDs: 1, 2)
INSERT INTO professor (name, verfuegbarkeit) VALUES ('Schmidt', 'Verfügbar');
INSERT INTO professor (name, verfuegbarkeit) VALUES ('Smith', 'Verfügbar');

-- Zuordnung Modul zu Professor (ManyToMany)
INSERT INTO modul_professor (modul_id, professor_id) VALUES (1, 1);
INSERT INTO modul_professor (modul_id, professor_id) VALUES (2, 2);

-- Matrikel anlegen (Generierte ID: 1)
INSERT INTO matrikel (name, anzahl) VALUES ('KIA23', 3);

-- Vorlesungs-Anforderungen anlegen (Generierte IDs: 1, 2)
INSERT INTO vorlesung (modul_id, matrikel_id) VALUES (1, 1); -- KIA23 hört Theoretische Informatik
INSERT INTO vorlesung (modul_id, matrikel_id) VALUES (2, 1); -- KIA23 hört Relationale Datenbanken


-- =========================================================================
-- 2. BERECHNETE STUNDENPLAN-EINTRÄGE (Output des Solvers für das Frontend)
-- =========================================================================

-- Eintrag 1: Theoretische Informatik (Vorlesung 1) als VORLESUNG am Montag (wochentag: 1) im 2. Block (zeitslot: 2) in Raum A303 (raum_id: 1)
INSERT INTO stundenplan_eintrag (vorlesung_id, raum_id, art, wochentag, zeitslot, semester, kalenderwoche) 
VALUES (1, 1, 'Vorlesung', 1, 2, 'SoSe2025', 21);

-- Eintrag 2: Dieselbe Vorlesung (TI), aber als ÜBUNG am Montag (wochentag: 1) im 3. Block (zeitslot: 3) in Raum A307 (raum_id: 3)
INSERT INTO stundenplan_eintrag (vorlesung_id, raum_id, art, wochentag, zeitslot, semester, kalenderwoche) 
VALUES (1, 3, 'Übung', 1, 3, 'SoSe2025', 21);