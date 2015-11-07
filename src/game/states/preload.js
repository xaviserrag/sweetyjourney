'use strict';


function Preload() {
    this.ready = false;
}

Preload.prototype = {
    preload: function () {
        this.load.tilemap('map', 'assets/tiles/tiles.json', null, Phaser.Tilemap.TILED_JSON);
        this.load.image('tiles', 'assets/tiles/tiles.png');
        this.load.image('block', 'assets/images/block.png');
        this.load.image('block1', 'assets/images/block1.png');
        this.load.image('block2', 'assets/images/block2.png');

    },
    create: function () {
        this.game.state.start('play');
    }
};

module.exports = Preload;
