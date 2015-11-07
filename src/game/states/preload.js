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
        this.load.image('bgLevelsSelector', 'assets/images/bg_levels_selector.jpg');
        this.load.image('tiles', 'assets/tiles/tiles.png');
        this.load.image('win', 'assets/images/block.png');
        this.load.image('blocked', 'assets/images/block.png');
        this.load.image('block_hor', 'assets/images/block_hor.png');
        this.load.image('bloc_dev', 'assets/images/block_ver.png');
        this.load.image('playButton', 'assets/images/play_button.png');
        this.load.image('muteButton', 'assets/images/mute_button.png');
        this.load.image('levelSelection', 'assets/images/level_selection.png');
        this.load.image('character', 'assets/images/pj.png');
        this.load.image('backgroundMenu', 'assets/images/menu_background.jpg');
        this.load.atlasJSONHash('pageButtons', 'assets/images/selector_pages.png', 'assets/images/selector_pages.json');
        this.load.atlasJSONHash('levelButtons', 'assets/images/level_buttons.png', 'assets/images/level_buttons.json');
        this.load.atlasJSONHash('homeButton', 'assets/images/home_button.png', 'assets/images/home_button.json');

        gameData.levelSelection = config.levelSelection.levels;
    },
    create: function () {
        this.game.state.start('menu');
    }
};

module.exports = Preload;
