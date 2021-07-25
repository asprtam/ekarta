INSERT INTO composureprofs(courageprof, assertivenessprof)
VALUES (1, 1);

INSERT INTO dexterityprofs(acrobaticsprof, swimmingprof, sneakprof, shootingprof, martialartsprof, meleecombatlightprof)
VALUES (1, 1, 1, 1, 1, 1);

INSERT INTO intelligenceprofs(hackingprof, itprof, languagesprof, literatureprof, medicineprof, humanismprof, scienceprof, technologyprof)
VALUES (1, 1, 1, 1, 1, 1, 1, 1);

INSERT INTO observationprofs(intuitionprof, searchprof, trackingprof)
VALUES (1, 1, 1);

INSERT INTO persuasionprofs(charismaprof, treatprof, tactprof, convincingprof, artprof, seductionprof, tauntprof)
VALUES (1, 1, 1, 1, 1, 1, 1);

INSERT INTO postureprofs(resistanceprof, bullyingprof, conditionprof)
VALUES (1, 1, 1);

INSERT INTO resourcefulnessprofs(cookingprof, drivingprof, lockpickingprof, survivalprof, diyprof)
VALUES (1, 1, 1, 1, 1);

INSERT INTO strengthprofs(destructionprof, guardprof, fistingprof, capacityprof, meleecombatheavyprof)
VALUES (1, 1, 1, 1, 1);

INSERT INTO willpowerprofs(negationprof, psionicsprof)
VALUES (1, 1);

INSERT INTO playercharacters(playername, charactername, characterage, characternationality, description, lightwounds, heavywounds, woundlimit, initiative, willpowerpoints, willpowerpointslimit, advantages, disadvantages, physicalexp, mentalexp, softskillsexp, postureatt, strengthatt, dexterityattr, intelligenceattr, willpowerattr, observationattr, composureattr, persuasionattr, resourcefulnessattr, idpostureprofs, idstrengthprofs, iddexterityprofs, idintelligenceprofs, idwillpowerprofs, idobservationprofs, idcomposureprofs, idpersuasionprofs, idresourcefulnessprofs, weaponsid, equipment, equipmentlimit, equipmentmax)
VALUES ('test', 'John Doe', 42, 'amerykańska', 'postać testowa', 1, 1, 2, 2, 1, 2, 'bogaty, wszczepy', 'gruby, kulawy', 0, 0, 0, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 'kupa na patyku', 'woda, kokaina', 1, 2 )

INSERT INTO playercharacters(playername, charactername, characterage, characternationality, description, lightwounds, heavywounds, woundlimit, initiative, willpowerpoints, willpowerpointslimit, advantages, disadvantages, physicalexp, mentalexp, softskillsexp, postureattr, strengthattr, dexterityattr, intelligenceattr, willpowerattr, observationattr, composureattr, persuasionattr, resourcefulnessattr, idpostureprofs, idstrengthprofs, iddexterityprofs, idintelligenceprofs, idwillpowerprofs, idobservationprofs, idcomposureprofs, idpersuasionprofs, idresourcefulnessprofs, weapons, equipment, equipmentlimit, equipmentmax)
VALUES ('example', 'Linda Wart', 24, 'angielska', 'postać testowa', 1, 1, 2, 2, 1, 2, 'szybki', 'biedny', 0, 0, 0, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 'bron 1', 'woda, papierośnica', 1, 2 )

SELECT playername, charactername, characterage, characternationality, description, lightwounds, heavywounds, woundlimit, initiative, willpowerpoints, willpowerpointslimit, advantages, disadvantages, psychicalexp, mentalexp, softskillsexp, postureattr, strengthattr, dexterityattr
