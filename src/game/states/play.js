'use strict';

function Play() {
}

Play.prototype = {
    preload: function () {
        console.log('PLAY!!');
        this.map = this.add.tilemap('map');
        this.map.addTilesetImage('tiles', 'tiles');
        this.layer = this.map.createLayer('Tile Layer 1');

    },
    create: function () {

    },
    update: function () {

    }
};

module.exports = Play;
