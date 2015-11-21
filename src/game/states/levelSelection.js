'use strict';
var gameData = require('../gameData/gameData');
var config = require('../config/main');
var SoundManager = require('../device/web/soundmanager/SoundManager');
function SelectLevel() {
}

SelectLevel.prototype = {
    preload: function () {

    },

    create: function () {
        this.initBackgroud();
        this.initMenu();
        this.initPageManager();
        this.initHeader();
        this.currentPage = 0;
        gameData.steps = 0;
        SoundManager.addSound(this.game, 'openSound', 0.1, true);
        SoundManager.play('openSound');
        //this.loopSound = this.game.add.audio('openSound', 0.1, true);
        //this.loopSound.play();
    },
    initBackgroud: function initBackgroun() {
        this.background = this.game.add.sprite(0, 0, 'bgLevelsSelector');
    },

    calculatePuntuation: function calculatePuntuation() {
        var puntuation = gameData.levelSelection.reduce(function (previous, current) {
            return previous + parseInt(current.stars);
        }, 0);
        var globalPuntuation = gameData.levelSelection.length * 3;

        return {global: globalPuntuation, puntuation: puntuation};
    },

    initHeader: function initHeader() {
        this.homeButton = this.game.add.button(10, 4, 'homeButton', this.goHome, this, 'home_off', 'home_off', 'home_on', 'home_off');
        var style = {font: "120px creamreg", fill: "#ffffff", wordWrap: true};
        var myPuntuationData = this.calculatePuntuation();
        this.stars = this.game.add.text(850, 30, myPuntuationData.puntuation + '/' + myPuntuationData.global, style);
        this.stars.setShadow(3, 3, 'rgba(0,0,0,1)', 5);
        this.stars.anchor.x = 1;
    },

    goHome: function goHome() {
        SoundManager.stop('openSound');
        //this.loopSound.stop();
        this.game.state.start('menu');
    },

    initPageManager: function () {
        this.pageManager = this.game.add.group();
        this.leftButton = this.game.add.button(180, 1658, 'pageButtons', this.goBackPage, this, 'left_off', 'left_off', 'left_on', 'left_off');
        this.rightButton = this.game.add.button(650, 1658, 'pageButtons', this.goNextPage, this, 'right_off', 'right_off', 'right_on', 'right_off');
        if (this.totalPages === 1) {
            this.rightButton.alpha = 0.5;
        }
        this.leftButton.alpha = 0.5;
    },

    goNextPage: function () {
        if (this.currentPage < (this.totalPages - 1)) {
            this.levels[this.currentPage].visible = false;
            this.currentPage = this.currentPage + 1;
            this.levels[this.currentPage].visible = true;
            this.rightButton.alpha = 1;
            this.leftButton.alpha = 1;
            if ((this.currentPage + 1) === (this.totalPages)) {
                this.rightButton.alpha = 0.5;
            }
        }
    },

    goBackPage: function () {
        if (this.currentPage > 0) {
            this.levels[this.currentPage].visible = false;
            this.currentPage = this.currentPage - 1;
            this.levels[this.currentPage].visible = true;
            this.leftButton.alpha = 1;
            this.rightButton.alpha = 1;

            if (this.currentPage === 0) {
                this.leftButton.alpha = 0.5;
            }
        }
    },
    getLevelInfoFromLocalStorage: function () {
        for (var i = 0; i < gameData.levelSelection.length; i++) {

            if (typeof(Storage) !== "undefined") {
                if (localStorage['level' + i + '-stars']){
                    gameData.levelSelection[i].stars = localStorage['level' + i + '-stars'];

                }
                if (localStorage['level' + i]) {
                    gameData.levelSelection[i].blocked = localStorage['level' + i].blocked;
                }
            }
        }

    },


    initMenu: function () {
        this.levels = [];
        this.totalPages = gameData.levelSelection.length / config.levelSelection.maxLevelsPerPage;
        for (var i = 0; i < this.totalPages; i++) {
            this.levels[i] = this.game.add.group();
            this.levels[i].visible = false;
        }
        var pagIndex = 0;
        var levelIndex = 0;
        var ceilIndex = 0
        var rowIndex = 0
        var self = this;

        this.getLevelInfoFromLocalStorage();

        gameData.levelSelection.forEach(function (levelConfig, index) {
            if (ceilIndex === config.levelSelection.maxLevelsPerRow) {
                ceilIndex = 0;
                rowIndex++;
            }
            var levelButton = self.initLevelButton(levelConfig, index, ceilIndex, rowIndex);
            self.levels[pagIndex].add(levelButton);

            levelIndex++;
            ceilIndex++;
            if (levelIndex === (config.levelSelection.maxLevelsPerPage * (pagIndex + 1))) {
                pagIndex++;
                ceilIndex = 0;
                rowIndex = 0;
            }
        });
        this.levels[0].visible = true;
    },

    getPosition: function getPosition(ceilIndex, rowIndex) {
        var levelSelectionConfig = config.levelSelection;
        var x;
        if (ceilIndex === 0) {
            x = levelSelectionConfig.group.offSetX;
        } else if (ceilIndex === 1) {
            x = (levelSelectionConfig.buttons.width + levelSelectionConfig.buttons.offSetX + levelSelectionConfig.group.offSetX) * ceilIndex;
        } else {
            x = (levelSelectionConfig.buttons.width + (levelSelectionConfig.buttons.offSetX * 2)) * ceilIndex;
        }

        var y;
        if (rowIndex === 0) {
            y = levelSelectionConfig.group.offSetY;
        } else {
            y = levelSelectionConfig.group.offSetY + ((levelSelectionConfig.buttons.height + levelSelectionConfig.buttons.offSetY) * rowIndex);
        }

        return {x: x, y: y};
    },

    initLevelButton: function initLevelButton(levelConfig, levelIndex, ceilIndex, rowIndex) {
        var positions = this.getPosition(ceilIndex, rowIndex);
        var buttonGp = this.game.add.group();
        var textConfig = config.levelSelection.buttons.text;
        var callback = function () {
            gameData.currentLevel = levelIndex;
            SoundManager.stop('openSound');
            //this.loopSound.stop();
            this.game.state.start('play');
        };
        var frameName;
        if (!levelConfig.blocked) {
            frameName = 'level_buttons_' + levelConfig.stars;
        } else {
            frameName = 'level_buttons_blocked';
        }
        var buttonSprite = this.game.add.button(positions.x, positions.y, 'levelButtons', callback, this, null, frameName);//+ levelConfig.stars
        var style = {font: "122px creamreg", fill: "#7B441A", wordWrap: true};

        var buttonText = this.game.add.text(positions.x + textConfig.x, positions.y + textConfig.y, levelIndex+1, style);
        buttonText.anchor.set(textConfig.anchorX, textConfig.anchorY);
        buttonGp.add(buttonSprite);
        buttonGp.add(buttonText);

        buttonSprite.input.enabled = !levelConfig.blocked;
        buttonText.visible = !levelConfig.blocked;

        return buttonGp;
    }
};

module.exports = SelectLevel;
