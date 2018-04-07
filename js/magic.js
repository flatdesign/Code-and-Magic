var fireballSize = 22;
var wizardSpeed = 3;
var wizardWidth = 70;

var getFireballSpeed = function(left) {
	var speed;
	if (left) {
		return speed = 5;
	}
	return speed = 2;
};

var getWizardHeight = function() {
	return 1.337 * wizardWidth;
};

var getWizardX = function(width) {
	return width/2;
};

var getWizardY = function(height) {
	return height * (1/3);
};

