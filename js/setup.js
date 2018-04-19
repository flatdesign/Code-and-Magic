'use strict';

(function() {

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var userDialog = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = userDialog.querySelector('.setup-close');
var userName = document.querySelector('.setup-user-name');
var setupWizard = document.querySelector('.setup-wizard');
var setupColorCoat = setupWizard.querySelector('.wizard-coat');
var setupColorEyes = setupWizard.querySelector('.wizard-eyes');
var setupColorFireball = document.querySelector('.setup-fireball-wrap');
var similarListElement = document.querySelector('.setup-similar-list');
var similarListTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var openPopup = function() {
	userDialog.classList.remove('hidden');
	document.addEventListener('keydown', onPopupEscPress);
	userDialog.style.top = "80px";
	userDialog.style.left ="675px";
};

var closePopup = function() {
	userDialog.classList.add('hidden');
	artifactsElement.style.border = "";
	document.removeEventListener('keydown', onPopupEscPress);
};

var onPopupEscPress = function(evt) {
	if(evt.keyCode === ESC_KEYCODE && (document.activeElement != userName)) {
		closePopup();
	}
};

setupOpen.addEventListener('click', function() {
	openPopup();
});

setupOpen.addEventListener('keydown', function(evt) {
	if(evt.keyCode === ENTER_KEYCODE) {
		openPopup();
	}
});

setupClose.addEventListener('click', function() {
	closePopup();
});

setupClose.addEventListener('keydown', function(evt) {
	if(evt.keyCode === ENTER_KEYCODE) {
		closePopup();
	}
});

userName.addEventListener('invalid', function(evt) {
	if(userName.validity.tooShort) {
		userName.setCustomValidity('Магу не нравиться, когда его имя меньше 2-х символов');
	} else if (userName.validity.tooLong) {
		userName.setCustomValidity('А ты сам это выговоришь ? (сделай имя короче)');
	} else if (userName.validity.valueMissing) {
		userName.setCustomValidity('Забыл(а) указать имя персонажа');
	}
	else {
		userName.setCustomValidity('');
	}
});

var j = 0;
setupColorCoat.addEventListener('click', function() {
	if(j > 5) {
		j = 0;
	}
	setupColorCoat.style.fill = coatColors[j++];
});

var k = 0;
setupColorEyes.addEventListener('click', function() {
	if(k > 4) {
		k = 0;
	}
	setupColorEyes.style.fill = coatColors[k++];
});

var f = 0;
setupColorFireball.addEventListener('click', function() {
	if(f > 4) {
		f = 0;
	}
	setupColorFireball.style.background = fireballColors[f++];
});

var wizardNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardSecondNames = ['да Мапья', ' Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
var fireballColors = [ '#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var random = function(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
};

var wizards = [
	{
		name: wizardNames[random(0, 8)] + ' ' + wizardSecondNames[random(0, 8)],
		coatColor: coatColors[random(0, 5)],
		eyesColor: eyesColors[random(0, 4)]
	},
	{
		name: wizardNames[random(0, 8)] + ' ' + wizardSecondNames[random(0, 8)],
		coatColor: coatColors[random(0, 5)],
		eyesColor: eyesColors[random(0, 4)]
	},
	{
		name: wizardNames[random(0, 8)] + ' ' + wizardSecondNames[random(0, 8)],
		coatColor: coatColors[random(0, 5)],
		eyesColor: eyesColors[random(0, 4)]
	},
	{
		name: wizardNames[random(0, 8)] + ' ' + wizardSecondNames[random(0, 8)],
		coatColor: coatColors[random(0, 5)],
		eyesColor: eyesColors[random(0, 4)]
	}
];

var renderWizard = function(wizard) {
	var wizardElement = similarListTemplate.cloneNode(true);
	wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
	wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
	wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
	return wizardElement;
};

var fragment = document.createDocumentFragment();
for(var i = 0; i < wizards.length; i++) {
	fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);
document.querySelector('.setup-similar').classList.remove('hidden'); 



var dialogHandle = userDialog.querySelector(".setup-user-pic");



dialogHandle.addEventListener("mousedown", function(evt) {
	evt.preventDefault();

	var startCoords = {
		x: evt.clientX,
		y: evt.clientY
	};

	


	var onMouseMove = function(moveEvt) {
		moveEvt.preventDefault();

		var shift = {
			x: moveEvt.clientX - startCoords.x,
			y: moveEvt.clientY - startCoords.y
		};

		startCoords = {
			x: moveEvt.clientX,
			y: moveEvt.clientY
		}

		userDialog.style.top = (userDialog.offsetTop + shift.y) + "px";
		userDialog.style.left =(userDialog.offsetLeft + shift.x) + "px";
	};

		var onMouseUp = function(upEvent) {
			upEvent.preventDefault();
			document.removeEventListener("mousemove", onMouseMove);
			document.removeEventListener("mouseup", onMouseUp);
		};

	document.addEventListener("mousemove", onMouseMove);
	document.addEventListener("mouseup", onMouseUp);
});

var shopElement = document.querySelector(".setup-artifacts-shop");
var artifactsElement = document.querySelector(".setup-artifacts");
var draggItem = null;

shopElement.addEventListener("dragstart", function(evt) {
	if(evt.target.tagName.toLowerCase() === "img") {
		draggItem = evt.target;
		artifactsElement.style.border = "2px dashed red";
		evt.dataTransfer.setData("text/plain", evt.target.alt);
	}
});



artifactsElement.addEventListener("dragover", function (evt) {
	evt.preventDefault();
	return false;
});

artifactsElement.addEventListener("drop", function(evt) {
	evt.target.style.backgroundColor = "";
	evt.target.appendChild(draggItem);
	artifactsElement.style.border = "";
	evt.preventDefault();
});

artifactsElement.addEventListener("dragenter", function(evt) {
	evt.target.style.backgroundColor = "yellow";
	evt.preventDefault();
});

artifactsElement.addEventListener("dragleave", function(evt) {
	evt.target.style.backgroundColor = "";
	evt.preventDefault();
});

})();






