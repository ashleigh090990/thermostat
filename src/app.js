var thermostat = new Thermostat();

window.onload = function() {
	updateTemp();
};

Thermostat.prototype.increaseTemp = function() {
	thermostat.up();
	updateTemp();
};

Thermostat.prototype.decreaseTemp = function() {
	thermostat.down();
	updateTemp();
};

Thermostat.prototype.resetTemp = function() {
	thermostat.reset();
	updateTemp();
};

Thermostat.prototype.powerSaveOn = function() {
	thermostat.powersave("on");
	this.reset();
	updateTemp();
};

Thermostat.prototype.powerSaveOff = function() {
	thermostat.powersave("off");
	this.reset();
	updateTemp();
};

function updateTemp() {
	document.getElementById('degrees').innerHTML = thermostat.temperature;
};

// api http request:
$.get( "http://api.openweathermap.org/data/2.5/weather?q=London,uk", function( data ) {
	// console.log(data.weather[0].description);
	document.getElementById('apirequest').innerHTML = data.weather[0].description;
});


