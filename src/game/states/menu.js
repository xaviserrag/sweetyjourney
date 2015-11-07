'use strict';

var config = require('../config/main');
function Menu() {
}

Menu.prototype = {
    preload: function () {

    },
    create: function () {
        this.initPlay();
        this.initSound();
    },

    initBackground: function initBackground(){
        this.game.sprite.add(0,0, 'menuBackground');
    },

    initPlay: function initPlay() {
        this.playButton = this.game.add.button(this.game.width /2, this.game.height / 2, 'playButton', this.start, this);
        this.playButton.anchor.set(0.5, 0.5);
        this.playButton.scale.x = 1.5;
        this.playButton.scale.y = 1.5;
    },

    initSound: function initSound() {
        this.muteButton = this.game.add.button(1000, 0, 'muteButton', this.switchSound, this);
        this.muteButton.scale.x = 0.1;
        this.muteButton.scale.y = 0.1;
    },

    switchSound: function initSound() {
        this.game.sound.mute = !this.game.sound.mute;
        this.muteButton.frameName = this.game.sound.mute ? config.menu.buttons.mute.muteOff : config.menu.buttons.mute.muteOn;
    },

    start: function () {
        this.game.state.start('selectLevel');
    }
};

module.exports = Menu;
