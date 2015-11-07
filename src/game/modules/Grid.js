'use strict';

var Block = require('./Block');

var Grid = function Grid(params) {
    Phaser.Group.call(this, params.game, params.x, params.y, params.name);

    var self = this;

    this.theoricalGrid = [];

    var createBlock = function createBlock(col, row, cellPosition) {
        var blockInfo = {
            x: 180 * col,
            y: 180 * row,
            name: 'block',
            game: self.game
        };

        return new Block(blockInfo);

    };

    var createGrid = function createGrid() {
        var rows = 9,
            cols = 5,
            count = 0;

        for (var i = 0; i < rows; i++) {
            var row = [];

            for(var j = 0; j < cols; j++) {
                row.push(createBlock(j, i, count));
                count++;
            }

            self.theoricalGrid.push(row);
        }

        console.log(self.theoricalGrid);
    };

    var init = function init() {
        createGrid();
    };

    init();
};


Grid.prototype = Object.create(Phaser.Group.prototype);
Grid.prototype.constructor = Grid;

module.exports = Grid;
