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
        console.log('??', self.events)
        self.inputEnabled = true;

    };

    var move = function move(direction) {
        var tween;
        console.log(direction);
        if (direction === 'up') {
            tween = self.game.add.tween(self).to({y: -(possibleMovements.rangeVertical +possibleMovements.initPosVertical - 90)}, 500, Phaser.Easing.Linear.None);

        } else if (direction === 'down') {
            tween = self.game.add.tween(self).to({y: possibleMovements.rangeVertical - possibleMovements.initPosVertical - 90}, 500, Phaser.Easing.Linear.None);

        } else if (direction === 'left') {
            tween = self.game.add.tween(self).to({x: -(possibleMovements.rangeHorizontal + possibleMovements.initPosHorizontal - 90)}, 500, Phaser.Easing.Linear.None);

        } else if (direction === 'right') {
            tween = self.game.add.tween(self).to({x: possibleMovements.rangeHorizontal - possibleMovements.initPosHorizontal - 90}, 500, Phaser.Easing.Linear.None);

        }
        tween.start();
        console.log(tween)
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
