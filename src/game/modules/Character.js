'use strict';
var gameData = require('../gameData/gameData');
var Character = function Character(params) {

    var self = this,
        yOffset = 50;

    this.col = params.col;
    this.row = params.row;

    var possibleMovements;

    Phaser.Sprite.call(this, params.game, params.x, params.y - yOffset, params.name);

    var init = function init() {
        self.orientation = 'character';
        params.parent.addChild(self);
        self.inputEnabled = true;
    };

    var move = function move(direction) {
        var tween;
        var speed = 2,
            deathSpeed = 3,
            deathOffset = 10,
            posTo = 0,
            distance = 0;

        if (direction === 'up') {
            posTo = self.y - (possibleMovements.up * 180);
            distance = posTo - self.y;
            if (possibleMovements.upDeath) {
                tween = self.game.add.tween(self).to({y: posTo - deathOffset}, Math.abs(distance / deathSpeed), Phaser.Easing.Linear.None);
                tween.onComplete.add(params.resetGame);
            } else {
                tween = self.game.add.tween(self).to({y: posTo}, Math.abs(distance / speed), Phaser.Easing.Linear.None);
            }


        } else if (direction === 'down') {
            posTo = self.y + possibleMovements.down * 180;
            distance = posTo - self.y;
            if (possibleMovements.downDeath) {
                tween = self.game.add.tween(self).to({y: posTo + deathOffset}, Math.abs(distance / deathSpeed), Phaser.Easing.Linear.None);
                tween.onComplete.add(params.resetGame);
            } else {
                tween = self.game.add.tween(self).to({y: posTo}, Math.abs(distance / speed), Phaser.Easing.Linear.None);
            }

        } else if (direction === 'left') {
            posTo = self.x - (possibleMovements.left * 180);
            distance = posTo - self.x;
            if (possibleMovements.leftDeath) {
                tween = self.game.add.tween(self).to({x: posTo - deathOffset}, Math.abs(distance / deathSpeed), Phaser.Easing.Linear.None);
                tween.onComplete.add(params.resetGame);
            } else {
                tween = self.game.add.tween(self).to({x: posTo}, Math.abs(distance / speed), Phaser.Easing.Linear.None);
            }

        } else if (direction === 'right') {
            posTo = self.x + possibleMovements.right * 180;
            distance = posTo - self.x;
            if (possibleMovements.rightDeath) {
                tween = self.game.add.tween(self).to({x: posTo + deathOffset}, Math.abs(distance / deathSpeed), Phaser.Easing.Linear.None);
                tween.onComplete.add(params.resetGame);
            } else {
                tween = self.game.add.tween(self).to({x: posTo}, Math.abs(distance / speed), Phaser.Easing.Linear.None);
            }
        }

        if (Math.abs(distance) > 0) {
            tween.onComplete.add(function () {
                params.callback(self, distance, direction);
            });
            tween.start();
        }
        gameData.steps++;
    };

    this.updatePosition = function updatePosition(params) {
        possibleMovements = params;
        console.log('update pos', possibleMovements)
    };

    var listenSwipe = function listenSwipe(callback) {
        var eventDuration;
        var startPoint = {};
        var endPoint = {};
        var direction;
        var minimum = {
            duration: 75,
            distance: 150
        };

        self.game.input.onDown.add(function (pointer) {
            if (pointer.x >= self.x && pointer.x < self.x + 180 && pointer.y >= self.y && pointer.y < self.y + 180) {
                startPoint.x = pointer.x;
                startPoint.y = pointer.y;
            }
        }, self);


        self.game.input.onUp.add(function (pointer) {
            direction = '';
            eventDuration = self.game.input.activePointer.duration;

            if (eventDuration > minimum.duration && startPoint.x !== 0) {
                endPoint.x = pointer.x;
                endPoint.y = pointer.y;

                // Check direction
                if (endPoint.x - startPoint.x > minimum.distance) {
                    direction = 'right';
                } else if (startPoint.x - endPoint.x > minimum.distance) {
                    direction = 'left';
                } else if (endPoint.y - startPoint.y > minimum.distance) {
                    direction = 'down';
                } else if (startPoint.y - endPoint.y > minimum.distance) {
                    direction = 'up';
                }

                if (direction) {
                    startPoint.x = 0;
                    startPoint.y = 0;
                    callback(direction);
                }
            }
        }, self);
    };

    listenSwipe(function (direction) {
        move(direction);
    });

    init();
};


Character.prototype = Object.create(Phaser.Sprite.prototype);
Character.prototype.constructor = Character;

module.exports = Character;
