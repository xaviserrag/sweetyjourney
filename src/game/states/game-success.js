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

    initButtons:  function initButtons(){
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

    initBackground: function initBackground(){
        var background = this.game.add.sprite(0,0, 'backgroundWin');
    },

    initHappyFlan: function initHappyFlan(){
        var happyFlan = this.game.add.sprite(300,600, 'happyFlan');
    },

    initStars: function initStars(){
        var starFrame = gameData.levelSelection[gameData.currentLevel - 1].stars;
        console.log('starFrame', starFrame);
        var starts = this.game.add.sprite(100,240, 'endStarts', 'stars'+starFrame);
    },

    initLoseText: function initAngryFlan(){
        var style = {font: "bold 120px creamreg", fill: "#ff6ba0"};
        this.stars = this.game.add.text(240, 1170, 'YOU LOSE!', style);
    }
};

module.exports = GameSuccess;
