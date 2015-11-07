'use strict';

var config = require('../config/main');
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

    },

    initButtons:  function initButtons(){
        var replayButton = this.game.add.button(570, 1400, 'endButtons', function () {
            this.game.state.start('play');
        }, this, 'replay_off', 'replay_off', 'replay_on');

        var levelButton = this.game.add.button(295, 1400, 'endButtons', function () {
            this.game.state.start('levelSelection');
        }, this, 'levels_off', 'levels_off', 'levels_on');
    },

    initBackground: function initBackground(){
        var background = this.game.add.sprite(0,0, 'backgroundGameOver');
    },

    initAngryFlan: function initAngryFlan(){
        var angryFlan = this.game.add.sprite(300,550, 'angryFlan');
    },

    initLoseText: function initAngryFlan(){
        var style = {font: "bold 120px creamreg", fill: "#ff6ba0"};
        this.stars = this.game.add.text(240, 1170, 'YOU LOSE!', style);
    }
};

module.exports = GameOver;
