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
        callback = params.callback
    //CONST
    const BLOCKED = 'blocked';
    const HORIZONTAL_BLOCK = 'horizontal';
    const VERTICAL_BLOCK = 'vertical';


    //public
    this.orientation = type;
    this.col = params.col;
    this.row = params.row;


    var createBlock = function createBlock(){
        switch (type){
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

    var initBlockMovement = function initBlockMovement(){
        if (type === HORIZONTAL_BLOCK){
            self.inputEnabled = true;
            self.input.allowVerticalDrag = false;
            self.events.onDragStop.add(onDragStop, this);
        }else if (type === VERTICAL_BLOCK){
            self.inputEnabled = true;
            self.input.allowHorizontalDrag = false;
            self.events.onDragStop.add(onDragStop, this);
        }
    };

    var init = function init(){
        createBlock();
        initBlockMovement();
    };

    var onDragStop = function onDragStop (box) {
        if (type === HORIZONTAL_BLOCK) {
            var distance = box.x - currentX;
            console.log("Previous X:" + currentX + " Current X: " + box.x + 'Distance' + (box.x - currentX));
            currentX = box.x;
            callback(self, distance);
        }
    };

    this.updateBoundReferences = function updateBoundReferences(bounds){
        if (type === HORIZONTAL_BLOCK){
            var floor = new Phaser.Rectangle(currentX - bounds.initPos , currentY, bounds.range, width);
            self.input.enableDrag(false,false,false,255,floor);
            self.input.allowVerticalDrag = false;
        }else if (type === VERTICAL_BLOCK){
           var floor = new Phaser.Rectangle(currentX, currentY - bounds.initPos ,height , bounds.range);
            self.input.enableDrag(false,false,false,255,floor);
            self.input.allowVerticalDrag = true;
        }

    };
    init();
};


Block.prototype = Object.create(Phaser.Sprite.prototype);
Block.prototype.constructor = Block;

module.exports = Block;
