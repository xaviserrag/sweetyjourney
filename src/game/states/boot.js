'use strict';



function Boot() {
}

Boot.prototype = {
    preload: function(){

    },
    create: function () {
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.pageAlignVertically = true;
        this.game.scale.pageAlignHorizontally = true;
        this.game.state.start('preload');
    }
};

module.exports = Boot;
