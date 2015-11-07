'use strict';

var config = require('../config/main');
function Menu() {
}

Menu.prototype = {
    preload: function () {

    },
    create: function () {
        var self = this;

        var openInfo = function openInfo() {
            console.log('openInfo');
        };

        var initPlay = function initPlay() {
            self.buttonInfo = self.game.add.button(120, 1800, 'homeButtons', function(){
                openInfo();
            }, this, 'info_off', 'info_off', 'info_on');//'pause_off'
            self.buttonInfo.anchor.set(0.5);

            self.playButton = self.game.add.button(self.game.width /2, self.game.height / 2, 'homeButtons', self.start, self, 'big_play_off', 'big_play_off', 'big_play_on');
            self.playButton.anchor.set(0.5);
            self.playButton.scale.set(0.5);
            self.playButton.alpha = 0;
            self.game.add.tween(self.playButton.scale)
                .to({x: 1}, 800, Phaser.Easing.Cubic.InOut, true);
            self.game.add.tween(self.playButton.scale)
                .to({y: 1}, 800, Phaser.Easing.Cubic.InOut, true);
            self.game.add.tween(self.playButton)
                .to({alpha: 1}, 800, Phaser.Easing.Cubic.InOut, true);
        };

        var initSound = function initSound() {
            self.soundButton = self.game.add.button(self.game.width - 120, 1800, 'gameButtons', function () {
                self.game.mute = false;
                self.soundButton.visible = false;
                self.muteButton.visible = true;

            }, this, 'sound_enabled_off', 'sound_enabled_off', 'sound_enabled_on', 'sound_enabled_off');//'sound_enabled_off')

            self.soundButton.anchor.set(config.menu.buttons.play.anchorX, config.menu.buttons.play.anchorY);
            self.soundButton.scale.set(0.5);
            self.soundButton.alpha = 0;
            self.game.add.tween(self.soundButton.scale)
                .to({x: 1}, 800, Phaser.Easing.Cubic.InOut, true);
            self.game.add.tween(self.soundButton.scale)
                .to({y: 1}, 800, Phaser.Easing.Cubic.InOut, true);
            self.game.add.tween(self.soundButton)
                .to({alpha: 1}, 800, Phaser.Easing.Cubic.InOut, true);

            self.muteButton = self.game.add.button(self.game.width - 120, 1800, 'gameButtons', function () {
                self.game.mute = false;
                self.soundButton.visible = true;
                self.muteButton.visible = false;
            }, this, 'sound_disabled_off', 'sound_disabled_off', 'sound_disabled_on', 'sound_disabled_off');//'gameButtons', 'sound_disabled_off'

            self.muteButton.anchor.set(config.menu.buttons.play.anchorX, config.menu.buttons.play.anchorY);
            self.muteButton.scale.set(0.5);
            self.muteButton.visible = false;
            self.game.add.tween(self.muteButton.scale)
                .to({x: 1}, 800, Phaser.Easing.Cubic.InOut, true);
            self.game.add.tween(self.muteButton.scale)
                .to({y: 1}, 800, Phaser.Easing.Cubic.InOut, true);



        };

        this.initBackground();
        setTimeout(initPlay, 500);
        setTimeout(initSound, 1000);

        this.title = this.game.add.sprite(this.game.width/2, 400, 'titleGame');
        this.title.anchor.set(0.5);
        this.title.scale.set(0.2);
        this.title.alpha = 0;

        this.game.add.tween(this.title.scale)
            .to({x: 1}, 800, Phaser.Easing.Cubic.InOut, true);
        this.game.add.tween(this.title.scale)
            .to({y: 1}, 800, Phaser.Easing.Cubic.InOut, true);
        this.game.add.tween(this.title)
            .to({alpha: 1}, 800, Phaser.Easing.Cubic.InOut, true);
        var tween = this.game.add.tween(this.title)
            .to({rotation: 0.1}, 1000, Phaser.Easing.Cubic.InOut, true, 0, -1, true);
        tween.start();
    },

    initBackground: function initBackground(){
        var background = this.game.add.sprite(0,0, 'bgHome');

    },

    start: function () {
        this.game.state.start('levelSelection');
    }
};

module.exports = Menu;
