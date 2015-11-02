'use strict';
var Block = function Block(params) {
    Phaser.Sprite.call(this, params.game, params.x, params.y, params.name);
    this.game.add.existing(this);
    this.inputEnabled = true;
    this.input.enableDrag();

    if (params.name === 'block1'){
        this.input.allowVerticalDrag = false;
    }else{
        this.input.allowHorizontalDrag = false;
    }

};


Block.prototype = Object.create(Phaser.Sprite.prototype);
Block.prototype.constructor = Block;

module.exports = Block;
