'use strict';
var Block = function Block(params) {
    Phaser.Sprite.call(this, params.game, params.x, params.y, params.name);
    this.game.add.existing(this);
    this.inputEnabled = true;


    if (params.name === 'block1'){
        var floor = new Phaser.Rectangle(0, 0, 64, 32);
        this.input.enableDrag(false,false,false,255,floor);
        this.input.allowVerticalDrag = false;
    }else{
        this.input.allowHorizontalDrag = false;
        this.input.enableDrag();
    }



};


Block.prototype = Object.create(Phaser.Sprite.prototype);
Block.prototype.constructor = Block;

module.exports = Block;
