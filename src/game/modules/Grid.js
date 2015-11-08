'use strict';

var config = require('../config/main');
var gameData = require('../gameData/gameData');
var Block = require('./Block');
var Character = require('./Character');


var Grid = function Grid(params) {
    Phaser.Group.call(this, params.game, params.x, params.y, params.name);

    var totalBlocks = 0,
        leftDeath = false,
        rightDeath = false,
        upDeath = false,
        downDeath = false,
        haveBeenFail = false,
        leftWin = false,
        rightWin = false,
        upWin = false,
        downWin = false;

    var self = this;
    var types = {
        0: 'empty',
        1: 'blocked',
        2: 'horizontal',
        3: 'vertical',
        4: 'character',
        5: 'win'
    };

    this.game.winGameSignal = new Phaser.Signal();

    this.theoreticalGrid = [];

    var createBlock = function createBlock(col, row, cellPosition) {
        var type = types[config.level[gameData.currentLevel].grid[row][col]];

        if (type === 'empty') {
            return null;
        } else if (type === 'character') {
            totalBlocks++;
            return new Character({
                x: (180 * col) + 90,
                y: (180 * row) + 90,
                game: self.game,
                parent: self,
                row: row,
                col: col,
                name: 'character',
                callback: updateBlockPosition,
                resetGame: resetGame
            });
        } else {
            var blockInfo = {
                x: (180 * col) + 90,
                y: (180 * row) + 90,
                type: type,
                row: row,
                col: col,
                game: self.game,
                parent: self,
                callback: updateBlockPosition
            };
            totalBlocks++;
            return new Block(blockInfo);
        }

    };

    var calculateDistance = function calculateDistance(from, to) {
        return from * 180 + 180 + to * 180;
    };

    var calculatePosInDistance = function calculatePosInDistance(from) {
        return (from * 180);
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
        } else if (block.orientation === 'horizontal') {
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

            result = {
                range: calculateDistance(leftMovement, rightMovement),
                initPos: calculatePosInDistance(leftMovement)
            };
        }

        return result;
    };

    var isDeathDirection = function isDeathDirection(col, direction) {
        if (direction === 'left' || direction === 'right') {
            if (col === 0 || col === 4) {
                if (direction === 'left') {
                    leftDeath = true;
                } else {
                    rightDeath = true;
                }
            }
        } else {
            if (col === 0 || col === 8) {
                if (direction === 'up') {
                    upDeath = true;
                } else {
                    downDeath = true;
                }

            }
        }
    };

    var calculateCharacterMovement = function calculateCharacterMovement(block) {
        var leftMovement = 0,
            rightMovement = 0,
            upMovement = 0,
            downMovement = 0;

        leftDeath = false;
        rightDeath = false;
        upDeath = false;
        downDeath = false;

        leftWin = false;
        rightWin = false;
        upWin = false;
        downWin = false;


        for (var j = 0; j < config.rows; j++) {

            //SI LA J ES MENOR ES QUE PUEDE DESPLAZARSE ARRIBA
            if (j < block.row) {
                //SI NO ES UN BLOQUE....
                if (self.theoreticalGrid[j][block.col] === null) {
                    if (!upWin) {
                        isDeathDirection(j, 'up');
                    }
                    upMovement++;
                    //SI ES UN WIN
                } else if (self.theoreticalGrid[j][block.col].orientation === 'win') {
                    upDeath = false;
                    upWin = true;
                    upMovement = 1;

                    block.hasWinVertical = true;
                    //SI NO ES UN WIN, OSEA ES UN BLOQUE
                } else {

                    upDeath = false;
                    if (!leftWin) {
                        block.hasWinVertical = false;
                    }
                    upMovement = 0;
                }
            } else if (j > block.row) {
                if (self.theoreticalGrid[j][block.col] === null) {
                    if (!downWin) {
                        isDeathDirection(j, 'down');
                    }
                    downMovement++;
                } else if (self.theoreticalGrid[j][block.col].orientation === 'win') {
                    downDeath = false;
                    downWin = true;
                    block.hasWinVertical = true;
                    downMovement++;
                    break;
                } else {
                    downDeath = false;
                    break;
                }
            }
        }


        for (var i = 0; i < config.cols; i++) {
            if (i < block.col) {
                if (self.theoreticalGrid[block.row][i] === null) {
                    if (!leftWin) {
                        isDeathDirection(i, 'left');
                    }
                    leftMovement++;
                } else if (self.theoreticalGrid[block.row][i].orientation === 'win') {
                    leftDeath = false;
                    block.hasWinHorizontal = true;
                    leftWin = true;
                    leftMovement = 1;

                } else {
                    if (!upWin) {
                        block.hasWin = false;
                    }

                    leftDeath = false;
                    leftMovement = 0;
                }
            } else if (i > block.col) {
                if (self.theoreticalGrid[block.row][i] === null) {
                    if (!rightWin) {
                        isDeathDirection(i, 'right');
                    }
                    rightMovement++;
                } else if (self.theoreticalGrid[block.row][i].orientation === 'win') {
                    rightWin = true;
                    rightDeath = false;
                    block.hasWinHorizontal = true;
                    rightMovement++
                } else {
                    rightDeath = false;
                    break;
                }
            }
        }

        return {
            rangeHorizontal: calculateDistance(leftMovement, rightMovement),
            initPosHorizontal: calculatePosInDistance(leftMovement),
            rangeVertical: calculateDistance(upMovement, downMovement),
            initPosVertical: calculatePosInDistance(upMovement),
            left: leftMovement,
            right: rightMovement,
            up: upMovement,
            down: downMovement,
            leftDeath: leftDeath,
            rightDeath: rightDeath,
            upDeath: upDeath,
            downDeath: downDeath
        };

    };


    var createGrid = function createGrid() {
        var rows = 9,
            cols = 5,
            count = 0;

        for (var i = 0; i < rows; i++) {
            var row = [];

            for (var j = 0; j < cols; j++) {
                row.push(createBlock(j, i, count));
                count++;
            }

            self.theoreticalGrid.push(row);
        }
        sortDepthElements();

    };

    var sortDepthElements = function sortDepthElement() {
        for (var i = 0; i < self.theoreticalGrid.length; i++) {
            for (var j = 0; j < self.theoreticalGrid[i].length; j++) {
                var currentBlock = self.theoreticalGrid[i][j];
                if (currentBlock && currentBlock.orientation !== 'win') {
                    self.bringToTop(currentBlock);
                }
            }
        }
    };

    var updateGrid = function updateGrid() {
            var movement, block;
            for (var i = 0; i < 9; i++) {
                for (var j = 0; j < 5; j++) {
                    block = self.theoreticalGrid[i][j];
                    if (block && block.orientation !== 'blocked' && block.orientation !== 'character' && block.orientation !== 'win') {
                        movement = calculateMovement(block);
                        block.updateBoundReferences({
                            initPos: movement.initPos,
                            range: movement.range
                        });
                    }

                    if (block && block.orientation === 'character') {
                        movement = calculateCharacterMovement(block);
                        block.updatePosition(movement);
                    }
                }
            }
            sortDepthElements();
        }
        ;

    var updateBlockPosition = function updateBlockPosition(block, distance, direction) {
        self.theoreticalGrid[block.row][block.col] = null;
        var newPosition;

        if (block.orientation === 'vertical') {
            newPosition = block.row + Math.floor(distance / 180);
            block.row = newPosition;
            self.theoreticalGrid[newPosition][block.col] = block;

        } else if (block.orientation === 'horizontal') {
            newPosition = block.col + Math.floor(distance / 180);
            block.col = newPosition;
            self.theoreticalGrid[block.row][newPosition] = block;
        } else if (block.orientation === 'character') {
            if (direction === 'left' || direction === 'right') {
                for (var i = 0; i < 5; i++) {
                    if (block.hasWinHorizontal && self.theoreticalGrid[block.row][i] && self.theoreticalGrid[block.row][i].orientation === 'win') {
                        if (direction === 'left' && !block.leftDeath) {
                            winGame();
                        } else if (direction === 'up' && !block.upDeath) {
                            winGame();
                        } else if (direction === 'down' && !block.downDeath) {
                            winGame();
                        } else if (direction === 'right' && !block.rightDeath) {
                            winGame();
                        }
                    }
                }

                newPosition = block.col + Math.floor(distance / 180);
                if (newPosition >= 0) {
                    block.col = newPosition;
                    self.theoreticalGrid[block.row][newPosition] = block;
                }
            }
            if (direction === 'up' || direction === 'down') {

                for (var j = 0; j < 9; j++) {
                    if (block.hasWinVertical && self.theoreticalGrid[j][block.col] && self.theoreticalGrid[j][block.col].orientation === 'win') {
                        if (direction === 'left' && !block.leftDeath) {
                            winGame();
                        } else if (direction === 'up' && !block.upDeath) {
                            winGame();
                        } else if (direction === 'down' && !block.downDeath) {
                            winGame();
                        } else if (direction === 'right' && !block.rightDeath) {
                            winGame();
                        }
                    }
                }

                newPosition = block.row + Math.floor(distance / 180);
                if (newPosition >= 0) {
                    block.row = newPosition;
                    self.theoreticalGrid[newPosition][block.col] = block;
                }
            }
        }
        updateGrid();
    };

    var checkCurrentStars = function checkCurrentStars() {
        if (gameData.steps <= gameData.levelSelection[gameData.currentLevel].minStepsTo3) {
            gameData.levelSelection[gameData.currentLevel].currentStars = '3';
        } else if (gameData.steps <= (gameData.levelSelection[gameData.currentLevel].minStepsTo3 + (gameData.levelSelection[gameData.currentLevel].minStepsTo3 * gameData.levelSelection[gameData.currentLevel].proportionalStepsTo1) / 100)) {
            gameData.levelSelection[gameData.currentLevel].currentStars = '2';
        } else {
            gameData.levelSelection[gameData.currentLevel].currentStars = '1';
        }
    };

    var checkStars = function checkStars() {
        if (gameData.steps <= gameData.levelSelection[gameData.currentLevel].minStepsTo3 && gameData.levelSelection[gameData.currentLevel].stars < 3) {
            gameData.levelSelection[gameData.currentLevel].stars = '3';
        } else if (gameData.steps <= (gameData.levelSelection[gameData.currentLevel].minStepsTo3 + (gameData.levelSelection[gameData.currentLevel].minStepsTo3 * gameData.levelSelection[gameData.currentLevel].proportionalStepsTo1) / 100) && gameData.levelSelection[gameData.currentLevel].stars < 2) {
            gameData.levelSelection[gameData.currentLevel].stars = '2';
        } else if (gameData.levelSelection[gameData.currentLevel].stars < 1) {
            gameData.levelSelection[gameData.currentLevel].stars = '1';
        }
        if (gameData.levelSelection[gameData.currentLevel + 1]) {
            gameData.levelSelection[gameData.currentLevel + 1].blocked = false;
        }
        //Save in local storage

        if (typeof(Storage) !== "undefined") {
            localStorage.setItem('level' + (gameData.currentLevel + 1), {blocked: false});
            localStorage.setItem('level' + (gameData.currentLevel) + '-stars', gameData.levelSelection[gameData.currentLevel].stars);


        }
        //End save in local storage
        gameData.steps = 0;
    };

    var winGame = function winGame() {
        if (!haveBeenFail) {
            self.game.winGameSignal.dispatch(function() {
                checkCurrentStars();//Check current game stars
                checkStars();
                if (gameData.currentLevel <= config.level.length) {
                    gameData.currentLevel++;
                }
                self.game.state.start('gameSucces');
            });


        }
    };

    var resetGame = function resetGame() {
        haveBeenFail = true;
        self.game.state.start('gameOver');
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
