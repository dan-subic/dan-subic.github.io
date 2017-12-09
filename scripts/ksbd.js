

var adjList = ["White","Black","Red","Blue","Green","Aquamarine","Indigo","Golden",
				"Radiant","Dark","Bright","Juggernaut","Liminal","Furious","Vigilant","Wilful",
				"Turbulent","Shining","Sorrowful","Ardent","Adamant","Painful","Docile","Frozen",
				"Burning","Cold","Hot","Verdant","Silent","Hopeful","Endless","Infinite",
				"Gilded","Paper","Bloody","Recursive","Empty","Questioning","Ambulant","Pure",
				"Peaceful","Wooden","Living","Glass","Ancient","Blinding","Vengeful","Iridescent",
				"Ethereal","Sanguine","Fluorescent","Prismatic","Iron","Ivory","Hollow", "Righteous",
				"Rising","Falling","Brilliant","Relentless","Judicious"];

var nounList = ["Chain","Blossom","Star","Gaze","Blade","Disc","Stream","River",
				"Ocean","Mountain","Tower","Temple","Shield","Spear","Flame","Cloud",
				"Storm","Wave","Tide","Tree","Wind","Dome","Tome","Orb",
				"Rod","Breath","Song","Voice","Word","Thorn","Stone","Peak",
				"Spirit","Field","Hammer","Chisel","Vault","Smoke","Crown","Claw",
				"Chariot","Bridge","Flower","Continent","Comet","Diamond","Meteor","Anvil",
				"Forge","Mask","Student","Feather","Scale","Hand","Eye","Sigil", 
				"Void","Horizon","World","Sun","Waterfall","Mist","Abyss","Vortex",
				"Drum","Heart","Light","Bird","Veil","Bell","Sound","Cube",
				"Sphere","Pyramid","Fist","Prism","Prison","Cage","Rain","Rune",
				"Bone"];

var verbsList = ["Subdues","Scours","Punctures","Purges","Accuses","Protects","Combats","Apprehends",
				"Breaks","Shatters","Heals","Repairs","Engulfs","Questions","Crushes","Perceives",
				"Analyzes","Enlightens","Seals","Defeats","Vanquishes","Queries","Excises","Plunges Into",
				"Shakes Off","Resists","Shelters","Reveals","Strips the Bones of","Eats","Devours","Cuts",
				"Shields","Lifts Up","Burns","Ignites","Sunders","Smashes","Annihilates","Dresses the Wounds of",
				"Cascades Upon","Descends Upon","Plagues","Cleaves","Shames","Rebels Against","Befriends","Betrays",
				"Seeks","Carves","Sears","Cracks"];

var ofNounsList = ["Fate","Evil","the Universe","the Unrepentant","Darkness","the Truthful","the Dishonest","the Fortunate",
					"the Unfortunate","the Sinful","God","the Gods","the Repentant","the Wise","the Foolish","the Holy",
					"the Cursed","Civilization","the Dead","the Living","Space-Time","the Wicked","Truth","Reality",
					"Lies","the Virtuous","Thought","Heretics","Sin","the Faithless","Creation","Faith",
					"Doubt","Existence","Morality"];


var adverbsList = ["Without Remorse","Furiously","Deliciously","With Great Sorrow",
				"With Glee","With Terrible Purpose","Fervently","Honorably",
				"Accidentally","In the Proper Manner","With Cunning","Without Hesitation",
				"With Regret","On a Regular Basis","Solemnly","Viciously",
				"Gracefully","Tentatively","in Accordance With the Law","With Precision",
				"Grudgingly"]; 

var colourList = ["red","orange","yellow","green","blue","indigo","violet","purple",
					"black","white","teal","gold","silver","grey","brown","pink"];



function generate()
{

	var stateChecked = document.getElementById("stateBox").checked;
	//var fightStyleChecked = document.getElementById("fightStyleBox").checked;
	var armourChecked = document.getElementById("armourBox").checked;
	var formChecked = document.getElementById("formBox").checked;
	var beliefsChecked = document.getElementById("beliefsBox").checked;

	if (stateChecked === true)
	{
		generateState();
	}
	else
	{
		document.getElementById("state").innerHTML = "";
	}
	
	/*if (fightStyleChecked === true)
	{
		generateFightStyle();
	}
	else
	{
		document.getElementById("fightStyle").innerHTML = "";
	}*/

	if (armourChecked === true)
	{
		generateArmour();
	}
	else
	{
		document.getElementById("armour").innerHTML = "";
	}

	if (formChecked === true)
	{
		generateForm();
	}
	else
	{
		document.getElementById("form").innerHTML = "";
	}

	if (beliefsChecked === true)
	{
		generateBeliefs();
	}
	else
	{
		document.getElementById("beliefs").innerHTML = "";
	}

	var finalName = randNumber() + ' ';
	finalName += randSelect(adjList) + ' ';
	finalName += randSelect(nounList) + ' ';

	var rand = Math.random() * 100;
	if (rand < 30)
	{
		finalName += "of " + randSelect(ofNounsList) + ' ';
	}

	finalName += randSelect(verbsList) + ' ';

	if (rand > 70)
	{
		finalName += "the " + randSelect(nounList) + " of " + randSelect(ofNounsList);
	}
	else
	{
		finalName += randSelect(ofNounsList);
	}

	var rand2 = Math.random() * 100;
	if (rand2 < 30)
	{
		finalName += ' ' + randSelect(adverbsList);
	}

	document.getElementById("name").innerHTML = "This angel's name is " + finalName + '.';


}

function randNumber()
{
	var number = Math.floor(Math.random() * 100);

	if (number < 2)
	{
		number = 2;
	}

	return number;
}

function generateState()
{
	var randStateVal = Math.floor(Math.random() * 6); // range 0-5
	var angelState;
	if (randStateVal === 0)
	{
		angelState = "Plasma";
	}
	else if (randStateVal === 1)
	{
		angelState = "Vapor";
	}
	else if (randStateVal === 2)
	{
		angelState = "Liquid";
	}
	else if (randStateVal === 3)
	{			
		angelState = "Metamorphic";
	}
	else if (randStateVal === 4)
	{
		angelState = "Igneous";		
	}
	else		
	{
		angelState = "Crystal";
	}

	if (randStateVal === 4)
	{
		document.getElementById("state").innerHTML = "He is an " + angelState + " angel.";
	}
	else
	{
		document.getElementById("state").innerHTML = "He is a " + angelState + " angel.";
	}
}

function generateFightStyle()
{

	var styleFirstWord = ["Pattram",randNumber(),"Twin","Aesma's","Harmonious","Mantis","Eagle","Serpent",
							"Crane","Sparrow","Bull","Spider","Tiger","Lion","Hornet","Crab",
							"Bear","Wight","Griffon","Manticore","Kraken","Dragon","Leviathan's","Behemoth's",
							"Roc's","Wyvern","Lizard","Raven"];

	var styleSecondWord = ["Empty","Sword","Cutting","Flowering","Fire","Flying","Crushing","Flowing",
							"Lashing","Piercing","Spear","Knife","Steel","Soft","Singing","Twisting",
							"Water","Mighty","Long","Slashing","Screaming","Steel","Dancing"];

	var styleThirdWord = ["Hand","Palm","Knee","Elbow","Tooth","Tongue","Finger","Toe",
							"Foot","Fist","Knuckle","Heel","Skull","Eye","Jaw","Nail"];

	document.getElementById("fightStyle").innerHTML = "He practices the " 
													+ randSelect(styleFirstWord) + ' '
													+ randSelect(styleSecondWord) + ' '
													+ randSelect(styleThirdWord) 
													+ " style of martial arts.";
}

function generateArmour()
{
	var armourDescriptorList = ["smooth","polished","sharp","heavy","lightweight","beautiful","bulky","slim",
								"jagged","unimpressive","simple","rounded","shining","cracked","broken","dirty",
								"striking","elongated","squat","pointed","bent","rigid","iridescent"];

	var colourDescriptorList = ["pale","dark","dull","muted","soft","subdued","faded","light",
								"deep"];

	var featureDescriptorList = ["many","large",randSelect(colourList),"subtle",
								"unusual","inset","decorative","prominent","small","intricate","mysterious"];

	var featureList = ["spines","spikes","feathers","runes","polygons","flowers","stones","protective plates",
						"leaves","holes","circles","patches of fur","metals","illustrations","fabrics"];

	var armourDescriptor = randSelect(armourDescriptorList);
	var colourDescriptor = randSelect(colourDescriptorList);
	var colour = randSelect(colourList);
	var featureDescriptor = randSelect(featureDescriptorList);
	var feature = randSelect(featureList);

	document.getElementById("armour").innerHTML = "His " + armourDescriptor + " armor is a " + colourDescriptor + " " 
												+ colour + ". It is adorned with " + featureDescriptor + " " 
												+ feature + ".";
}

/*function generateForm()
{
	// His true form is that of a [colour] 
	// (mass of [arms/legs/wings/eyes/other body parts])/([human/bird/animal/wheel/chain/etc])
	// with [arms/legs/wings/eyes/other body parts] (where [arms/legs/a head/etc] might have been)/(at its joints)

	var bodyPartsMultipleList = ["arms","legs","heads","wings","eyes","tongues","hands","feet",
								"teeth"];

	var bodyPartsSingleList = ["arms","legs","head","wings","eyes","tongue","hands","feet",
								"teeth"];

	var objectsMutlipleList = ["wheels","chains","orbs","mirrors","masks","flames","knives"];

	var objectsSingleList = ["wheel","chain","orb","mirror","mask","flame","knife"];

	var creatureList = ["mantis","eagle","serpent","crane","sparrow","ox","spider","tiger",
						"lion","hornet","crab","bear","griffon","manticore","kraken","dragon",
						"wyvern","lizard","raven"];

	var obsBodyMultipleList = objectsMutlipleList.concat(bodyPartsMultipleList);
	
	var obCreatureList = objectsSingleList.concat(creatureList);

	var humanOrCreature = ["human",randSelect(obCreatureList)];

	var massOrBody = ["mass of " + randSelect(obsBodyMultipleList), randSelect(humanOrCreature)];

	document.getElementById("form").innerHTML = "His true form is that of a " 
												+ randSelect(colourList)
												+ " " + randSelect(massOrBody)
												+ ", with " 	
												+ randSelect(obsBodyMultipleList)
												+ " where its "
												+ randSelect(bodyPartsSingleList)
												+ " might have been.";
}*/

function generateForm()
{
	var creatureList = ["mantis","serpent","ox","spider","tiger","lion","beetle","crab",
						"bear","goat","fish","lizard", "eel", "fox", "wolf", "squid"];

	var humanOrCreature = ["human",randSelect(creatureList)];

	var bodyPartsSingleList = ["arms","legs","a head","a face","eyes","a mouth","hands","feet",
								"teeth"];

	var objectsMultipleList = ["wheels","chains","orbs","mirrors","masks","flames","knives"];

	var desc = "His true form is that of a " 
			+ randSelect(colourList) + " " 
			+ randSelect(humanOrCreature);

	var modified = false;

	if (randNumber() > 10)
	{
		modified = true;
		desc += " with wings"
		if (randNumber() < 30)
		{
			desc += " for " + randSelect(bodyPartsSingleList);
		}
	}

	if (randNumber() > 50)
	{
		if (modified)
		{
			desc += ", and";
		}
		else
		{
			desc += " with";
		}

		desc += " " + randSelect(objectsMultipleList) + " for " + randSelect(bodyPartsSingleList);
	}

	desc += ".";

	document.getElementById("form").innerHTML = desc;
}

function generateBeliefs() 
{
	var beliefsList = ["morality","God","the Old Law","reality","Atru","gender roles","the Concordant Harmonies","the Holy Thorn Knights",
						"the Petal Knights","Throne","the universe","humanity","art","emotion","logic","truth",
						"his enemies","war","peace","violence"];

	var positivesList = ["loves","respects","is devoted to","has faith in","is inspired by"];

	var negativesList = ["rejects","does not believe in","is digusted by","hates","wishes to destroy"];

	var belief = "He " + randSelect(positivesList) + " " + randSelect(beliefsList) 
				+ ", but " + randSelect(negativesList) + " " + randSelect(beliefsList) + ".";

	document.getElementById("beliefs").innerHTML = belief;


}

function randSelect(list)
{
	var sel = list[Math.floor(Math.random() * list.length)];
	return sel;
}

