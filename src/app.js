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