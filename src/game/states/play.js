'use strict';
var Block = require('../modules/Block');
var Grid = require('../modules/Grid');

function Play() {
}

Play.prototype = {
    create: function () {
        this.bgBase = this.game.add.sprite(0, 0, 'bgBase');

        this.grid = new Grid({
            game: this.game,
            x: 90,
            y: 90,
            name: 'Grid'
        });
    },
    shutdown: function () {
        this.grid.destroy();
    }
};

module.exports = Play;
