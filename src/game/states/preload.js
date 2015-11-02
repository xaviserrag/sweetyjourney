'use strict';


function Preload() {
    this.ready = false;
}

Preload.prototype = {
    preload: function () {
        this.load.tilemap('map', 'assets/tiles/tiles.json', null, Phaser.Tilemap.TILED_JSON);
        this.load.image('tiles', 'assets/tiles/tiles.png');
        console.log('preload!')

    },
    create: function () {
        this.game.state.start('play');
    }
};

module.exports = Preload;
