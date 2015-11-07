'use strict';
var config = require('../config/main');

var Menu = function Menu(params) {
    Phaser.Group.call(this, params.game, params.x, params.y, params.name);
    var self = this;
    var init = function init() {
        var graphics = self.game.add.graphics(0, 0);
        graphics.beginFill(0x000000, 0.5);
        graphics.drawRect(0, 0, self.game.width, self.game.height);
        graphics.endFill();

        self.buttonInfo = this.game.add.sprite(50, 1650, 'gameButtons', 'pause_off');
        self.buttonInfo.inputEnabled = true;
        self.buttonInfo.events.onInputDown.add(function () {
            self.menu = new Menu({
                x: 0,
                y: 0,
                game: self.game,
                name: 'Menu'
            });
        }, this);
    };

    init();
};


Menu.prototype = Object.create(Phaser.Group.prototype);
Menu.prototype.constructor = Menu;

module.exports = Menu;
