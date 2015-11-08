'use strict';

var config = require('../config/main');
var gameData = require('../gameData/gameData');
function GameSuccess() {
}

GameSuccess.prototype = {
    preload: function () {

    },
    create: function () {
        this.initBackground();
        this.initStars();
        this.initHappyFlan();
        this.initButtons();
    },

    initButtons: function initButtons() {
        var levelButton = this.game.add.button(155, 1400, 'endButtons', function () {
            this.game.state.start('levelSelection');
        }, this, 'levels_off', 'levels_off', 'levels_on');

        var replayButton = this.game.add.button(430, 1400, 'endButtons', function () {
            gameData.currentLevel--;
            this.game.state.start('play');
        }, this, 'replay_off', 'replay_off', 'replay_on');

        var nextButton = this.game.add.button(705, 1400, 'endButtons', function () {
            this.game.state.start('play');
        }, this, 'next_off', 'next_off', 'next_on');


    },

    initBackground: function initBackground() {
        var background = this.game.add.sprite(0, 0, 'backgroundWin');
    },

    initHappyFlan: function initHappyFlan() {
        var happyFlan = this.game.add.sprite(300, 600, 'winAnim', 0);
        var anim = happyFlan.animations.add();
        anim.play(24, true);
    },

    initStars: function initStars() {
        var starFrame = gameData.levelSelection[gameData.currentLevel - 1].currentStars;
        var stars = this.game.add.sprite(100, 240, 'endStarts', 'stars0');
        var starSound = this.game.add.audio('starSound', 0.6);

        if (starFrame > 0) {
            setTimeout(function () {
                stars.frameName = 'stars1';
                starSound.play();
            }, 500);
        }
        if (starFrame > 1) {
            setTimeout(function () {
                stars.frameName = 'stars2';
                starSound.play();
            }, 1000);
        }
        if (starFrame > 2) {
            setTimeout(function () {
                stars.frameName = 'stars3';
                starSound.play();
            }, 1500);
        }

    },

    initLoseText: function initAngryFlan() {
        var style = {font: "bold 120px creamreg", fill: "#ff6ba0"};
        this.stars = this.game.add.text(240, 1170, 'YOU LOSE!', style);
    }
};

module.exports = GameSuccess;
