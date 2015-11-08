'use strict';
var gameData = require('../gameData/gameData');
var Character = function Character(params) {

    var self = this,
        yOffset = 50;

    this.col = params.col;
    this.row = params.row;

    var possibleMovements;

    var happySound2 = params.game.add.audio('happySound2', 0.6);
    var happySound3 = params.game.add.audio('happySound3', 0.6);

    var sounds = [happySound2, happySound3];

    var animationIdle, animationHorizontal, animationDown, animationUp;

    Phaser.Sprite.call(this, params.game, params.x, params.y - yOffset, params.name, 0);


    var initAnimations = function initAnimations() {
        animationIdle = self.animations.add('idle', Phaser.Animation.generateFrameNames('pj_idle', 1, 92, '', 4), 24, true);

        animationHorizontal = self.animations.add('moveHorizontal', Phaser.Animation.generateFrameNames('pj_right', 1, 92, '', 4));
        animationHorizontal.onComplete.add(function() {
           animationIdle.play();
        });
        animationDown = self.animations.add('moveDown', Phaser.Animation.generateFrameNames('pj_front', 1, 25, '', 4));
        animationDown.onComplete.add(function() {
           animationIdle.play();
        });
        animationUp = self.animations.add('moveUp', Phaser.Animation.generateFrameNames('pj_up', 1, 25, '', 4));
        animationUp.onComplete.add(function() {
           animationIdle.play();
        });

        animationIdle.play('idle');
    };

    var init = function init() {
        initAnimations();
        self.orientation = 'character';
        params.parent.addChild(self);
        self.inputEnabled = true;
    };

    var move = function move(direction) {
        var tween;
        var speed = 1.5,
            deathSpeed = 1.5,
            deathOffset = 200,
            posTo = 0,
            distance = 0;

        var random = self.game.rnd.integerInRange(0, 1);
        sounds[random].play();

        if (direction === 'up') {
            posTo = self.y - (possibleMovements.up * 180);
            distance = posTo - self.y;

            animationUp.play(30);

            if (possibleMovements.upDeath) {
                tween = self.game.add.tween(self).to({y: posTo - deathOffset}, Math.abs(distance / deathSpeed), Phaser.Easing.Linear.None);
                tween.onComplete.add(params.resetGame);
            } else {
                tween = self.game.add.tween(self).to({y: posTo}, Math.abs(distance / speed), Phaser.Easing.Linear.None);
            }


        } else if (direction === 'down') {
            posTo = self.y + possibleMovements.down * 180;
            distance = posTo - self.y;
            animationDown.play(30);

            if (possibleMovements.downDeath) {
                tween = self.game.add.tween(self).to({y: posTo + deathOffset}, Math.abs(distance / deathSpeed), Phaser.Easing.Linear.None);
                tween.onComplete.add(params.resetGame);
            } else {
                tween = self.game.add.tween(self).to({y: posTo}, Math.abs(distance / speed), Phaser.Easing.Linear.None);
            }

        } else if (direction === 'left') {
            posTo = self.x - (possibleMovements.left * 180);
            distance = posTo - self.x;
            animationHorizontal.play(30);

            if (possibleMovements.leftDeath) {
                tween = self.game.add.tween(self).to({x: posTo - deathOffset}, Math.abs(distance / deathSpeed), Phaser.Easing.Linear.None);
                tween.onComplete.add(params.resetGame);
            } else {
                tween = self.game.add.tween(self).to({x: posTo}, Math.abs(distance / speed), Phaser.Easing.Linear.None);
            }

        } else if (direction === 'right') {
            posTo = self.x + possibleMovements.right * 180;
            distance = posTo - self.x;
            animationHorizontal.play(30);
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


                startPoint.x = 0;
                startPoint.y = 0;

                if (direction) {
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
