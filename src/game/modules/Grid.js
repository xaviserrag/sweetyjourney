'use strict';
var Grid = function Grid(params) {
    Phaser.Group.call(this, params.game, params.x, params.y, params.name);

    var self = this;

    this.theoricalGrid = [];

    var createCells = function createCells() {
        var rows = 9,
            cols = 5;

        for (var i = 0; i < rows; i++) {
            var row = [];

            for(var j = 0; j < cols; j++) {
                row.push(j+i);
            }

            self.theoricalGrid.push(row);
        }

        console.log(self.theoricalGrid);
    };

    var init = function init() {
        createCells();
    };

    init();
};


Grid.prototype = Object.create(Phaser.Group.prototype);
Grid.prototype.constructor = Grid;

module.exports = Grid;
