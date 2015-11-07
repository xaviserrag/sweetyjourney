'use strict';
var Block = function Block(params) {
    Phaser.Sprite.call(this, params.game, params.x, params.y, params.width, params.height, params.name);
    params.width = 32;
    params.height = 32;

    //VARS
    var self = this,
        range = 0;
    //CONST
    const HORIZONTAL_BLOCK = 'block1';
    const VERTICAL_BLOCK = 'block2';


    var init = function init(){
        self.game.add.existing(self);
        self.inputEnabled = true;
        self.events.onDragStop.add(onDragStop, this);
        if (params.name === HORIZONTAL_BLOCK){
            var floor = new Phaser.Rectangle(0, 0, range, params.width);
            self.input.enableDrag(false,false,false,255,floor);
            self.input.allowVerticalDrag = false;
        }else if (params.name === VERTICAL_BLOCK){
            var floor = new Phaser.Rectangle(0, 0, params.width, range);
            self.input.allowHorizontalDrag = false;
            self.input.enableDrag();
        }

        //setTimeout(self.updateBoundReferences ,3000)

    };

    var onDragStop = function onDragStop (sprite, pointer) {
     console.log(sprite.key + " dropped at x:" + pointer.x + " y: " + pointer.y);
    };

    this.updateBoundReferences = function updateBoundReferences(bounds){
        if (params.name === HORIZONTAL_BLOCK){
            var floor = new Phaser.Rectangle(bounds.x, bounds.y, range, bounds.width);
            self.input.enableDrag(false,false,false,255,floor);
        }else if (params.name === VERTICAL_BLOCK){
            var floor = new Phaser.Rectangle(bounds.x, bounds.y, bounds.height, range);
            self.input.enableDrag(false,false,false,255,floor);
        }

    };



    init();



};


Block.prototype = Object.create(Phaser.Sprite.prototype);
Block.prototype.constructor = Block;

module.exports = Block;
