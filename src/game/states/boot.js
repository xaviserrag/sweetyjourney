'use strict';



function Boot() {
}

Boot.prototype = {
    preload: function(){
        this.load.image('loadBg', 'assets/images/bg_loading.jpg');
        this.load.image('loadTitle', 'assets/images/loading_title.png');
    },
    create: function () {
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.pageAlignVertically = true;
        this.game.scale.pageAlignHorizontally = true;


        this.game.state.start('preload');
    }
};

module.exports = Boot;
