'use strict';

var config = require('../config/main');
var Block = require('./Block');


var Grid = function Grid(params) {
    Phaser.Group.call(this, params.game, params.x, params.y, params.name);

    var self = this;
    var types = {
        0: 'empty',
        1: 'blocked',
        2: 'horizontal',
        3: 'vertical'
    };


    this.theoreticalGrid = [];

    var createBlock = function createBlock(col, row, cellPosition) {
        var type = types[config.level[0].grid[row][col]];

        if (type === 'empty') {
            return null;
        } else {
            var blockInfo = {
                x: 180 * col,
                y: 180 * row,
                type: type,
                row: row,
                col: col,
                game: self.game
            };
            return new Block(blockInfo);
        }
    };

    var calculateMovement = function calculateMovement(block) {
            var leftMovement = 0,
            rightMovement = 0,
            upMovement = 0,
            downMovement = 0;

        if (block.orientation === 'vertical') {
            for (var j = 0; j < config.rows; j++) {

                if (j < block.row) {
                    if (self.theoreticalGrid[j][block.col] === null) {
                        upMovement++;
                    } else {
                        upMovement = 0;
                    }
                } else if (j > block.row) {
                    if (self.theoreticalGrid[j][block.col] === null) {
                        downMovement++;
                    } else {
                        break;
                    }
                }
            }

            console.log('upMovements', upMovement);
            console.log('downMovements', downMovement);

        } else {
            for (var i = 0; i < config.cols; i++) {

                if (i < block.col) {
                    if (self.theoreticalGrid[block.row][i] === null) {
                        leftMovement++;
                    } else {
                        leftMovement = 0;
                    }
                } else if (i > block.col) {
                    if (self.theoreticalGrid[block.row][i] === null) {
                        rightMovement++;
                    } else {
                        break;
                    }
                }
            }

            console.log('leftMovements', leftMovement);
            console.log('rightMovements', rightMovement);
        }


        console.log(self.theoreticalGrid);
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

            self.theoreticalGrid.push(row);
        }

        console.log(self.theoreticalGrid);
    };

    var updateGrid = function updateGrid() {
        var movement;
        for (var i = 0; i < 9; i++) {
            for(var j = 0; j < 5; j++) {
                movement = calculateMovement(self.theoreticalGrid[i][j]);
            }
        }

        console.log(self.theoreticalGrid);
    };

    var init = function init() {
        createGrid();
        //updateGrid();
    };

    init();
};


Grid.prototype = Object.create(Phaser.Group.prototype);
Grid.prototype.constructor = Grid;

module.exports = Grid;
