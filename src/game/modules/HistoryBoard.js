'use strict';
var config = require('../config/main');

var HistoryBoard = function HistoryBoard(params) {
    Phaser.Group.call(this, params.game, params.x, params.y, params.name);
    var self = this;

    var init = function init() {
        self.menuBg = self.game.add.sprite(0,0,'intro', 'intro_01');
        self.menuBg.inputEnabled = true;
        self.add(self.menuBg);

        self.closeButton = self.game.add.button(940, 1750, 'intro', function(){
            self.visible = false;
            clearInterval(changer);
            params.callback();

        }, self, 'next_off', 'next_off', 'next_on');

        self.game.add.tween(self.closeButton.scale)
            .to({x: 0.8, y: 0.8}, 1450, Phaser.Easing.Cubic.InOut, true, 0, -1, true);
        var index = 2
        var changer = setInterval(function(){
            if(index === 5){
                self.visible = false;
                self.menuBg.inputEnabled = false;
                params.callback();
                clearInterval(changer);
            } else {
                self.menuBg.frameName = 'intro_0' + index
                index++
            }
        }, 5000);
        self.closeButton.anchor.set(0.5);
        self.add(self.closeButton);
    };

    init();
};


HistoryBoard.prototype = Object.create(Phaser.Group.prototype);
HistoryBoard.prototype.constructor = HistoryBoard;

module.exports = HistoryBoard;