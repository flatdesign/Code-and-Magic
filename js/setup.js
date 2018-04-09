'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
var similarListElement = document.querySelector('.setup-similar-list');
var similarListTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var wizardNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardSecondNames = ['да Мапья', ' Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

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

