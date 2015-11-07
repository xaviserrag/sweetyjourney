'use strict';

var Character = function Character(params) {
    Phaser.Sprite.call(this, params.game, params.x, params.y, params.name);

    var self = this;

    var init = function init() {
        console.log('hi character');
    };

    init();
};


Character.prototype = Object.create(Phaser.Sprite.prototype);
Character.prototype.constructor = Character;

module.exports = Character;
