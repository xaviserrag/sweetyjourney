'use strict';
var Block = function Block(params) {
    //VARS
    var self = this,
        type = params.type,
        width = params.width,
        height = params.height,
        name = '',
        range = 0,
        route = 0;
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
        console.log('x', params.x);
        console.log('y', params.y);
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

    var onDragStop = function onDragStop (sprite, pointer) {
     console.log(sprite.key + " dropped at x:" + pointer.x + " y: " + pointer.y);
    };

    this.updateBoundReferences = function updateBoundReferences(bounds){
        console.log('bounds', bounds);
        if (type === HORIZONTAL_BLOCK){
            console.log('h');
            //var floor = new Phaser.Rectangle(bounds.initPos, params.y, bounds.range, 0);

            var floor = new Phaser.Rectangle(params.x, params.y, 0, 500);
            self.input.enableDrag(false,false,false,255,floor);
            self.input.allowVerticalDrag = false;
        }else if (type === VERTICAL_BLOCK){
            console.log('v');
            //var floor = new Phaser.Rectangle(params.x, bounds.initPos, 0, bounds.range);
           // var floor = new Phaser.Rectangle(bounds.initPos, params.y, bounds.range, 0);
            //self.input.enableDrag(false,false,false,255,floor);
            //self.input.allowVerticalDrag = true;
        }

    };
    init();
};


Block.prototype = Object.create(Phaser.Sprite.prototype);
Block.prototype.constructor = Block;

module.exports = Block;
