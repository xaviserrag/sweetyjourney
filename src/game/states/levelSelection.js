'use strict';
var gameData = require('../gameData/gameData');
var config = require('../config/main');
function SelectLevel() {
}

SelectLevel.prototype = {
    preload: function () {

    },

    create: function () {
        this.initMenu();
    },

    initMenu: function(){
        var levels = [];
        var pages = gameData.levelSelection.length / config.levelSelection.levelsPerPage;
        for(var i = 0; i <= pages; i++){
            levels.push = this.game.add.group(this, 'page'+i);
        }
        var pagIndex = 0;
       gameData.levelSelection.forEach(function(levelConfig){
           levels[pagIndex].push = this.game.add.button(0, 0, 'levelButton', null);

       });
    }
};

module.exports = SelectLevel;
