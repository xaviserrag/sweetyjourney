'use strict';

var Character = function Character(params) {
    Phaser.Sprite.call(this, params.game, params.x, params.y, params.name);
    var self = this;


    var init = function init() {
        self.orientation = 'character';
        params.parent.addChild(self);
        console.log('??', self.events)
        self.inputEnabled = true;

    };

    var listenSwipe = function listenSwipe(callback) {
        var eventDuration;
        var startPoint = {};
        var endPoint = {};
        var direction;
        var minimum = {
            duration: 75,
            distance: 20
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
                    direction = 'bottom';
                } else if (startPoint.y - endPoint.y > minimum.distance) {
                    direction = 'top';
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
        console.log(direction);
    });

    init();
};


Character.prototype = Object.create(Phaser.Sprite.prototype);
Character.prototype.constructor = Character;

module.exports = Character;
