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

    var getFixedPosition = function getFixedPosition(userX){
        for (var i = 0; i < rangeArray.length; i++){
            
        }
    }

    var onDragStop = function onDragStop(box) {
        var distance;
        if (type === HORIZONTAL_BLOCK) {
            getFixedPosition(box.x);
            distance = box.x - currentX;
            currentX = box.x;
            callback(self, distance);
        } else if (type === VERTICAL_BLOCK) {
            getFixedPosition(box.x);
            distance = box.y - currentY;
            currentY = box.y;
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
        console.log ('SUPER RANGE', rangeArray);
    };

    this.updateBoundReferences = function updateBoundReferences(bounds) {
        console.log('RANGE', bounds.range / 180);
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
