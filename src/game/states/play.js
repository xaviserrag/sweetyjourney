'use strict';
var Block = require('../modules/Block');
var Grid = require('../modules/Grid');

function Play() {
}

Play.prototype = {
    preload: function () {
        this.map = this.add.tilemap('map');
        this.map.addTilesetImage('tiles', 'tiles');
        this.layer = this.map.createLayer('Tile Layer 1');

    },
    create: function () {
        var grid = new Grid({
            game: this.game,
            x: 0,
            y: 0,
            name: 'Grid'
        });

        //Block1
        var blockInfo = {
            x: 0,
            y: 0,
            name: 'block1',
            game: this.game
        }

        this.b1 = new Block(blockInfo);
        //Block2

        var blockInfo2 = {
            x: 32,
            y: 32,
            name: 'block2',
            game: this.game
        }

        this.b2 = new Block(blockInfo2);


    },
    update: function () {

    }
};

module.exports = Play;
