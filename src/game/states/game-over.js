'use strict';

var config = require('../config/main');
function GameOver() {
}

GameOver.prototype = {
    preload: function () {

    },
    create: function () {
        /*this.initBackground();
        this.initPlay();
        this.initSound();*/
    },

    /*initBackground: function initBackground(){
        var background = this.game.add.sprite(0,0, 'backgroundMenu');
        background.scale.set(5, 5);
    },

    initPlay: function initPlay() {
        this.playButton = this.game.add.button(this.game.width /2, this.game.height / 2, config.menu.buttons.play.spriteSheet, this.start, this);
        this.playButton.anchor.set(config.menu.buttons.play.anchorX, config.menu.buttons.play.anchorY);
        this.playButton.scale.x = 1.5;
        this.playButton.scale.y = 1.5;
    },

    initSound: function initSound() {
        this.muteButton = this.game.add.button(config.menu.buttons.mute.x, config.menu.buttons.mute.y, config.menu.buttons.mute.spriteSheet, this.switchSound, this);
        this.muteButton.scale.x = 0.1;
        this.muteButton.scale.y = 0.1;
    },

    switchSound: function initSound() {
        this.game.sound.mute = !this.game.sound.mute;
        this.muteButton.frameName = this.game.sound.mute ? config.menu.buttons.mute.muteOff : config.menu.buttons.mute.muteOn;
    },

    start: function () {
        this.game.state.start('levelSelection');
    }*/
};

module.exports = GameOver;
