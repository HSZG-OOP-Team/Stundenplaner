-- 1. Ausstattungen anlegen
INSERT INTO ausstattung (id, bezeichnung) VALUES (1, 'Ohne PC');
INSERT INTO ausstattung (id, bezeichnung) VALUES (2, 'Mit PC');

-- 2. Räume anlegen
INSERT INTO raum (id, name, kapazitaet, ausstattung_id) VALUES (10, 'A303', 40, 1);
INSERT INTO raum (id, name, kapazitaet, ausstattung_id) VALUES (11, 'A112', 60, 1);

-- 3. Module anlegen
INSERT INTO modul (id, raum_id, ausstattung_id, name, sws, schwierigkeitsgrad) VALUES (100, 10, 1, 'Theoretische Informatik', 4, 4);
INSERT INTO modul (id, raum_id, ausstattung_id, name, sws, schwierigkeitsgrad) VALUES (101, 11, 1, 'Relationale Datenbanken', 4, 2);

-- 4. Professoren anlegen
INSERT INTO professor (id, name, verfuegbarkeit) VALUES (50, 'G.V:Baatz', 'Verfügbar');
INSERT INTO professor (id, name, verfuegbarkeit) VALUES (51, 'Ulrich', 'Verfügbar');

-- 5. Zuordnung Modul zu Professor 
INSERT INTO modul_professor (modul_id, professor_id) VALUES (100, 50);
INSERT INTO modul_professor (modul_id, professor_id) VALUES (101, 51);

-- 6. Matrikel anlegen
INSERT INTO matrikel (id, name, anzahl) VALUES (1, 'KIA23', 3);

-- 7. Vorlesungen anlegen 
INSERT INTO vorlesung (id, modul_id, matrikel_id) VALUES (1, 100, 1);
INSERT INTO vorlesung (id, modul_id, matrikel_id) VALUES (2, 101, 1);