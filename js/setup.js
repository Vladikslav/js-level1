// Файл setup.js
'use strict';
window.onload = () => {
    var userDialog = document.querySelector('.setup');
    userDialog.classList.remove('hidden');
    var similarListElement = userDialog.querySelector('.setup-similar-list');
    var similarWizardTemplate = document.querySelector('#similar-wizard-template')
        .content
        .querySelector('.setup-similar-item');
    var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
    var WIZARD_SECOND_NAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Тополницкая', 'Нионго', 'Ирвинг'];
    var WIZARD_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
    var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
    var WIZARD_FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

    var wizards = [
        {
            name: getRandomWizardName(WIZARD_NAMES, WIZARD_SECOND_NAME),
            coatColor: getRandomWizard(WIZARD_COLOR),
            eyesColor: getRandomWizard(WIZARD_EYES_COLORS)
        },
        {
            name: getRandomWizardName(WIZARD_NAMES, WIZARD_SECOND_NAME),
            coatColor: getRandomWizard(WIZARD_COLOR),
            eyesColor: getRandomWizard(WIZARD_EYES_COLORS)
        },
        {
            name: getRandomWizardName(WIZARD_NAMES, WIZARD_SECOND_NAME),
            coatColor: getRandomWizard(WIZARD_COLOR),
            eyesColor: getRandomWizard(WIZARD_EYES_COLORS)
        },
        {
            name: getRandomWizardName(WIZARD_NAMES, WIZARD_SECOND_NAME),
            coatColor: getRandomWizard(WIZARD_COLOR),
            eyesColor: getRandomWizard(WIZARD_EYES_COLORS)
        }
    ]
    function getRandomWizardName(arr, arr1) {
        let name = getRandom(arr);
        let secondName = getRandom(arr1);
        return name + ' ' + secondName;
    }
    function getRandomWizard(arr) {
        return getRandom(arr);

    }
    function getRandom(arr) {
        var rand = Math.floor(Math.random() * arr.length);
        return arr[rand];
    }
    var renderWizard = function (wizard) {
        var wizardElement = similarWizardTemplate.cloneNode(true);
        wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
        wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
        wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

        return wizardElement;
    }

    var fragment = document.createDocumentFragment();
    for (var i = 0; i < wizards.length; i++) {
        fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);

    userDialog.querySelector('.setup-similar').classList.remove('hidden');
    document.querySelector('.setup-close').addEventListener('click',function() {
        userDialog.classList.add('hidden');
    });
    document.querySelector('.setup-open').addEventListener('click',function() {
        userDialog.classList.remove('hidden');
    });
    document.querySelector('.setup-open').addEventListener('keydown',function(evt) {
        if(evt.keyCode ==13) {
            userDialog.classList.remove('hidden');
        }
    });
    document.querySelector('.setup-close').addEventListener('keydown',function(evt) {
        if(evt.keyCode == 27 || evt.keyCode == 13) {
            userDialog.classList.add('hidden');
        }
    });
    document.querySelector('.wizard-coat').addEventListener('click', function(){
        let num = RandomColor(WIZARD_COLOR);
        this.style.fill = WIZARD_COLOR[num];
    });
    document.querySelector('.wizard-eyes').addEventListener('click', function(){
        let num = RandomColor(WIZARD_EYES_COLORS);
        this.style.fill = WIZARD_EYES_COLORS[num];
    });
    document.querySelector('.setup-fireball-wrap').addEventListener('click', function(){
        let num = RandomColor(WIZARD_FIREBALL_COLORS);
        this.style.background = WIZARD_FIREBALL_COLORS[num];
    });
    function RandomColor(array) {
        return Math.floor(Math.random() * array.length);
    }
}