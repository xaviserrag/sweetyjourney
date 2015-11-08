'use strict';
var gameData = require('../gameData/gameData');
var config = require('../config/main');
var Block = function Block(params) {
    //VARS
    var self = this,
        type = params.type,
        width = 180,
        height = 246,
        yOffset = 70,
        currentX = params.x,
        currentY = params.y,
        name = '',
        callback = params.callback,
        rangeArray = [],
        animationIdle,
        animationMove;
    //CONST
    var BLOCKED = 'blocked';
    var HORIZONTAL_BLOCK = 'horizontal';
    var VERTICAL_BLOCK = 'vertical';

    var intervalCustom;

    var angrySound = params.game.add.audio('angrySound', 0.6);
    //public
    this.orientation = type;
    this.col = params.col;
    this.row = params.row;

    var win = function win(callback) {
        setTimeout(function() {
            self.exitDoorAnimSprite = self.game.add.sprite(self.x, self.y + 30, 'win');
            //self.exitDoorAnimSprite.anchor.set(0.5);
            self.exitDoorWinAnim = self.exitDoorAnimSprite.animations.add('win', Phaser.Animation.generateFrameNames('exitdoor', 7, 12, '', 2),6, false);
            self.exitDoorWinAnim.onComplete.add(callback);
            self.exitDoorWinAnim.play();
        }, 300);
    };

    var createBlock = function createBlock() {
        if (type === BLOCKED) {
            var randomNum = params.game.rnd.integerInRange(0, 100);
            if (randomNum < 80) {
                Phaser.Sprite.call(self, params.game, params.x, params.y - yOffset, config.block.aspects[0]);
            } else {
                var spriteIndex = params.game.rnd.integerInRange(1, (config.block.aspects.length - 1));
                Phaser.Sprite.call(self, params.game, params.x, params.y - yOffset, config.block.aspects[spriteIndex]);
            }

        } else {
            Phaser.Sprite.call(self, params.game, params.x, params.y - yOffset, type);

        }
        params.parent.addChild(self);


        if (self.orientation === 'win') {
            self.exitDoorIdleAnim = self.animations.add('idle', Phaser.Animation.generateFrameNames('exitdoor', 1, 6, '', 2), 24, true);
            console.log(Phaser.Animation.generateFrameNames('exitDoor', 1, 6, '', 2));
            self.exitDoorIdleAnim.play();
            self.game.winGameSignal.add(win);
        }
    };

    var initAnimations = function initAnimations() {
        animationIdle = self.animations.add('idle', Phaser.Animation.generateFrameNames('enemy_idle', 1, 65, '', 4), 24);

        animationMove = self.animations.add('moveHorizontal', Phaser.Animation.generateFrameNames('enemy_move', 1, 65, '', 4), 24);

        animationIdle.play();
        intervalCustom = setInterval(function () {
            animationIdle.play()
        }, 3900);
    };

    var initBlockMovement = function initBlockMovement() {
        if (type === HORIZONTAL_BLOCK) {
            self.inputEnabled = true;
            self.input.allowVerticalDrag = false;
            self.events.onDragStop.add(onDragStop, this);
            self.events.onDragStart.add(function () {
                angrySound.play();
                animationMove.play();
            }, this);
        } else if (type === VERTICAL_BLOCK) {
            self.inputEnabled = true;
            self.input.allowHorizontalDrag = false;
            self.events.onDragStop.add(onDragStop, this);
            self.events.onDragStart.add(function () {
                animationMove.play();
                angrySound.play();
            }, this);

        }
    };

    var init = function init() {
        createBlock();
        if (self.orientation === HORIZONTAL_BLOCK || self.orientation === VERTICAL_BLOCK) {
            initAnimations();
        }
        initBlockMovement();
        self.game.events.onShutdown.add(function () {
            intervalCustom && clearInterval(intervalCustom);
        });
    };

    var getFixedPosition = function getFixedPosition(userDragPos) {
        var finalPos;
        for (var i = 0; i < rangeArray.length; i++) {
            if (userDragPos >= rangeArray[i] && userDragPos < rangeArray[i + 1]) {
                if (Math.abs(rangeArray[i + 1] - userDragPos) < Math.abs(rangeArray[i] - userDragPos)) {
                    finalPos = rangeArray[i + 1];
                } else {
                    finalPos = rangeArray[i];
                }
            }
        }
        if (!finalPos) {
            finalPos = rangeArray[rangeArray.length - 1];
        }
        return finalPos;
    };


    var onDragStop = function onDragStop(box) {
        var distance,
            fixedPos;

        if (type === HORIZONTAL_BLOCK) {
            fixedPos = getFixedPosition(box.x);
            distance = fixedPos - currentX;
            currentX = fixedPos;
            box.x = fixedPos;
            callback(self, distance);
            intervalCustom = setInterval(function () {
                animationIdle.play()
            }, 3900);
        } else if (type === VERTICAL_BLOCK) {
            fixedPos = getFixedPosition(box.y + yOffset);
            distance = fixedPos - currentY;
            currentY = fixedPos;
            box.y = fixedPos - yOffset;
            callback(self, distance);
            intervalCustom = setInterval(function () {
                animationIdle.play()
            }, 3900);
        }

        gameData.steps++;
    };

    var updateRangeArray = function updateRangeArray(firstPos, range) {
        var rangeLength = range / width;
        var acum = firstPos;
        for (var i = 0; i < rangeLength; i++) {
            rangeArray.push(acum);
            acum += width;
        }
    };

    this.updateBoundReferences = function updateBoundReferences(bounds) {
        if (type === HORIZONTAL_BLOCK) {
            var floor = new Phaser.Rectangle(currentX - bounds.initPos, currentY - yOffset, bounds.range, height);
            self.input.enableDrag(false, false, false, 255, floor);
            self.events.onDragStart.add(function () {
                clearInterval(intervalCustom);
            });
            self.input.allowVerticalDrag = false;
            updateRangeArray(currentX - bounds.initPos, bounds.range);
        } else if (type === VERTICAL_BLOCK) {
            var floor = new Phaser.Rectangle(currentX, currentY - bounds.initPos, width, bounds.range);
            self.input.enableDrag(false, false, false, 255, floor);
            self.events.onDragStart.add(function () {
                clearInterval(intervalCustom);
            });
            self.input.allowVerticalDrag = true;
            updateRangeArray(currentY - bounds.initPos, bounds.range);
        }

    };
    init();
};


Block.prototype = Object.create(Phaser.Sprite.prototype);
Block.prototype.constructor = Block;

module.exports = Block;
