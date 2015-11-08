'use strict';
var config = require('../config/main');
var gameData = require('../gameData/gameData');

function Preload() {
    this.ready = false;
}

Preload.prototype = {
    preload: function () {

        this.bg = this.game.add.sprite(0,0, 'loadBg');

        this.title = this.game.add.sprite(this.game.width/2, this.game.height/2, 'loadTitle');
        this.title.anchor.set(0.5);
        this.title.scale.set(0.2);
        this.title.alpha = 0;

        this.game.add.tween(this.title.scale)
            .to({x: 1}, 800, Phaser.Easing.Cubic.InOut, true);
        this.game.add.tween(this.title.scale)
            .to({y: 1}, 800, Phaser.Easing.Cubic.InOut, true);
        this.game.add.tween(this.title)
            .to({alpha: 1}, 800, Phaser.Easing.Cubic.InOut, true);
        var tween = this.game.add.tween(this.title)
            .to({rotation: 0.1}, 1000, Phaser.Easing.Cubic.InOut, true, 0, -1, true);
        tween.start();

        this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
        this.load.image('bgBase', 'assets/images/bg_base.jpg');
        this.load.image('bgLevelsSelector', 'assets/images/bg_levels_selector.jpg');
        this.load.image('tiles', 'assets/tiles/tiles.png');
        this.load.image('win', 'assets/images/exitdoor.png');
        this.load.image('blocked', 'assets/images/block.png');
        this.load.image('blocked2', 'assets/images/block2.png');
        this.load.image('blocked3', 'assets/images/block3.png');
        this.load.image('playButton', 'assets/images/play_button.png');
        this.load.image('muteButton', 'assets/images/mute_button.png');
        this.load.image('levelSelection', 'assets/images/level_selection.png');
        this.load.image('bgPopup', 'assets/images/bg_popup.png');
        this.load.image('backgroundMenu', 'assets/images/menu_background.jpg');
        this.load.audio('mainSound', 'assets/sound/gameloop.mp3');
        this.load.audio('angrySound', 'assets/sound/angrysound.mp3');
        this.load.audio('happySound2', 'assets/sound/happysound2.mp3');
        this.load.audio('happySound3', 'assets/sound/happysound3.mp3');
        this.load.audio('dieSound', 'assets/sound/deadsound.mp3');
        this.load.audio('gameOverSound', 'assets/sound/looser.mp3');
        this.load.audio('starSound', 'assets/sound/starsound.mp3');
        this.load.image('backgroundGameOver', 'assets/images/bg_lose.jpg');
        this.load.image('backgroundWin', 'assets/images/bg_win.jpg');
        this.load.image('bgHome', 'assets/images/bg_home_game.jpg');
        this.load.image('titleGame', 'assets/images/game_title.png');
        this.load.atlasJSONHash('character', 'assets/images/pj_anim.png', 'assets/images/pj_anim.json');
        this.load.atlasJSONHash('vertical', 'assets/images/block_ver.png', 'assets/images/block_ver.json');
        this.load.atlasJSONHash('horizontal', 'assets/images/block_hor.png', 'assets/images/block_hor.json');
        this.load.atlasJSONHash('pageButtons', 'assets/images/selector_pages.png', 'assets/images/selector_pages.json');
        this.load.atlasJSONHash('levelButtons', 'assets/images/level_buttons.png', 'assets/images/level_buttons.json');
        this.load.atlasJSONHash('gameButtons', 'assets/images/game_buttons.png', 'assets/images/game_buttons.json');
        this.load.atlasJSONHash('homeButtons', 'assets/images/home_buttons.png', 'assets/images/home_buttons.json');
        this.load.atlasJSONHash('homeButton', 'assets/images/home_button.png', 'assets/images/home_button.json');
        this.load.atlasJSONHash('endButtons', 'assets/images/end_buttons.png', 'assets/images/end_buttons.json');
        this.load.atlasJSONHash('endStarts', 'assets/images/stars.png', 'assets/images/stars.json');
        this.load.atlasJSONArray('loseAnim', 'assets/images/lose_anim.png', 'assets/images/lose_anim.json');
        this.load.atlasJSONArray('winAnim', 'assets/images/win_anim.png', 'assets/images/win_anim.json');
        this.load.atlasJSONHash('tutorial', 'assets/images/tutorial.png', 'assets/images/tutorial.json');
    },
    create: function () {

    },
    onLoadComplete: function () {
        var self = this;
        gameData.levelSelection = config.level;

        setTimeout(function() {
            self.game.state.start('menu');
        }, 500);
    }
};

module.exports = Preload;
