'use strict';
var config = require('../config/main');
var gameData = require('../gameData/gameData');

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
        this.load.image('character', 'assets/images/pj.png');
        this.load.image('backgroundMenu', 'assets/images/menu_background.jpg');

        gameData.levelSelection = config.levelSelection.levels;
    },
    create: function () {
        this.game.state.start('play');
    }
};

module.exports = Preload;
