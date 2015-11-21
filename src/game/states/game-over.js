'use strict';

var config = require('../config/main');
var gameData = require('../gameData/gameData');
var SoundManager = require('../device/web/soundmanager/SoundManager');
function GameOver() {
}

GameOver.prototype = {
    preload: function () {

    },
    create: function () {
        this.initBackground();
        this.initAngryFlan();
        this.initLoseText();
        this.initButtons();
        gameData.steps = 0;
    },

    initButtons: function initButtons() {
        var replayButton = this.game.add.button(570, 1400, 'endButtons', function () {
            this.game.state.start('play');
        }, this, 'replay_off', 'replay_off', 'replay_on');

        var levelButton = this.game.add.button(295, 1400, 'endButtons', function () {
            this.game.state.start('levelSelection');
        }, this, 'levels_off', 'levels_off', 'levels_on');
    },

    initBackground: function initBackground() {
        var background = this.game.add.sprite(0, 0, 'backgroundGameOver');
    },

    initAngryFlan: function initAngryFlan() {
        //var looser = this.game.add.audio('gameOverSound', 0.6);
        //looser.play();

        SoundManager.addSound(this.game, 'gameOverSound', 0.6);
        SoundManager.play('gameOverSound');

        var angryFlan = this.game.add.sprite(300, 550, 'loseAnim', 0);
        var anim = angryFlan.animations.add();
        anim.play(24, true);
    },

    initLoseText: function initAngryFlan() {
        var style = {font: "bold 120px creamreg", fill: "#ff6ba0"};
        this.stars = this.game.add.text(240, 1170, 'YOU LOSE!', style);
    }
};

module.exports = GameOver;
