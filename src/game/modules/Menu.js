'use strict';
var config = require('../config/main');

var Menu = function Menu(params) {
    Phaser.Group.call(this, params.game, params.x, params.y, params.name);
    var self = this;
    var init = function init() {

        self.menuBg = self.game.add.sprite(0,0,'bgPopup');
        self.menuBg.inputEnabled = true;
        self.add(self.menuBg);
        self.soundButton = self.game.add.button(30, 1150, 'gameButtons', function () {
            self.game.mute = false;
            self.soundButton.visible = false;
            self.muteButton.visible = true;
        }, this, 'sound_enabled_off', 'sound_enabled_off', 'sound_enabled_on', 'sound_enabled_off');//'sound_enabled_off')
        self.add(self.soundButton);

        self.buttonInfo = self.game.add.button(30, 1650, 'gameButtons', function(){
            self.visible = !self.visible;
        }, this, 'pause_off', 'pause_off', 'pause_on')//'pause_off'

        self.levelButton = self.game.add.button(30, 1400, 'gameButtons', function () {
            self.visible = false;
            self.game.state.start('levelSelection');
        }, this, 'levels_off', 'levels_off', 'levels_on', 'levels_off');
        self.add(self.levelButton);


        self.muteButton = self.game.add.button(30, 1150, 'gameButtons', function () {
            self.game.mute = false;
            self.soundButton.visible = true;
            self.muteButton.visible = false;
        }, this, 'sound_disabled_off', 'sound_disabled_off', 'sound_disabled_on', 'sound_disabled_off');//'gameButtons', 'sound_disabled_off'
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
