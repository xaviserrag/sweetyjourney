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
        this.load.image('block_hor', 'assets/images/block_hor.png');
        this.load.image('bloc_dev', 'assets/images/block_ver.png');
        this.load.image('playButton', 'assets/images/play_button.png');
        this.load.image('muteButton', 'assets/images/mute_button.png');
        this.load.image('levelSelection', 'assets/images/level_selection.png');
        this.load.image('backgroundMenu', 'assets/images/menu_background.jpg');
    },
    create: function () {
        this.game.state.start('menu');
    }
};

module.exports = Preload;
