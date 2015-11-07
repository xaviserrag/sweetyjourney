'use strict';


function Preload() {
    this.ready = false;
}

Preload.prototype = {
    preload: function () {
        this.load.tilemap('map', 'assets/tiles/tiles.json', null, Phaser.Tilemap.TILED_JSON);
        this.load.image('tiles', 'assets/tiles/tiles.png');
        this.load.image('blocked', 'assets/images/block.png');
        this.load.image('block1', 'assets/images/block1.png');
        this.load.image('block2', 'assets/images/block2.png');
        this.load.image('block_hor', 'assets/images/block_hor.png');
        this.load.image('bloc_dev', 'assets/images/block_ver.png');
        this.load.image('playButton', 'assets/images/play_button.png');
        console.log('estoy en el estado preload');

    },
    create: function () {
        this.game.state.start('play');
    }
};

module.exports = Preload;
