'use strict';
var config = require('../config/main');

var Menu = function Menu(params) {
    Phaser.Group.call(this, params.game, params.x, params.y, params.name);
    var self = this;
    var init = function init() {

        self.menuBg = self.game.add.sprite(0,0,'bgPopup');
        self.menuBg.inputEnabled = true;
        self.add(self.menuBg);
        self.soundButton = self.game.add.sprite(30, 1200, 'gameButtons', 'sound_enabled_off');
        self.soundButton.inputEnabled = true;
        self.soundButton.events.onInputDown.add(function () {
            self.game.mute = false;
            self.soundButton.visible = false;
            self.muteButton.visible = true;
        });
        self.add(self.soundButton);

        self.buttonInfo = self.game.add.sprite(30, 1700, 'gameButtons', 'pause_off');
        self.buttonInfo.inputEnabled = true;
        self.buttonInfo.events.onInputDown.add(function () {
            self.visible = false;
            params.buttonStarter.visible = true;
        }, self);
        self.add(self.buttonInfo);

        self.levelButton = self.game.add.sprite(30, 1450, 'gameButtons', 'levels_off');
        self.levelButton.inputEnabled = true;
        self.levelButton.events.onInputDown.add(function () {
            self.visible = false;
            self.game.state.start('levelSelection');
        });
        self.add(self.levelButton);


        self.muteButton = self.game.add.sprite(30, 1200, 'gameButtons', 'sound_disabled_off');
        self.muteButton.inputEnabled = true;
        self.muteButton.events.onInputDown.add(function () {
            self.game.mute = true;
            self.soundButton.visible = true;
            self.muteButton.visible = false;
        }, this);
        self.add(self.muteButton);

        if (self.game.mute) {
            self.muteButton.visible = false;
        } else {
            self.soundButton.visible = false;

        }
    };

    init();
};


Menu.prototype = Object.create(Phaser.Group.prototype);
Menu.prototype.constructor = Menu;

module.exports = Menu;
