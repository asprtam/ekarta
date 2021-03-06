CREATE TABLE playerCharacters(
	IDcharacter serial PRIMARY KEY,
	playerName varchar(50),
	characterName varchar(50),
	characterAge int,
	characterNationality varchar(50),
	description text,
	lightWounds int,
	heavyWounds int,
	WoundLimit int,
	initiative int,
	willpowerPoints int,
	willpowerPointsLimit int,
	advantages text,
	disadvantages text,
	physicalExp int,
	mentalExp int,
	softSkillsExp int,
	postureAtt int,
	strengthAtt int,
	dexterityAttr int,
	intelligenceAttr int,
	willpowerAttr int,
	observationAttr int,
	composureAttr int,
	persuasionAttr int,
	resourcefulnessAttr int,
	idpostureprofs int REFERENCES postureprofs(idpostureprofs),
	idstrengthprofs int REFERENCES strengthprofs(idstrengthprofs),
	iddexterityprofs int REFERENCES dexterityprofs(iddexterityprofs),
	idintelligenceprofs int REFERENCES intelligenceprofs(idintelligenceprofs),
	idwillpowerprofs int REFERENCES willpowerprofs(idwillpowerprofs),
	idobservationprofs int REFERENCES observationprofs(idobservationprofs),
	idcomposureprofs int REFERENCES composureprofs(idcomposureprofs),
	idpersuasionprofs int REFERENCES persuasionprofs(idpersuasionprofs),
	idresourcefulnessprofs int REFERENCES resourcefulnessprofs(idresourcefulnessprofs),
	weaponsid text,
	equipment text,
	equipmentlimit int,
	equipmentmax int
);
