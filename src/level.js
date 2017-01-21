function loadLevel(name, callback) {
	var req = new XMLHttpRequest();
	
	req.overrideMimeType("application/json");
	req.open("GET", "levels/" + path + ".json", true);
	req.onreadystatechange = function() {
		if(req.readyState == 4 && req.status == "200") {
			callback(JSON.parse(req.responseText));			
		}
	}
	req.send(null);
}
