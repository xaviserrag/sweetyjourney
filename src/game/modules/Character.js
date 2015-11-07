'use strict';

var Character = function Character(params) {
    Phaser.Sprite.call(this, params.game, params.x, params.y, params.name);
    var self = this;

    this.col = params.col;
    this.row = params.row;

    var possibleMovements;

    var init = function init() {
        self.orientation = 'character';
        params.parent.addChild(self);
        self.inputEnabled = true;
    };

    var move = function move(direction) {
        var tween;
        console.log(direction, possibleMovements);
        var speed = 2,
            posTo = 0,
            distance = 0;

        if (direction === 'up') {
            posTo = self.y - (possibleMovements.rangeVertical - possibleMovements.initPosVertical);
            distance = Math.abs(posTo - self.y);
            tween = self.game.add.tween(self).to({y: posTo}, Math.abs(distance/speed), Phaser.Easing.Linear.None);
        } else if (direction === 'down') {
            posTo = self.y + possibleMovements.rangeVertical - possibleMovements.initPosVertical - 180;
            distance = Math.abs(posTo - self.y);
            tween = self.game.add.tween(self).to({y: posTo}, Math.abs(distance/speed), Phaser.Easing.Linear.None);

        } else if (direction === 'left') {
            posTo = self.x - (possibleMovements.rangeHorizontal - possibleMovements.initPosHorizontal);
            distance = Math.abs(posTo - self.x);
            tween = self.game.add.tween(self).to({x: posTo}, Math.abs(distance/speed), Phaser.Easing.Linear.None);

        } else if (direction === 'right') {
            posTo = self.x + possibleMovements.rangeHorizontal - possibleMovements.initPosHorizontal - 180;
            distance = Math.abs(posTo - self.x);
            tween = self.game.add.tween(self).to({x: posTo}, Math.abs(distance/speed), Phaser.Easing.Linear.None);

        }

        if(distance > 0) {
            tween.onComplete.add(function() {
                params.callback(self, distance);
            });
            tween.start();
        }

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

        self.game.input.onDown.add(function(pointer) {
            if(pointer.x >= self.x && pointer.x < self.x + 180 && pointer.y >= self.y && pointer.y < self.y + 180 ) {
                startPoint.x = pointer.x;
                startPoint.y = pointer.y;
            }
        }, self);


        self.game.input.onUp.add(function(pointer) {
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

    listenSwipe(function(direction) {
        move(direction);
    });

    init();
};


Character.prototype = Object.create(Phaser.Sprite.prototype);
Character.prototype.constructor = Character;

module.exports = Character;
