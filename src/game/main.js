'use strict';

var BootState = require('./states/boot'),
    PlayState = require('./states/play'),
    PreloadState = require('./states/preload'),
    game;

window.onload = function () {
    game = new Phaser.Game(160, 288, Phaser.AUTO);

    game.state.add('boot', BootState);
    game.state.add('play', PlayState);
    game.state.add('preload', PreloadState);

    game.state.start('boot');


    if (!game.events) game.events = {};
};
