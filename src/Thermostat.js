function Thermostat() {

	this.temperature = 20;
	this.powersavemode = "on";

	Thermostat.prototype.change = function(number) {
		this.temperature = this.temperature + number

		if (this.temperature < 10) {
			this.temperature = 10;
		};
		
		if ((this.powersavemode === "on") && (this.temperature > 25)) {
			this.temperature = 25;
		};
		
		if((this.powersavemode === "off") && (this.temperature > 32)) {
			this.temperature = 32;
		};

		return(this.temperature);

	};

	

	Thermostat.prototype.reset = function() {
		this.temperature = 20;
		return(this.temperature);
	};

};

