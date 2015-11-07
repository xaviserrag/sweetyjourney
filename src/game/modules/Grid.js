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
                game: self.game,
                parent: self
            };
            console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', self);
            return new Block(blockInfo);
        }


    };

    var calculateDistance = function calculateDistance(from, to) {
        return from*180+180+to*180;
    };

    var calculatePosInDistance = function calculatePosInDistance(from, to) {
        return -(from*180+180/2);
    };

    var calculateMovement = function calculateMovement(block) {
            var leftMovement = 0,
            rightMovement = 0,
            upMovement = 0,
            downMovement = 0,
            result;

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

            result = {
                range: calculateDistance(upMovement, downMovement),
                initPos: calculatePosInDistance(upMovement)
            };
        } else if(block.orientation === 'horizontal') {
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

            result =  {
                range: calculateDistance(leftMovement, rightMovement),
                initPos: calculatePosInDistance(leftMovement)
            };
        }

        return result;
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
    };

    var updateGrid = function updateGrid() {
        console.log('updategrid');
        var movement, block;
        for (var i = 0; i < 9; i++) {
            for(var j = 0; j < 5; j++) {
                block = self.theoreticalGrid[i][j];
                if(block && block.orientation !== 'blocked') {
                    movement = calculateMovement(block);
                    block.updateBoundReferences({
                        initPos: movement.initPos,
                        range: movement.range
                    });
                }
            }
        }
    };

    var init = function init() {
        createGrid();
        updateGrid();
    };

    init();
};


Grid.prototype = Object.create(Phaser.Group.prototype);
Grid.prototype.constructor = Grid;

module.exports = Grid;
