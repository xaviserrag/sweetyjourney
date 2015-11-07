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


        self.buttonInfo = self.game.add.button(30, 1650, 'gameButtons', function () {
            self.menu.visible = true;
            self.buttonInfo.visible = false;
        }, this, 'pause_off', 'pause_off', 'pause_on')//'pause_off'


        self.replayButton = self.game.add.button(250, 1650, 'gameButtons', function () {
            self.game.state.start('play');
        }, this, 'replay_off', 'replay_off', 'replay_on');//'replay_off'

        this.menu = new Menu({
            x: 0,
            y: 0,
            game: this.game,
            name: 'Menu',
            buttonStarter: self.buttonInfo
        });
        this.menu.visible = false;
    },
    shutdown: function () {
        this.grid.destroy();
    }
};

module.exports = Play;
