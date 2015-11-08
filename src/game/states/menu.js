'use strict';

var config = require('../config/main');
var gameData = require('../gameData/gameData');
var Tutorial = require('../modules/Tutorial');
function Menu() {
}

Menu.prototype = {
    preload: function () {

    },
    create: function () {
        var self = this;
        gameData.steps = 0;
        this.loopSound = this.game.add.audio('openSound', 0.1, true);
        this.loopSound.play();
        var openInfo = function openInfo() {
            self.tutorial.visible = true;
        };

        var initButtonInfo = function initButtonInfo() {
            self.buttonInfo = self.game.add.button(120, 1800, 'homeButtons', function(){
                openInfo();
            }, self, 'info_off', 'info_off', 'info_on');//'pause_off'
            self.buttonInfo.anchor.set(0.5);

            self.buttonInfo.anchor.set(config.menu.buttons.play.anchorX, config.menu.buttons.play.anchorY);
            self.buttonInfo.scale.set(0.5);
            self.buttonInfo.alpha = 0;
            self.game.add.tween(self.buttonInfo.scale)
                .to({x: 1}, 800, Phaser.Easing.Cubic.InOut, true);
            self.game.add.tween(self.buttonInfo.scale)
                .to({y: 1}, 800, Phaser.Easing.Cubic.InOut, true);
            self.game.add.tween(self.buttonInfo)
                .to({alpha: 1}, 800, Phaser.Easing.Cubic.InOut, true);

        };

        var initPlay = function initPlay() {
            self.playButton = self.game.add.button(self.game.width /2, self.game.height / 2 - 200, 'homeButtons', self.start, self, 'big_play_off', 'big_play_off', 'big_play_on');
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
                self.game.sound.mute = true;
                self.soundButton.visible = false;
                self.muteButton.visible = true;

            }, self, 'sound_enabled_off', 'sound_enabled_off', 'sound_enabled_on', 'sound_enabled_off');//'sound_enabled_off')

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
                self.game.sound.mute = false;
                self.soundButton.visible = true;
                self.muteButton.visible = false;
            }, self, 'sound_disabled_off', 'sound_disabled_off', 'sound_disabled_on', 'sound_disabled_off');//'gameButtons', 'sound_disabled_off'

            self.muteButton.anchor.set(config.menu.buttons.play.anchorX, config.menu.buttons.play.anchorY);
            self.muteButton.scale.set(0);
            self.muteButton.visible = self.game.sound.mute;
            self.game.add.tween(self.muteButton.scale)
                .to({x: 1}, 800, Phaser.Easing.Cubic.InOut, true);
            self.game.add.tween(self.muteButton.scale)
                .to({y: 1}, 800, Phaser.Easing.Cubic.InOut, true);
            self.game.add.tween(self.soundButton.scale)
                .to({x: 1}, 800, Phaser.Easing.Cubic.InOut, true);
            self.game.add.tween(self.soundButton.scale)
                .to({y: 1}, 800, Phaser.Easing.Cubic.InOut, true);
            self.soundButton.visible = !self.game.sound.mute;
        };

        this.initBackground();
        setTimeout(initPlay, 450);
        setTimeout(initButtonInfo, 500);
        setTimeout(initSound, 750);
        this.initHappyFlan();
        this.title = this.game.add.sprite(this.game.width/2, 300, 'titleGame');
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

        this.tutorial = new Tutorial({
            x: 0,
            y: 0,
            game: this.game,
            name: 'Tutorial',
            havePagination: true
        });
    },

    initBackground: function initBackground(){
        var background = this.game.add.sprite(0,0, 'bgHome');

    },

    initHappyFlan: function initHappyFlan() {
        var happyFlan = this.game.add.sprite(this.game.width/2, 1200, 'winAnim', 0);
        var anim = happyFlan.animations.add();
        happyFlan.anchor.x = 0.5;
        anim.play(24, true);
    },

    start: function () {
        this.loopSound.stop();
        this.game.state.start('levelSelection');
    }
};

module.exports = Menu;
