"use strict";

(function() {
window.magic = {
	fireballSize: 22,
  wizardSpeed: 3,
  wizardWidth: 70,

	getFireballSpeed: function(left) {
		var speed;
		if (left) {
			return speed = 5;
		}
		return speed = 2;
	},

	getWizardHeight: function() {
		return 1.337 * magic.wizardWidth;
	},

	getWizardX: function(width) {
		return width/2;
	},

	getWizardY: function(height) {
		return height * (1/3);
	}
};

})();

