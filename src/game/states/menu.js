'use strict';


function Menu() {
}

Menu.prototype = {
    preload: function () {

    },
    create: function () {
        this.initPlay();
        this.initSound();
    },

    initPlay: function initPlay() {
        this.playButton = this.game.add.button(42, 90, 'playButton', this.start, this);
        this.playButton.scale.x = 0.3;
        this.playButton.scale.y = 0.3;
    },

    initSound: function initSound() {
        this.muteButton = this.game.add.button(84, 0, 'muteButton', this.switchSound, this);
        this.muteButton.scale.x = 0.1;
        this.muteButton.scale.y = 0.1;
    },

    switchSound: function initSound() {
        this.game.sound.mute = !this.game.sound.mute;
        console.log(this.game.sound.mute);
        this.muteButton.frameName = this.game.sound.mute ? this.config.buttons.muteButton.muteOff : this.config.buttons.soundButton.muteOn;
    },

    start: function () {
        this.game.state.start('selectLevel');
    }
};

module.exports = Menu;
