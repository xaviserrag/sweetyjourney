'use strict';
var Block = function Block(params) {
    //VARS
    var self = this,
        type = params.type,
        width = 180,
        height = 180,
        currentX = params.x,
        currentY = params.y,
        name = '',
        callback = params.callback,
        rangeArray = [];
    //CONST
    const BLOCKED = 'blocked';
    const HORIZONTAL_BLOCK = 'horizontal';
    const VERTICAL_BLOCK = 'vertical';


    //public
    this.orientation = type;
    this.col = params.col;
    this.row = params.row;


    var createBlock = function createBlock() {
        switch (type) {
            case BLOCKED:
                name = 'blocked';
                break;
            case HORIZONTAL_BLOCK:
                name = 'block_hor';
                break;
            case VERTICAL_BLOCK:
                name = 'bloc_dev';
                break;
        }
        Phaser.Sprite.call(self, params.game, params.x, params.y, name);
        params.parent.addChild(self);
    };

    var initBlockMovement = function initBlockMovement() {
        if (type === HORIZONTAL_BLOCK) {
            self.inputEnabled = true;
            self.input.allowVerticalDrag = false;
            self.events.onDragStop.add(onDragStop, this);
        } else if (type === VERTICAL_BLOCK) {
            self.inputEnabled = true;
            self.input.allowHorizontalDrag = false;
            self.events.onDragStop.add(onDragStop, this);
        }
    };

    var init = function init() {
        createBlock();
        initBlockMovement();
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
        } else if (type === VERTICAL_BLOCK) {
            fixedPos = getFixedPosition(box.y);
            distance = fixedPos - currentY;
            currentY = fixedPos;
            box.y = fixedPos;
            callback(self, distance);
        }
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
            var floor = new Phaser.Rectangle(currentX - bounds.initPos, currentY, bounds.range, width);
            self.input.enableDrag(false, false, false, 255, floor);
            self.input.allowVerticalDrag = false;
            updateRangeArray(currentX - bounds.initPos, bounds.range);
        } else if (type === VERTICAL_BLOCK) {
            var floor = new Phaser.Rectangle(currentX, currentY - bounds.initPos, height, bounds.range);
            self.input.enableDrag(false, false, false, 255, floor);
            self.input.allowVerticalDrag = true;
            updateRangeArray(currentY - bounds.initPos, bounds.range);
        }

    };
    init();
};


Block.prototype = Object.create(Phaser.Sprite.prototype);
Block.prototype.constructor = Block;

module.exports = Block;
