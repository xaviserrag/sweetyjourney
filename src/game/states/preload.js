'use strict';


function Preload() {
    this.ready = false;
}

Preload.prototype = {
    preload: function () {
        this.load.tilemap('map', 'assets/tiles/tiles.json', null, Phaser.Tilemap.TILED_JSON);
        this.load.image('bgBase', 'assets/images/bg_base.jpg');

        this.load.image('tiles', 'assets/tiles/tiles.png');
        this.load.image('blocked', 'assets/images/block.png');
        this.load.image('blocked', 'assets/images/block.png');
        this.load.image('playButton', 'assets/images/play_button.png');
        console.log('estoy en el estado preload');

    },
    create: function () {
        this.game.state.start('play');
    }
};

module.exports = Preload;
