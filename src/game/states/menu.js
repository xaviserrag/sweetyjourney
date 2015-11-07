'use strict';


function Menu() {
}

Menu.prototype = {
    preload: function () {

    },
    create: function () {
        this.initPlay();
    },

    initPlay: function initPlay() {
        var button = this.game.add.button(42, 90, 'playButton', this.start, this);
        button.scale.x = 0.3;
        button.scale.y = 0.3;
    },

    start: function () {
        this.game.state.start('play');
    }
};

module.exports = Menu;
