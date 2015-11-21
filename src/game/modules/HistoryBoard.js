'use strict';
var config = require('../config/main');
var SoundManager = require('../device/web/soundmanager/SoundManager');

var HistoryBoard = function HistoryBoard(params) {
    Phaser.Group.call(this, params.game, params.x, params.y, params.name);
    var self = this;

    var init = function init() {
        self.menuBg = [
            self.game.add.sprite(0,0,'intro1'),
            self.game.add.sprite(0,0,'intro2'),
            self.game.add.sprite(0,0,'intro3'),
            self.game.add.sprite(0,0,'intro4')
        ];


        self.menuBg.forEach(function(item) {
            item.visible = false;
            item.inputEnabled = true;
            self.add(item);
        });

        self.menuBg[0].visible = true;


        self.closeButton = self.game.add.button(940, 1750, 'endButtons', function(){
            self.visible = false;
            clearInterval(changer);
            SoundManager.fadeOut('historySound', 500);
            //self.historyMusic.fadeOut(500);
            params.callback();

        }, self, 'next_off', 'next_off', 'next_on');

        self.game.add.tween(self.closeButton.scale)
            .to({x: 0.8, y: 0.8}, 1450, Phaser.Easing.Cubic.InOut, true, 0, -1, true);

        SoundManager.addSound(self.game, 'historySound', 0.1, true);
        //self.historyMusic = self.game.add.sound('historySound', 0.1, true);
        SoundManager.fadeIn('historySound', 1000);
        //self.historyMusic.fadeIn(1000);
        var index = 1;
        var changer = setInterval(function(){
            if(index === 4){
                self.visible = false;
                self.menuBg.forEach(function(item) {
                    item.inputEnabled = false;
                });
                self.menuBg.inputEnabled = false;
                SoundManager.stop('historySound');
                //self.historyMusic.stop();
                params.callback();
                clearInterval(changer);
            } else {
                self.menuBg.forEach(function(item, frame) {
                    item.visible = index === frame;
                });
            }
            index++;

        }, 4000);
        self.closeButton.anchor.set(0.5);
        self.add(self.closeButton);
    };

    init();
};


HistoryBoard.prototype = Object.create(Phaser.Group.prototype);
HistoryBoard.prototype.constructor = HistoryBoard;

module.exports = HistoryBoard;