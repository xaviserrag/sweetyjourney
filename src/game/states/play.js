'use strict';
var Block = require('../modules/Block');
var Grid = require('../modules/Grid');
var Menu = require('../modules/Menu');
var Tutorial = require('../modules/Tutorial');
var HistoryBoard = require('../modules/HistoryBoard');
var gameData = require('../gameData/gameData');

function Play() {
}

Play.prototype = {
    create: function () {

        var self = this;

        var setBackground = function setBackground() {
            var interval = 10;
            self.bgBase = self.game.add.sprite(0, 0, 'bgBase' + Math.floor((gameData.currentLevel + 1)/interval + 1));
        };

        this.game.world.setBounds(0, 0, 2000, 2000);
        setBackground();
        this.game.events.onShutdown = new Phaser.Signal();
        this.grid = new Grid({
            game: this.game,
            x: 90,
            y: 90,
            name: 'Grid'
        });

        var generalGameGroup = self.game.add.group();

        generalGameGroup.add(this.grid);

        this.gameMusic = this.game.add.sound('mainSound', 0.1, true);

        self.buttonInfo = self.game.add.button(30, 1650, 'gameButtons', function () {
            self.menu.button1animation = this.game.add.tween(self.menu.levelButton);
            self.menu.button2animation = this.game.add.tween(self.menu.muteButton);
            self.menu.button3animation = this.game.add.tween(self.menu.soundButton);
            self.menu.button1animation.from({ x: 30, y: 1650 }, 300, Phaser.Easing.Linear.None);
            self.menu.button1animation.start();
            self.menu.button2animation.from({ x: 30, y: 1650 }, 300, Phaser.Easing.Linear.None);
            self.menu.button2animation.start();
            self.menu.button3animation.from({ x: 30, y: 1650 }, 300, Phaser.Easing.Linear.None);
            self.menu.button3animation.start();
            self.buttonInfo.visible = false;
            self.buttonInfo.inputEnabled = false;
            self.menu.buttonInfo.visible = true;
            self.menu.buttonInfo.inputEnabled = true;
            self.replayButton.inputEnabled = false;
            self.menu.visible = true;
        }, this, 'pause_off', 'pause_off', 'pause_on')//'pause_off'

        generalGameGroup.add(self.buttonInfo);




        self.replayButton = self.game.add.button(250, 1650, 'gameButtons', function () {
            self.game.state.start('play');
        }, this, 'replay_off', 'replay_off', 'replay_on');//'replay_off'
        generalGameGroup.add(self.replayButton);

        this.menu = new Menu({
            x: 0,
            y: 0,
            game: this.game,
            name: 'Menu',
            buttonStarter: self.buttonInfo,
            replayButton: self.replayButton
        });
        this.menu.visible = false;

        if (gameData.currentLevel === 0 || gameData.currentLevel === 1 ||gameData.currentLevel === 2 ||gameData.currentLevel === 5) {
            var page = 'tutorial_01';

            if (gameData.currentLevel === 0) {
                page = 'tutorial_01';
            }
            else if (gameData.currentLevel === 1) {
                page = 'tutorial_04';
            }
            else if (gameData.currentLevel === 2) {
                page = 'tutorial_02';
            }
            else if (gameData.currentLevel === 5) {
                page = 'tutorial_03';
            }


            this.tutorial = new Tutorial({
                x: 0,
                y: 0,
                game: this.game,
                name: 'Tutorial',
                havePagination: false,
                firstPage: page
            });

            this.tutorial.visible = false;

            if(gameData.currentLevel === 0){
                this.storyBoard = new HistoryBoard({
                    x: 0,
                    y: 0,
                    game: this.game,
                    name: 'storyBoard',
                    callback: function(){
                        self.tutorial.visible = true;
                        self.gameMusic.fadeOut(1);
                        self.gameMusic.play();
                        self.gameMusic.fadeTo(1000, 0.1);
                    }
                });

            }else{
                this.gameMusic.play();
                this.tutorial.visible = true;
            }

        }
    },
    shutdown: function () {
        this.grid.destroy();
        this.gameMusic.stop();
        this.game.events.onShutdown.dispatch();

    }
};

module.exports = Play;
