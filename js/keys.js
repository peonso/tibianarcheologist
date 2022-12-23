var myList = [

	{ "img": "<img src=\"images/keys/sprite_1060.png\">", "name": "Silver Key 1006", "origin": "Spawns south tower area of rain castle", "opens": "Door to bridgekeeper's house", "obs.": "..."},
	{ "img": "<img src=\"images/keys/sprite_1060.png\">", "name": "Silver Key 1008", "origin": "Spawns in the underground area of tibia city graveyard", "opens": "Door to secret cellar in sunset homes flat 1", "obs.": "..."},
	{ "img": "<img src=\"images/keys/sprite_1060.png\">", "name": "Silver Key 1021", "origin": "Spawns randomly in sunset homes area", "opens": "Door to Tibia city south guard house lower floor", "obs.": "..."},
	{ "img": "<img src=\"images/keys/sprite_1060.png\">", "name": "Silver Key 3600", "origin": "Located in dead skeleton near ghoul room in ancient temple", "opens": "Door to lower ghoul room in ancient temple", "obs.": "..."},
	{ "img": "<img src=\"images/keys/sprite_1060.png\">", "name": "Silver Key 3610", "origin": "Located under a firefield on top of a stone pile in cyclops room near mintwallen", "opens": "Door to mintwallen lab near giant spider", "obs.": "..."},
	{ "img": "<img src=\"images/keys/sprite_1060.png\">", "name": "Silver Key 3620", "origin": "Located in chest of drawers in mintwallen barracks", "opens": "Door to gain access to NPC A Prisoner", "obs.": "..."},
	{ "img": "<img src=\"images/keys/sprite_1060.png\">", "name": "Silver Key 3650", "origin": "Located in dead body in rotworms near katana quest", "opens": "Door to lower katana quest area", "obs.": "..."},
	{ "img": "<img src=\"images/keys/sprite_1060.png\">", "name": "Silver Key 3666", "origin": "Earn from NPC A Prisoner", "opens": "Door to mad mage quest room rewards", "obs.": "..."},
	{ "img": "<img src=\"images/keys/sprite_1060.png\">", "name": "Silver Key 3667", "origin": "Located in dead body under mad mage quest room", "opens": "Door cyclops area near mintwallen", "obs.": "..."},
	{ "img": "<img src=\"images/keys/sprite_1062.png\">", "name": "Wooden Key 3940", "origin": "Buy from NPC Simon the Beggar", "opens": "Door to lower fibula area", "obs.": "..."},
	{ "img": "<img src=\"images/keys/sprite_1061.png\">", "name": "Copper Key 3940", "origin": "Buy from NPC Dermot", "opens": "Door to lower fibula area", "obs.": "..."},
	{ "img": "<img src=\"images/keys/sprite_1062.png\">", "name": "Wooden Key 3950", "origin": "-", "opens": "Door to cyclops area east of mercenary tower in fibula", "obs.": "..."},
	{ "img": "<img src=\"images/keys/sprite_1062.png\">", "name": "Wooden Key 3960", "origin": "-", "opens": "Door to flute room under fibula", "obs.": "..."},
	{ "img": "<img src=\"images/keys/sprite_1062.png\">", "name": "Golden Key 3980", "origin": "Located in a box under fibula near mino mages", "opens": "Door to deeper fibula", "obs.": "..."},
	{ "img": "<img src=\"images/keys/sprite_1060.png\">", "name": "Silver Key 4600", "origin": "Buy from NPC Seymour", "opens": "Door in rookgaard training room", "obs.": "..."},
	{ "img": "<img src=\"images/keys/sprite_1061.png\">", "name": "Copper Key 4601", "origin": "dead wolf body near bear room in rookgaard", "opens": "Door to the bear room in rookgaard", "obs.": "..."},
	{ "img": "<img src=\"images/keys/sprite_1060.png\">", "name": "Silver Key 4603", "origin": "Located in dead body in rotworms near rookgaard katana quest", "opens": "Door to lower katana quest area", "obs.": "..."},
	
	//non used key types
	{ "img": "<img src=\"images/keys/sprite_1064.png\">", "name": "Crystal Key", "origin": "-", "opens": "-", "obs.": "not in game"},
	{ "img": "<img src=\"images/keys/sprite_1063.png\">", "name": "Magical Key", "origin": "-", "opens": "-", "obs.": "not in game"},
	{ "img": "<img src=\"images/keys/sprite_1065.png\">", "name": "Bone Key", "origin": "-", "opens": "-", "obs.": "not in game"},	
	
];

// Builds the HTML Table out of myList.
function buildHtmlTable(selector)	{
	var columns = addAllColumnHeaders(myList, selector);

	for (var i = 0; i < myList.length; i++)	{
		var row$ = $('<tr/>');
		for (var colIndex = 0; colIndex < columns.length; colIndex++)	{
			var cellValue = myList[i][columns[colIndex]];
			if (cellValue == null) cellValue = "";
				row$.append($('<td/>').html(cellValue));
		}
		$(selector).append(row$);
	}
}

// Adds a header row to the table and returns the set of columns.
// Need to do union of keys from all records as some records may not contain
// all records.
function addAllColumnHeaders(myList, selector)	{
	var columnSet = [];
	var headerTr$ = $('<tr/>');

	for (var i = 0; i < myList.length; i++)	{
		var rowHash = myList[i];
		for (var key in rowHash)	{
			if ($.inArray(key, columnSet) == -1)	{
				columnSet.push(key);
				headerTr$.append($('<th/>').html(key));
			}
		}
	}
	$(selector).append(headerTr$);

	return columnSet;
}