'use strict';
var Block = require('../modules/Block');
var Grid = require('../modules/Grid');

function Play() {
}

Play.prototype = {
    create: function () {
        var bgBase = this.game.add.sprite(0, 0, 'bgBase');

        var grid = new Grid({
            game: this.game,
            x: 0,
            y: 0,
            name: 'Grid'
        });
    },
    update: function () {

    }
};

module.exports = Play;
