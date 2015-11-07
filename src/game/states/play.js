'use strict';
var Block = require('../modules/Block');
var Grid = require('../modules/Grid');
var Menu = require('../modules/Menu');

function Play() {
}

Play.prototype = {
    create: function () {
        var self = this;

        this.bgBase = this.game.add.sprite(0, 0, 'bgBase');

        this.grid = new Grid({
            game: this.game,
            x: 90,
            y: 90,
            name: 'Grid'
        });

        this.menu = new Menu({
            x: 0,
            y: 0,
            game: this.game,
            name: 'Menu'
        });

        this.menu.visible = false;

        self.buttonInfo = self.game.add.sprite(30, 1650, 'gameButtons', 'pause_off');
        self.buttonInfo.inputEnabled = true;
        self.buttonInfo.events.onInputDown.add(function () {
            self.menu.visible = true;
            self.buttonInfo.visible = false;
        }, self);

        self.replayButton = self.game.add.sprite(250, 1650, 'gameButtons', 'replay_off');
        self.replayButton.inputEnabled = true;
        self.replayButton.events.onInputDown.add(function () {
           self.game.state.start('play');
        }, self);

    },
    shutdown: function () {
        this.grid.destroy();
    }
};

module.exports = Play;
