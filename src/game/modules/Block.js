'use strict';
var Block = function Block(params) {
    params.name = 'blocked';
    Phaser.Sprite.call(this, params.game, params.x, params.y, params.name);

    console.log('params', params);
    params.width = 32;
    params.height = 32;

    //VARS
    var self = this,
        type = params.type,
        range = 0,
        route = 0;
    //CONST
    const HORIZONTAL_BLOCK = 2;
    const VERTICAL_BLOCK = 3;
    console.log('type', type);


    var init = function init(){
        self.game.add.existing(self);
        self.inputEnabled = true;
        self.events.onDragStop.add(onDragStop, this);
        if (type === HORIZONTAL_BLOCK){
            var floor = new Phaser.Rectangle(0, 0, range, width);
            self.input.enableDrag(false,false,false,255,floor);
            self.input.allowVerticalDrag = false;
        }else if (type === VERTICAL_BLOCK){
            var floor = new Phaser.Rectangle(0, 0, width, range);
            self.input.allowHorizontalDrag = false;
            self.input.enableDrag();
        }
    };

    var onDragStop = function onDragStop (sprite, pointer) {
     console.log(sprite.key + " dropped at x:" + pointer.x + " y: " + pointer.y);
    };

    this.updateBoundReferences = function updateBoundReferences(bounds){
        if (type === HORIZONTAL_BLOCK){
            var floor = new Phaser.Rectangle(bounds.x, bounds.y, range, bounds.width);
            self.input.enableDrag(false,false,false,255,floor);
        }else if (type === VERTICAL_BLOCK){
            var floor = new Phaser.Rectangle(bounds.x, bounds.y, bounds.height, range);
            self.input.enableDrag(false,false,false,255,floor);
        }

    };



    init();



};


Block.prototype = Object.create(Phaser.Sprite.prototype);
Block.prototype.constructor = Block;

module.exports = Block;
