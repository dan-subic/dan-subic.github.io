

var adjList = ["White","Black","Red","Blue","Green","Aquamarine","Indigo","Golden",
				"Radiant","Dark","Bright","Juggernaut","Liminal","Furious","Vigilant","Wilful",
				"Turbulent","Shining","Sorrowful","Ardent","Adamant","Painful","Docile","Frozen",
				"Burning","Cold","Hot","Verdant","Silent","Hopeful","Endless","Infinite",
				"Gilded","Paper","Bloody","Recursive","Empty","Questioning","Ambulant","Pure",
				"Peaceful","Wooden","Living","Glass","Ancient","Blinding","Vengeful","Iridescent"];

var nounList = ["Chain","Blossom","Star","Gaze","Blade","Disc","Stream","River",
				"Ocean","Mountain","Tower","Temple","Shield","Spear","Flame","Cloud",
				"Storm","Wave","Tide","Tree","Wind","Dome","Tome","Orb",
				"Rod","Breath","Song","Voice","Word","Thorn","Stone","Concordance",
				"Spirit","Field","Hammer","Chisel","Coin","Smoke","Crown","Claw",
				"Chariot","Bridge","Flower","Continent","Comet","Diamond","Meteor","Anvil",
				"Forge","Mask","Student","Feather","Scale","Hand","Eye","Sigil", 
				"Void","Horizon","World","Sun","Iron","Mist","Abyss","Vortex",
				"Plague","Drum","Heart","Light","Bird","Veil","Bell","Sound"];

var verbsList = ["Subdues","Scours","Punctures","Purges","Accuses","Protects","Combats","Apprehends",
				"Breaks","Shatters","Heals","Repairs","Engulfs","Questions","Crushes","Perceives",
				"Analyzes","Enlightens","Seals","Defeats","Vanquishes","Queries","Excises","Plunges Into",
				"Shakes Off","Resists","Shelters","Reveals","Strips the Bones of","Eats","Devours","Cuts",
				"Shields","Lifts up","Burns","Ignites","Sunders","Smashes","Annihilates","Dresses the Wounds of"];

var ofNounsList = ["Fate","Evil","the Universe","the Unrepentant","Darkness","the Truthful","the Dishonest","the Fortunate",
					"the Unfortunate","the Sinful","God","the Gods","the Repentant","the Wise","the Foolish","the Holy",
					"the Cursed","Civilization","the Dead","the Living","Space-Time","the Wicked","Truth","Reality",
					"Lies","the Virtuous","Thought","Heretics","Sin","the Faithless","Creation","Faith"];



var colourList = ["red","orange","yellow","green","blue","indigo","violet","purple",
					"black","white","teal","gold","silver","grey","brown","pink"];



function generate()
{

	var num = randNumber();
	var adj = randSelect(adjList);
	var noun = generateNoun();
	var verbs = randSelect(verbsList);

	var finalNoun;
	var rand = Math.random() * 100;
	if (rand < 30)
	{
		finalNoun = "the " + generateNoun();
	}
	else
	{
		finalNoun = randSelect(ofNounsList);
	}

	var stateChecked = document.getElementById("stateBox").checked;
	var fightStyleChecked = document.getElementById("fightStyleBox").checked;
	var armourChecked = document.getElementById("armourBox").checked;
	var formChecked = document.getElementById("formBox").checked;

	if (stateChecked === true)
	{
		generateState();
	}
	else
	{
		document.getElementById("state").innerHTML = "";
	}
	
	if (fightStyleChecked === true)
	{
		generateFightStyle();
	}
	else
	{
		document.getElementById("fightStyle").innerHTML = "";
	}

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

	document.getElementById("name").innerHTML = "This angel's name is " + num + ' ' + adj + ' ' + noun + ' ' 
												+ verbs + ' ' + finalNoun + '.';


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

function generateNoun()
{
	var num = Math.random() * 100;
	var noun = randSelect(nounList);
	if (num < 25)
	{
		noun = noun + " of " + randSelect(ofNounsList);
	}
	return noun;
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

	var colourDescriptorList = ["pale","dark","dull","muted","soft","subdued","faded","light"];

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

function generateForm()
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

	var creatureList = ["mantis","eagle","serpent","crane","sparrow","bull","spider","tiger",
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
}

function randSelect(list)
{
	var sel = list[Math.floor(Math.random() * list.length)];
	return sel;
}

