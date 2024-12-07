(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = {
    aspects: [
        'blocked',
        'blocked2',
        'blocked3'
    ]
}
},{}],2:[function(require,module,exports){
module.exports = [
//1
    {
        grid: [
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,5,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,4,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0]
        ],
        stars: '0',
        proportionalStepsTo1: 80,
        minStepsTo3: 1,
        blocked: false
    },
    //2
    {
        grid: [
            [0,0,0,0,0],
            [0,0,0,0,0],
            [1,1,0,0,0],
            [1,0,0,5,0],
            [0,0,0,0,0],
            [0,4,0,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0]
        ],
        stars: '0',
        proportionalStepsTo1: 80,
        minStepsTo3: 2,
        blocked: true
    },
    //3
    {
        grid: [
            [0,4,0,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,0,1,1],
            [0,0,0,0,5],
            [0,0,0,0,0],
            [0,0,0,0,1],
            [0,1,0,0,0],
            [0,0,0,0,0]
        ],
        stars: '0',
        proportionalStepsTo1: 80,
        minStepsTo3: 3,
        blocked: true
    },
    //4
    {
        grid: [
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,4,0,2,0],
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,0,5,0],
            [0,0,0,0,0]
        ],
        stars: '0',
        proportionalStepsTo1: 80,
        minStepsTo3: 3,
        blocked: true
    },
    //5
    {
        grid: [
            [0,0,0,0,0],
            [0,0,5,0,0],
            [0,0,0,0,0],
            [1,0,2,1,1],
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,4,0,0],
            [0,0,0,0,0]
        ],
        stars: '0',
        proportionalStepsTo1: 80,
        minStepsTo3: 2,
        blocked: true
    },
    //6
    {
        grid: [
            [1,0,0,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,5,0,0],
            [0,1,1,1,0],
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0],
            [4,0,0,0,3]
        ],
        stars: '0',
        proportionalStepsTo1: 80,
        minStepsTo3: 5,
        blocked: true
    },
    //7
    {
        grid: [
            [0,0,0,5,0],
            [0,1,0,0,0],
            [0,0,0,0,1],
            [0,0,0,1,0],
            [1,2,0,0,0],
            [0,0,0,0,0],
            [0,0,1,2,0],
            [4,0,0,0,1],
            [0,0,0,0,0]
        ],
        stars: '0',
        proportionalStepsTo1: 80,
        minStepsTo3: 8,
        blocked: true
    },
    //8
    {
        grid: [
            [1,0,0,0,3],
            [2,0,0,0,0],
            [0,5,0,0,0],
            [1,1,0,0,0],
            [1,0,0,0,0],
            [1,1,0,0,0],
            [0,0,0,0,0],
            [0,4,0,0,0],
            [0,0,0,0,1]
        ],
        stars: '0',
        proportionalStepsTo1: 80,
        minStepsTo3: 5,
        blocked: true
    },
    {
        grid: [
            [0,0,0,0,0],
            [0,3,2,0,4],
            [0,0,0,0,1],
            [0,0,0,0,5],
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,1,0,0],
            [0,1,1,0,0]
        ],
        stars: '0',
        proportionalStepsTo1: 80,
        minStepsTo3: 5,
        blocked: true
    },
    {
        grid: [
            [1,0,0,3,2],
            [0,0,5,0,0],
            [0,0,1,0,0],
            [0,0,1,1,0],
            [0,0,4,0,0],
            [0,0,1,0,0],
            [0,0,1,0,0],
            [0,0,0,0,0],
            [3,0,0,0,3]
        ],
        stars: '0',
        proportionalStepsTo1: 80,
        minStepsTo3: 6,
        blocked: true
    },
    {
        grid: [
            [0,0,0,0,0],
            [0,5,0,0,0],
            [1,1,3,0,0],
            [4,0,0,0,0],
            [0,0,0,1,0],
            [0,0,0,3,0],
            [0,0,0,0,0],
            [0,1,0,0,0],
            [0,1,0,0,0]
        ],
        stars: '0',
        proportionalStepsTo1: 80,
        minStepsTo3: 8,
        blocked: true
    },
    {
        grid: [
            [3,0,1,1,1],
            [0,0,0,1,1],
            [0,0,0,0,0],
            [0,0,0,0,5],
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,4,0,2],
            [0,0,3,1,1]
        ],
        stars: '0',
        proportionalStepsTo1: 80,
        minStepsTo3: 7,
        blocked: true
    },
    {
        grid: [
            [3,0,0,0,2],
            [0,5,2,3,0],
            [0,1,0,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,0,1,0],
            [0,0,0,0,0],
            [0,0,0,0,4]
        ],
        stars: '0',
        proportionalStepsTo1: 80,
        minStepsTo3: 9,
        blocked: true
    },
    {
        grid: [
            [4,0,2,1,1],
            [0,0,0,0,1],
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,1,0,0],
            [0,0,2,5,0],
            [0,0,0,0,0]
        ],
        stars: '0',
        proportionalStepsTo1: 80,
        minStepsTo3: 7,
        blocked: true
    },
    {
        grid: [
            [0,0,0,0,3],
            [0,0,0,5,0],
            [0,0,0,0,2],
            [0,0,1,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,0,2,1],
            [0,4,0,0,0]
        ],
        stars: '0',
        proportionalStepsTo1: 80,
        minStepsTo3: 7,
        blocked: true
    },
    {
        grid: [
            [0,0,0,0,0],
            [0,0,0,0,2],
            [2,0,0,0,0],
            [0,0,0,0,0],
            [0,4,0,0,0],
            [0,1,0,0,0],
            [0,5,0,0,0],
            [0,0,0,0,2],
            [0,0,0,0,0]
        ],
        stars: '0',
        proportionalStepsTo1: 80,
        minStepsTo3: 7,
        blocked: true
    },
    {
        grid: [
            [1,0,0,0,2],
            [3,0,0,1,0],
            [0,0,0,0,1],
            [0,0,1,5,0],
            [0,0,0,2,1],
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,1,4,1,0],
            [0,1,1,1,0]
        ],
        stars: '0',
        proportionalStepsTo1: 80,
        minStepsTo3: 9,
        blocked: true
    },
    {
        grid: [
            [1,1,1,0,0],
            [1,1,0,0,0],
            [1,0,0,0,0],
            [0,0,0,5,3],
            [0,0,0,0,0],
            [0,0,0,1,0],
            [0,2,0,0,0],
            [1,1,3,0,0],
            [4,0,0,0,0]
        ],
        stars: '0',
        proportionalStepsTo1: 80,
        minStepsTo3: 7,
        blocked: true
    },
    {
        grid: [
            [0,0,1,0,0],
            [0,4,2,0,0],
            [0,0,1,0,0],
            [0,0,1,0,0],
            [3,1,1,3,0],
            [0,0,1,0,0],
            [0,0,2,0,0],
            [0,0,1,0,0],
            [0,5,1,2,0]
        ],
        stars: '0',
        proportionalStepsTo1: 80,
        minStepsTo3: 7,
        blocked: true
    },
    {
        grid: [
            [1,0,0,1,0],
            [1,0,2,3,0],
            [0,5,1,4,0],
            [0,1,0,0,1],
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,0,0,2],
            [0,2,0,0,0],
            [1,0,0,0,0]
        ],
        stars: '0',
        proportionalStepsTo1: 80,
        minStepsTo3: 7,
        blocked: true
    },
    {
        grid: [
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,5,1,0,3],
            [0,1,1,1,0],
            [0,1,1,1,0],
            [2,3,1,3,2],
            [3,0,0,0,0],
            [0,0,0,0,4]
        ],
        stars: '0',
        proportionalStepsTo1: 80,
        minStepsTo3: 7,
        blocked: true
    },
    {
        grid: [
            [0,0,0,0,0],
            [0,5,0,0,0],
            [3,0,0,0,0],
            [0,2,0,0,0],
            [0,0,0,2,0],
            [0,0,0,0,0],
            [0,3,0,0,0],
            [0,0,0,4,0],
            [0,0,0,0,0]
        ],
        stars: '0',
        proportionalStepsTo1: 80,
        minStepsTo3: 5,
        blocked: true
    },
    {
        grid: [
            [1,1,1,1,1],
            [1,0,4,0,1],
            [1,0,3,0,1],
            [1,0,2,1,1],
            [0,1,2,0,0],
            [1,0,2,1,0],
            [0,1,2,0,1],
            [1,0,2,1,0],
            [0,0,5,0,0]
        ],
        stars: '0',
        proportionalStepsTo1: 80,
        minStepsTo3: 11,
        blocked: true
    },
    {
        grid: [
            [0,0,5,0,0],
            [0,0,0,0,0],
            [1,0,3,0,1],
            [1,1,3,1,1],
            [1,1,3,1,1],
            [1,0,0,0,1],
            [0,3,0,3,0],
            [0,0,0,0,0],
            [3,0,4,0,3]
        ],
        stars: '0',
        proportionalStepsTo1: 80,
        minStepsTo3: 12,
        blocked: true
    },
    {
        grid: [
            [1,3,0,2,3],
            [0,2,5,1,0],
            [0,0,1,1,0],
            [0,0,2,0,0],
            [3,0,0,0,3],
            [1,0,0,0,1],
            [1,0,0,0,1],
            [1,1,4,1,1],
            [1,1,1,1,1]
        ],
        stars: '0',
        proportionalStepsTo1: 80,
        minStepsTo3: 5,
        blocked: true
    },
    {
        grid: [
            [0,3,0,1,1],
            [0,0,0,4,1],
            [0,0,0,0,1],
            [0,0,0,0,1],
            [0,0,0,0,1],
            [0,0,0,1,1],
            [0,0,1,1,1],
            [2,0,0,5,1],
            [3,0,1,1,1]
        ],
        stars: '0',
        proportionalStepsTo1: 80,
        minStepsTo3: 7,
        blocked: true
    },
    {
        grid: [
            [0,3,2,2,1],
            [0,0,0,0,5],
            [0,0,1,1,1],
            [0,0,0,3,0],
            [1,0,0,0,0],
            [0,2,2,0,4],
            [0,1,0,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0]
        ],
        stars: '0',
        proportionalStepsTo1: 80,
        minStepsTo3: 7,
        blocked: true
    },
    {
        grid: [
            [4,0,0,0,0],
            [0,0,5,0,0],
            [0,0,0,0,1],
            [0,1,0,0,0],
            [0,0,0,0,0],
            [1,0,0,1,0],
            [2,0,0,1,1],
            [1,1,3,2,1],
            [1,1,3,1,1]
        ],
        stars: '0',
        proportionalStepsTo1: 80,
        minStepsTo3: 8,
        blocked: true
    },
    {
        grid: [
            [4,3,0,0,0],
            [0,0,0,0,1],
            [0,0,0,0,3],
            [0,0,5,0,0],
            [0,0,0,1,0],
            [0,0,0,0,0],
            [0,0,2,0,0],
            [0,0,0,0,0],
            [1,0,0,0,1]
        ],
        stars: '0',
        proportionalStepsTo1: 80,
        minStepsTo3: 7,
        blocked: true
    },
    {
        grid: [
            [1,1,1,1,1],
            [1,4,0,1,1],
            [1,1,0,1,1],
            [1,1,2,3,1],
            [1,0,3,2,1],
            [1,0,2,3,1],
            [1,1,3,2,1],
            [1,5,2,0,1],
            [1,1,1,1,1]
        ],
        stars: '0',
        proportionalStepsTo1: 80,
        minStepsTo3: 15,
        blocked: true
    },
    {
        grid: [
            [1,0,0,0,0],
            [1,0,0,0,1],
            [0,0,0,5,1],
            [0,4,0,0,0],
            [0,0,0,0,0],
            [0,0,0,1,0],
            [0,0,0,0,0],
            [0,0,0,2,0],
            [3,0,3,3,1]
        ],
        stars: '0',
        proportionalStepsTo1: 80,
        minStepsTo3: 8,
        blocked: true
    },
    {
        grid: [
            [0,0,0,0,2],
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,1,0,0,0],
            [0,0,5,0,0],
            [0,0,0,0,0],
            [0,0,1,0,2],
            [2,0,0,0,2],
            [4,1,1,1,3]
        ],
        stars: '0',
        proportionalStepsTo1: 80,
        minStepsTo3: 14,
        blocked: true
    },
    {
        grid: [
            [3,0,0,0,2],
            [0,0,0,0,2],
            [0,0,0,0,1],
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,5,0,0],
            [0,0,0,0,4]
        ],
        stars: '0',
        proportionalStepsTo1: 80,
        minStepsTo3: 13,
        blocked: true
    },
    {
        grid: [
            [0,0,0,0,0],
            [0,0,0,0,0],
            [1,0,2,0,0],
            [4,0,3,0,1],
            [1,0,2,0,0],
            [0,0,0,3,2],
            [0,0,0,1,0],
            [0,0,2,5,0],
            [0,2,1,0,0]
        ],
        stars: '0',
        proportionalStepsTo1: 80,
        minStepsTo3: 13,
        blocked: true
    },
    {
        grid: [
            [2,0,0,3,3],
            [3,0,0,0,0],
            [0,0,0,1,0],
            [0,0,0,0,0],
            [0,1,0,0,0],
            [0,0,0,0,0],
            [0,0,5,1,0],
            [1,0,0,0,0],
            [0,0,0,4,0]
        ],
        stars: '0',
        proportionalStepsTo1: 80,
        minStepsTo3: 13,
        blocked: true
    },
    {
        grid: [
            [0,0,0,3,2],
            [0,0,0,0,1],
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,0,0,4],
            [0,0,0,0,0],
            [0,1,0,0,0],
            [0,5,0,0,0],
            [3,0,0,0,0]
        ],
        stars: '0',
        proportionalStepsTo1: 80,
        minStepsTo3: 13,
        blocked: true
    }
];
},{}],3:[function(require,module,exports){
module.exports = {
    maxLevelsPerPage: 9,
    maxLevelsPerRow: 3,
    group: {
        offSetX: 80,
        offSetY: 500
    },
    buttons: {
        offSetX: 40,
        offSetY: 40,
        width: 280,
        height: 280,
        text: {
            x: 145,
            y: 110,
            anchorX: 0.5,
            anchorY: 0.5

        }
    }

}
},{}],4:[function(require,module,exports){
var menuConfig = require('./menu');
var blockConfig = require('./block');
var levelSelectionConfig = require('./levelSelection');
var gameLevel = require('./gameLevel');
module.exports = {
    startLevel: 0,
    rows: 9,
    cols: 5,
    level: gameLevel,
    menu: menuConfig,
    levelSelection: levelSelectionConfig,
    block: blockConfig
};
},{"./block":1,"./gameLevel":2,"./levelSelection":3,"./menu":5}],5:[function(require,module,exports){
module.exports = {
    buttons: {
        play: {
            x: null,//centered to screen using game.width / 2
            y: null,// centered to screen using game.height / 2
            spriteSheet: 'playButton',
            frameName: 'playButton',
            anchorX: 0.5,
            anchorY: 0.5
        },
        mute: {
            x: 1000,
            y: 0,
            spriteSheet: 'muteButton',
            muteOff: 'muteOff',
            muteOn: 'muteOn'
        }
    }
}
},{}],6:[function(require,module,exports){
module.exports = {
    levelSelection: null,
    currentLevel: 0,
    steps: 0
};
},{}],7:[function(require,module,exports){
'use strict';

var BootState = require('./states/boot'),
    PlayState = require('./states/play'),
    MenuState = require('./states/menu'),
    SelectLevelState = require('./states/levelSelection'),
    PreloadState = require('./states/preload'),
    GameOverState = require('./states/game-over'),
    GameSuccesState = require('./states/game-success'),
    game;

window.onload = function () {
    game = new Phaser.Game(1080, 1920, Phaser.CANVAS);

    game.state.add('boot', BootState);
    game.state.add('play', PlayState);
    game.state.add('menu', MenuState);
    game.state.add('levelSelection', SelectLevelState);
    game.state.add('preload', PreloadState);
    game.state.add('gameOver', GameOverState);
    game.state.add('gameSucces', GameSuccesState);

    game.state.start('boot');


    if (!game.events) game.events = {};
};

},{"./states/boot":14,"./states/game-over":15,"./states/game-success":16,"./states/levelSelection":17,"./states/menu":18,"./states/play":19,"./states/preload":20}],8:[function(require,module,exports){
'use strict';
var gameData = require('../gameData/gameData');
var config = require('../config/main');
var Block = function Block(params) {
    //VARS
    var self = this,
        type = params.type,
        width = 180,
        height = 246,
        yOffset = 70,
        currentX = params.x,
        currentY = params.y,
        name = '',
        callback = params.callback,
        rangeArray = [],
        animationIdle,
        animationMove;
    //CONST
    var BLOCKED = 'blocked';
    var HORIZONTAL_BLOCK = 'horizontal';
    var VERTICAL_BLOCK = 'vertical';

    var intervalCustom;

    var angrySound = params.game.add.audio('angrySound', 0.6);
    //public
    this.orientation = type;
    this.col = params.col;
    this.row = params.row;

    var win = function win(callback) {
        setTimeout(function() {
            self.exitDoorAnimSprite = self.game.add.sprite(self.x, self.y + 30, 'win');
            //self.exitDoorAnimSprite.anchor.set(0.5);
            self.exitDoorWinAnim = self.exitDoorAnimSprite.animations.add('win', Phaser.Animation.generateFrameNames('exitdoor', 7, 12, '', 2),6, false);
            self.exitDoorWinAnim.onComplete.add(callback);
            self.exitDoorWinAnim.play();
        }, 300);
    };

    var createBlock = function createBlock() {
        if (type === BLOCKED) {
            var randomNum = params.game.rnd.integerInRange(0, 100);
            if (randomNum < 80) {
                Phaser.Sprite.call(self, params.game, params.x, params.y - yOffset, config.block.aspects[0]);
            } else {
                var spriteIndex = params.game.rnd.integerInRange(1, (config.block.aspects.length - 1));
                Phaser.Sprite.call(self, params.game, params.x, params.y - yOffset, config.block.aspects[spriteIndex]);
            }

        } else {
            Phaser.Sprite.call(self, params.game, params.x, params.y - yOffset, type);

        }
        params.parent.addChild(self);


        if (self.orientation === 'win') {
            self.exitDoorIdleAnim = self.animations.add('idle', Phaser.Animation.generateFrameNames('exitdoor', 1, 6, '', 2), 24, true);
            self.exitDoorIdleAnim.play();
            self.game.winGameSignal.add(win);
        }
    };

    var initAnimations = function initAnimations() {
        animationIdle = self.animations.add('idle', Phaser.Animation.generateFrameNames('enemy_idle', 1, 65, '', 4), 24);

        animationMove = self.animations.add('moveHorizontal', Phaser.Animation.generateFrameNames('enemy_move', 1, 65, '', 4), 24);

        animationIdle.play();
        intervalCustom = setInterval(function () {
            animationIdle.play()
        }, 3900);
    };

    var initBlockMovement = function initBlockMovement() {
        if (type === HORIZONTAL_BLOCK) {
            self.inputEnabled = true;
            self.input.allowVerticalDrag = false;
            self.events.onDragStop.add(onDragStop, this);
            self.events.onDragStart.add(function () {
                angrySound.play();
                animationMove.play();
            }, this);
        } else if (type === VERTICAL_BLOCK) {
            self.inputEnabled = true;
            self.input.allowHorizontalDrag = false;
            self.events.onDragStop.add(onDragStop, this);
            self.events.onDragStart.add(function () {
                animationMove.play();
                angrySound.play();
            }, this);

        }
    };

    var init = function init() {
        createBlock();
        if (self.orientation === HORIZONTAL_BLOCK || self.orientation === VERTICAL_BLOCK) {
            initAnimations();
        }
        initBlockMovement();
        self.game.events.onShutdown.add(function () {
            intervalCustom && clearInterval(intervalCustom);
        });
    };

    var getFixedPosition = function getFixedPosition(userDragPos) {
        var finalPos;
        for (var i = 0; i < rangeArray.length; i++) {
            if (userDragPos >= rangeArray[i] && userDragPos < rangeArray[i + 1]) {
                if (Math.abs(rangeArray[i + 1] - userDragPos) < Math.abs(rangeArray[i] - userDragPos)) {
                    finalPos = rangeArray[i + 1];
                } else {
                    finalPos = rangeArray[i];
                }
            }
        }
        if (!finalPos) {
            finalPos = rangeArray[rangeArray.length - 1];
        }
        return finalPos;
    };


    var onDragStop = function onDragStop(box) {
        var distance,
            fixedPos;

        if (type === HORIZONTAL_BLOCK) {
            fixedPos = getFixedPosition(box.x);
            distance = fixedPos - currentX;
            currentX = fixedPos;
            box.x = fixedPos;
            callback(self, distance);
            intervalCustom = setInterval(function () {
                animationIdle.play()
            }, 3900);
        } else if (type === VERTICAL_BLOCK) {
            fixedPos = getFixedPosition(box.y + yOffset);
            distance = fixedPos - currentY;
            currentY = fixedPos;
            box.y = fixedPos - yOffset;
            callback(self, distance);
            intervalCustom = setInterval(function () {
                animationIdle.play()
            }, 3900);
        }

        gameData.steps++;
    };

    var updateRangeArray = function updateRangeArray(firstPos, range) {
        var rangeLength = range / width;
        var acum = firstPos;
        for (var i = 0; i < rangeLength; i++) {
            rangeArray.push(acum);
            acum += width;
        }
    };

    this.updateBoundReferences = function updateBoundReferences(bounds) {
        if (type === HORIZONTAL_BLOCK) {
            var floor = new Phaser.Rectangle(currentX - bounds.initPos, currentY - yOffset, bounds.range, height);
            self.input.enableDrag(false, false, false, 255, floor);
            self.events.onDragStart.add(function () {
                clearInterval(intervalCustom);
            });
            self.input.allowVerticalDrag = false;
            updateRangeArray(currentX - bounds.initPos, bounds.range);
        } else if (type === VERTICAL_BLOCK) {
            var floor = new Phaser.Rectangle(currentX, currentY - bounds.initPos, width, bounds.range);
            self.input.enableDrag(false, false, false, 255, floor);
            self.events.onDragStart.add(function () {
                clearInterval(intervalCustom);
            });
            self.input.allowVerticalDrag = true;
            updateRangeArray(currentY - bounds.initPos, bounds.range);
        }

    };
    init();
};


Block.prototype = Object.create(Phaser.Sprite.prototype);
Block.prototype.constructor = Block;

module.exports = Block;

},{"../config/main":4,"../gameData/gameData":6}],9:[function(require,module,exports){
'use strict';
var gameData = require('../gameData/gameData');
var Character = function Character(params) {

    var self = this,
        yOffset = 70;

    this.col = params.col;
    this.row = params.row;

    var possibleMovements;

    var happySound2 = params.game.add.audio('happySound2', 0.6);
    var happySound3 = params.game.add.audio('happySound3', 0.6);

    var sounds = [happySound2, happySound3];
    var dieSound = params.game.add.audio('dieSound', 0.6);
    var currentHappySound;
    var animationIdle, animationHorizontal, animationDown, animationUp;

    this.canMove = true;

    Phaser.Sprite.call(this, params.game, params.x, params.y - yOffset, params.name, 0);

    var winTween = this.game.add.tween(this)
        .to({alpha: 0}, 10, Phaser.Easing.Linear.None);



    var win = function win () {
        setTimeout(function() {
            winTween.start();

        }, 500);
    };

    this.game.winGameSignal.add(win);



    var initAnimations = function initAnimations() {
        animationIdle = self.animations.add('idle', Phaser.Animation.generateFrameNames('pj_idle', 1, 92, '', 4), 24, true);

        animationHorizontal = self.animations.add('moveHorizontal', Phaser.Animation.generateFrameNames('pj_right', 1, 92, '', 4));
        animationHorizontal.onComplete.add(function() {
           animationIdle.play();
        });
        animationDown = self.animations.add('moveDown', Phaser.Animation.generateFrameNames('pj_front', 1, 25, '', 4));
        animationDown.onComplete.add(function() {
           animationIdle.play();
        });
        animationUp = self.animations.add('moveUp', Phaser.Animation.generateFrameNames('pj_up', 1, 25, '', 4));
        animationUp.onComplete.add(function() {
           animationIdle.play();
        });

        animationIdle.play('idle');
    };

    var init = function init() {
        initAnimations();
        self.orientation = 'character';
        params.parent.addChild(self);
        self.inputEnabled = true;
    };

    var move = function move(direction) {
        var tween;
        var speed = 1.5,
            deathSpeed = 1.5,
            deathOffset = 300,
            posTo = 0,
            distance = 0,
            hasDeadTween = false;

        self.canMove = false;

        var random = self.game.rnd.integerInRange(0, 1);
        sounds[random].play();
        currentHappySound = sounds[random];
        if (direction === 'up') {
            posTo = self.y - (possibleMovements.up * 180);
            distance = posTo - self.y;

            animationUp.play(30);
            if (possibleMovements.upDeath) {
                distance = posTo - deathOffset - self.y;
                tween = self.game.add.tween(self).to({y: posTo - deathOffset}, Math.abs(distance - deathOffset / deathSpeed), Phaser.Easing.Linear.None);
                hasDeadTween = true;
            } else {
                tween = self.game.add.tween(self).to({y: posTo}, Math.abs(distance / speed), Phaser.Easing.Linear.None);
            }


        } else if (direction === 'down') {
            posTo = self.y + possibleMovements.down * 180;
            distance = posTo - self.y;
            animationDown.play(30);

            if (possibleMovements.downDeath) {
                tween = self.game.add.tween(self).to({y: posTo + deathOffset}, Math.abs(distance - deathOffset / deathSpeed), Phaser.Easing.Linear.None);
                hasDeadTween = true;
            } else {
                tween = self.game.add.tween(self).to({y: posTo}, Math.abs(distance / speed), Phaser.Easing.Linear.None);
            }

        } else if (direction === 'left') {
            posTo = self.x - (possibleMovements.left * 180);
            distance = posTo - self.x;
            animationHorizontal.play(30);

            if (possibleMovements.leftDeath) {
                tween = self.game.add.tween(self).to({x: posTo - deathOffset}, Math.abs(distance - deathOffset / deathSpeed), Phaser.Easing.Linear.None);
                hasDeadTween = true;
            } else {
                tween = self.game.add.tween(self).to({x: posTo}, Math.abs(distance / speed), Phaser.Easing.Linear.None);
            }

        } else if (direction === 'right') {
            posTo = self.x + possibleMovements.right * 180;
            distance = posTo - self.x;
            animationHorizontal.play(30);
            if (possibleMovements.rightDeath) {
                tween = self.game.add.tween(self).to({x: posTo + deathOffset}, Math.abs(distance - deathOffset / deathSpeed), Phaser.Easing.Linear.None);
                hasDeadTween = true;
            } else {
                tween = self.game.add.tween(self).to({x: posTo}, Math.abs(distance / speed), Phaser.Easing.Linear.None);
            }
        }

        if(hasDeadTween) {
            tween.onComplete.add(function(){
                setTimeout(function() {
                    var cameraTween = self.game.add.tween(self.game.camera)
                        .to({x: 5,y: 5}, 20)
                        .to({x: 15,y: 15}, 20)
                        .to({x: -5, y:-5}, 20)
                        .to({x: 25,y: 25}, 20)
                        .to({x: 1,y: 5}, 20)
                        .to({x: 5, y:-5}, 20)
                        .to({x: 15,y: 5}, 20);

                    cameraTween.start();
                    currentHappySound.stop();
                    dieSound.play();
                    setTimeout(params.resetGame, 500);
                }, 200);
            });
        }

        if (Math.abs(distance) > 0) {
            tween.onComplete.add(function () {
                self.canMove = true;
                params.callback(self, distance, direction);
            });
            tween.start();
        } else {
            self.canMove = true;
        }
        gameData.steps++;
    };

    this.updatePosition = function updatePosition(params) {
        possibleMovements = params;
        this.leftDeath = params.leftDeath;
        this.rightDeath = params.rightDeath;
        this.upDeath = params.upDeath;
        this.downDeath = params.downDeath;
    };

    var listenSwipe = function listenSwipe(callback) {
        var eventDuration;
        var startPoint = {};
        var endPoint = {};
        var direction;
        var minimum = {
            duration: 75,
            distance: 150
        };

        self.game.input.onDown.add(function (pointer) {
            if (pointer.x >= self.x && pointer.x < self.x + 180 && pointer.y >= self.y && pointer.y < self.y + 180) {
                startPoint.x = pointer.x;
                startPoint.y = pointer.y;
            }
        }, self);


        self.game.input.onUp.add(function (pointer) {
            direction = '';
            eventDuration = self.game.input.activePointer.duration;

            if (eventDuration > minimum.duration && startPoint.x !== 0) {
                endPoint.x = pointer.x;
                endPoint.y = pointer.y;

                // Check direction
                if (endPoint.x - startPoint.x > minimum.distance) {
                    direction = 'right';
                } else if (startPoint.x - endPoint.x > minimum.distance) {
                    direction = 'left';
                } else if (endPoint.y - startPoint.y > minimum.distance) {
                    direction = 'down';
                } else if (startPoint.y - endPoint.y > minimum.distance) {
                    direction = 'up';
                }


                startPoint.x = 0;
                startPoint.y = 0;

                if (direction) {
                    callback(direction);
                }
            }
        }, self);
    };

    listenSwipe(function (direction) {
        self.canMove && move(direction);
    });

    init();
};


Character.prototype = Object.create(Phaser.Sprite.prototype);
Character.prototype.constructor = Character;

module.exports = Character;

},{"../gameData/gameData":6}],10:[function(require,module,exports){
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

    var createBlock = function createBlock(col, row) {
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
            if (block.row === 0) {
                upDeath = true;
                upMovement = 1;

            }
            if (block.row === config.rows - 1) {
                downDeath = true;
                downMovement = 1;
            }
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
            if (block.col === 0) {
                leftDeath = true;
                leftMovement = 1;
            }

            if (block.col === config.cols - 1) {
                rightDeath = true;
                rightMovement = 1;
            }

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
                        block.hasWinHorizontal = false;
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
                    rightMovement++;
                    break;
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
                if (newPosition >= 0 && newPosition <= 4) {
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
                if (newPosition >= 0  && newPosition <= 8) {
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
            var win = self.game.add.audio('win', 0.6);
            win.play();
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

},{"../config/main":4,"../gameData/gameData":6,"./Block":8,"./Character":9}],11:[function(require,module,exports){
'use strict';
var config = require('../config/main');

var HistoryBoard = function HistoryBoard(params) {
    Phaser.Group.call(this, params.game, params.x, params.y, params.name);
    var self = this;

    var init = function init() {
        self.menuBg = [
            self.game.add.sprite(0,0,'intro1'),
            self.game.add.sprite(0,0,'intro2'),
            self.game.add.sprite(0,0,'intro3'),
            self.game.add.sprite(0,0,'intro4')
        ];


        self.menuBg.forEach(function(item) {
            item.visible = false;
            item.inputEnabled = true;
            self.add(item);
        });

        self.menuBg[0].visible = true;


        self.closeButton = self.game.add.button(940, 1750, 'endButtons', function(){
            self.visible = false;
            clearInterval(changer);
            self.historyMusic.fadeOut(500);
            params.callback();

        }, self, 'next_off', 'next_off', 'next_on');

        self.game.add.tween(self.closeButton.scale)
            .to({x: 0.8, y: 0.8}, 1450, Phaser.Easing.Cubic.InOut, true, 0, -1, true);
        self.historyMusic = self.game.add.sound('historySound', 0.1, true);
        self.historyMusic.fadeIn(1000);
        var index = 1;
        var changer = setInterval(function(){
            if(index === 4){
                self.visible = false;
                self.menuBg.forEach(function(item) {
                    item.inputEnabled = false;
                });
                self.menuBg.inputEnabled = false;
                self.historyMusic.stop();
                params.callback();
                clearInterval(changer);
            } else {
                self.menuBg.forEach(function(item, frame) {
                    item.visible = index === frame;
                });
            }
            index++;

        }, 4000);
        self.closeButton.anchor.set(0.5);
        self.add(self.closeButton);
    };

    init();
};


HistoryBoard.prototype = Object.create(Phaser.Group.prototype);
HistoryBoard.prototype.constructor = HistoryBoard;

module.exports = HistoryBoard;
},{"../config/main":4}],12:[function(require,module,exports){
'use strict';
var config = require('../config/main');

var Menu = function Menu(params) {
    Phaser.Group.call(this, params.game, params.game.world, params.name);
    var self = this;
    var init = function init() {
        self.buttonStarter = params.buttonStarter;
        self.menuBg = self.game.add.sprite(0,0,'bgPopup');
        self.menuBg.inputEnabled = true;
        self.add(self.menuBg);
        self.soundButton = self.game.add.button(30, 1150, 'gameButtons', function () {
            self.game.sound.mute = true;
            self.soundButton.visible = false;
            self.muteButton.visible = true;
        }, this, 'sound_enabled_off', 'sound_enabled_off', 'sound_enabled_on', 'sound_enabled_off');
        self.add(self.soundButton);

        self.buttonInfo = self.game.add.button(30, 1650, 'gameButtons', function(){
            self.visible = false;
            self.buttonInfo.visible = false;
            self.buttonInfo.inputEnabled = false;
            self.buttonStarter.visible = true;
            self.buttonStarter.inputEnabled = true;
            params.replayButton.inputEnabled = true;

        }, this, 'pause_off', 'pause_off', 'pause_on');
        self.add(self.buttonInfo);

        self.levelButton = self.game.add.button(30, 1400, 'gameButtons', function () {
            self.visible = false;
            self.game.state.start('levelSelection');
        }, this, 'levels_off', 'levels_off', 'levels_on', 'levels_off');
        self.add(self.levelButton);

        self.muteButton = self.game.add.button(30, 1150, 'gameButtons', function () {
            self.game.sound.mute = false;
            self.soundButton.visible = true;
            self.muteButton.visible = false;
        }, this, 'sound_disabled_off', 'sound_disabled_off', 'sound_disabled_on', 'sound_disabled_off');//'gameButtons', 'sound_disabled_off'
        self.add(self.muteButton);

        if (!self.game.sound.mute) {
            self.muteButton.visible = false;
        } else {
            self.soundButton.visible = false;
        }
    };

    init();
};


Menu.prototype = Object.create(Phaser.Group.prototype);
Menu.prototype.constructor = Menu;

module.exports = Menu;

},{"../config/main":4}],13:[function(require,module,exports){
'use strict';
var config = require('../config/main');

var Tutorial = function Tutorial(params) {
    Phaser.Group.call(this, params.game, params.game.world, params.name);
    var self = this;

    var currentPage = 1;
    var init = function init() {
        self.menuBg = self.game.add.sprite(0,0,'bgPopup');
        self.menuBg.inputEnabled = true;
        self.add(self.menuBg);

        var firstPage = params.firstPage ? params.firstPage : 'tutorial_01';

        self.tutoImg = self.game.add.sprite(self.game.width/2,900,'tutorial', firstPage);
        self.tutoImg.inputEnabled = true;
        self.tutoImg.anchor.set(0.5);
        self.add(self.tutoImg);

        self.closeButton = self.game.add.button(900, 550, 'tutorial', function(){
            self.visible = false;
        }, self, 'close_off', 'close_off', 'close_on');
        self.closeButton.anchor.set(0.5);

        self.add(self.closeButton);

        var initPagination = function initPagination() {
            self.previousButton = self.game.add.button(300, 1500, 'tutorial', function () {
                currentPage = currentPage <= 1 ? 4 : currentPage - 1;

                self.tutoImg.frameName = 'tutorial_0' + currentPage;
            }, self, 'left_off', 'left_off', 'left_on', 'left_off');
            self.previousButton.anchor.set(0.5);

            self.add(self.previousButton);

            self.nextButton = self.game.add.button(800, 1500, 'tutorial', function () {
                currentPage = currentPage >= 4 ? 1 : currentPage + 1;
                self.tutoImg.frameName = 'tutorial_0' + currentPage;
            }, self, 'right_off', 'right_off', 'right_on', 'right_off');
            self.nextButton.anchor.set(0.5);
            self.add(self.nextButton);
        };

        params.havePagination && initPagination();
        self.visible = false;
    };

    init();
};


Tutorial.prototype = Object.create(Phaser.Group.prototype);
Tutorial.prototype.constructor = Tutorial;

module.exports = Tutorial;

},{"../config/main":4}],14:[function(require,module,exports){
'use strict';



function Boot() {
}

Boot.prototype = {
    preload: function(){
        this.load.image('loadBg', 'assets/images/bg_loading.jpg');
        this.load.image('loadTitle', 'assets/images/loading_title.png');
    },
    create: function () {
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.pageAlignVertically = true;
        this.game.scale.pageAlignHorizontally = true;


        this.game.state.start('preload');
    }
};

module.exports = Boot;

},{}],15:[function(require,module,exports){
'use strict';

var config = require('../config/main');
var gameData = require('../gameData/gameData');
function GameOver() {
}

GameOver.prototype = {
    preload: function () {

    },
    create: function () {
        this.initBackground();
        this.initAngryFlan();
        this.initLoseText();
        this.initButtons();
        gameData.steps = 0;
    },

    initButtons: function initButtons() {
        var replayButton = this.game.add.button(570, 1400, 'endButtons', function () {
            this.game.state.start('play');
        }, this, 'replay_off', 'replay_off', 'replay_on');

        var levelButton = this.game.add.button(295, 1400, 'endButtons', function () {
            this.game.state.start('levelSelection');
        }, this, 'levels_off', 'levels_off', 'levels_on');
    },

    initBackground: function initBackground() {
        var background = this.game.add.sprite(0, 0, 'backgroundGameOver');
    },

    initAngryFlan: function initAngryFlan() {
        var looser = this.game.add.audio('gameOverSound', 0.6);
        looser.play();

        var angryFlan = this.game.add.sprite(300, 550, 'loseAnim', 0);
        var anim = angryFlan.animations.add();
        anim.play(24, true);
    },

    initLoseText: function initAngryFlan() {
        var style = {font: "bold 120px creamreg", fill: "#ff6ba0"};
        this.stars = this.game.add.text(240, 1170, 'YOU LOSE!', style);
    }
};

module.exports = GameOver;

},{"../config/main":4,"../gameData/gameData":6}],16:[function(require,module,exports){
'use strict';

var config = require('../config/main');
var gameData = require('../gameData/gameData');
function GameSuccess() {
}

GameSuccess.prototype = {
    preload: function () {

    },
    create: function () {
        if (gameData.comingSoon) {
            this.initBackground();
            this.initComingSoon();
            this.initHappyFlan();
            this.initComingSoonButtons();
            gameData.comingSoon = false;
        } else {
            this.initBackground();
            this.initStars();
            this.initHappyFlan();
            this.initButtons();
        }
    },

    initButtons: function initButtons() {
        var levelButton = this.game.add.button(155, 1400, 'endButtons', function () {
            this.game.state.start('levelSelection');
        }, this, 'levels_off', 'levels_off', 'levels_on');

        var replayButton = this.game.add.button(430, 1400, 'endButtons', function () {
            gameData.currentLevel--;
            this.game.state.start('play');
        }, this, 'replay_off', 'replay_off', 'replay_on');


        var nextButton = this.game.add.button(705, 1400, 'endButtons', function () {
            console.log('NEXT')
                if (gameData.currentLevel < config.level.length) {
                    this.game.state.start('play');
                } else {
                    console.log('NEXT is correct')

                    gameData.comingSoon = true;
                    this.game.state.start('gameSucces');

                }
        }, this, 'next_off', 'next_off', 'next_on');


    },

    initComingSoonButtons: function initComingSoonButtons() {
        var levelButton = this.game.add.button(this.game.width/2 - 150, 1400, 'endButtons', function () {
            this.game.state.start('levelSelection');
        }, this, 'levels_off', 'levels_off', 'levels_on');
        levelButton.anchor.x = 0.5;
        var replayButton = this.game.add.button(this.game.width/2 + 150, 1400, 'endButtons', function () {
            gameData.currentLevel--;
            this.game.state.start('play');
        }, this, 'replay_off', 'replay_off', 'replay_on');
        replayButton.anchor.x = 0.5;

    },

    initComingSoon: function initComingSoon() {
        var style = {font: "bold 80px creamreg", fill: "#ff6ba0"};
        this.comingSoon = this.game.add.text(this.game.width/2, 400, 'More levels COMING SOON!', style);
        this.comingSoon.anchor.x = 0.5;
    },

    initBackground: function initBackground() {
        var background = this.game.add.sprite(0, 0, 'backgroundWin');
    },

    initHappyFlan: function initHappyFlan() {
        var happyFlan = this.game.add.sprite(300, 600, 'winAnim', 0);
        var anim = happyFlan.animations.add();
        anim.play(24, true);
    },

    initStars: function initStars() {
        var starFrame = gameData.levelSelection[gameData.currentLevel - 1].currentStars;
        var stars = this.game.add.sprite(100, 240, 'endStarts', 'stars0');
        var starSound = this.game.add.audio('starSound', 0.6);

        if (starFrame > 0) {
            setTimeout(function () {
                stars.frameName = 'stars1';
                starSound.play();
            }, 500);
        }
        if (starFrame > 1) {
            setTimeout(function () {
                stars.frameName = 'stars2';
                starSound.play();
            }, 1000);
        }
        if (starFrame > 2) {
            setTimeout(function () {
                stars.frameName = 'stars3';
                starSound.play();
            }, 1500);
        }

    },

    initLoseText: function initAngryFlan() {
        var style = {font: "bold 120px creamreg", fill: "#ff6ba0"};
        this.stars = this.game.add.text(240, 1170, 'YOU LOSE!', style);
    }
};

module.exports = GameSuccess;

},{"../config/main":4,"../gameData/gameData":6}],17:[function(require,module,exports){
'use strict';
var gameData = require('../gameData/gameData');
var config = require('../config/main');
function SelectLevel() {
}

SelectLevel.prototype = {
    preload: function () {

    },

    create: function () {
        this.initBackgroud();
        this.initMenu();
        this.initPageManager();
        this.initHeader();
        this.currentPage = 0;
        gameData.steps = 0;
        this.loopSound = this.game.add.audio('openSound', 0.1, true);
        this.loopSound.play();
    },
    initBackgroud: function initBackgroun() {
        this.background = this.game.add.sprite(0, 0, 'bgLevelsSelector');
    },

    calculatePuntuation: function calculatePuntuation() {
        var puntuation = gameData.levelSelection.reduce(function (previous, current) {
            return previous + parseInt(current.stars);
        }, 0);
        var globalPuntuation = gameData.levelSelection.length * 3;

        return {global: globalPuntuation, puntuation: puntuation};
    },

    initHeader: function initHeader() {
        this.homeButton = this.game.add.button(10, 4, 'homeButton', this.goHome, this, 'home_off', 'home_off', 'home_on', 'home_off');
        var style = {font: "120px creamreg", fill: "#ffffff", wordWrap: true};
        var myPuntuationData = this.calculatePuntuation();
        this.stars = this.game.add.text(850, 30, myPuntuationData.puntuation + '/' + myPuntuationData.global, style);
        this.stars.setShadow(3, 3, 'rgba(0,0,0,1)', 5);
        this.stars.anchor.x = 1;
    },

    goHome: function goHome() {
        this.loopSound.stop();
        this.game.state.start('menu');
    },

    initPageManager: function () {
        this.pageManager = this.game.add.group();
        this.leftButton = this.game.add.button(180, 1658, 'pageButtons', this.goBackPage, this, 'left_off', 'left_off', 'left_on', 'left_off');
        this.rightButton = this.game.add.button(650, 1658, 'pageButtons', this.goNextPage, this, 'right_off', 'right_off', 'right_on', 'right_off');
        if (this.totalPages === 1) {
            this.rightButton.alpha = 0.5;
        }
        this.leftButton.alpha = 0.5;
    },

    goNextPage: function () {
        if (this.currentPage < (this.totalPages - 1)) {
            this.levels[this.currentPage].visible = false;
            this.currentPage = this.currentPage + 1;
            this.levels[this.currentPage].visible = true;
            this.rightButton.alpha = 1;
            this.leftButton.alpha = 1;
            if ((this.currentPage + 1) === (this.totalPages)) {
                this.rightButton.alpha = 0.5;
            }
        }
    },

    goBackPage: function () {
        if (this.currentPage > 0) {
            this.levels[this.currentPage].visible = false;
            this.currentPage = this.currentPage - 1;
            this.levels[this.currentPage].visible = true;
            this.leftButton.alpha = 1;
            this.rightButton.alpha = 1;

            if (this.currentPage === 0) {
                this.leftButton.alpha = 0.5;
            }
        }
    },
    getLevelInfoFromLocalStorage: function () {
        for (var i = 0; i < gameData.levelSelection.length; i++) {

            if (typeof(Storage) !== "undefined") {
                if (localStorage['level' + i + '-stars']){
                    gameData.levelSelection[i].stars = localStorage['level' + i + '-stars'];

                }
                if (localStorage['level' + i]) {
                    gameData.levelSelection[i].blocked = localStorage['level' + i].blocked;
                }
            }
        }

    },


    initMenu: function () {
        this.levels = [];
        this.totalPages = gameData.levelSelection.length / config.levelSelection.maxLevelsPerPage;
        for (var i = 0; i < this.totalPages; i++) {
            this.levels[i] = this.game.add.group();
            this.levels[i].visible = false;
        }
        var pagIndex = 0;
        var levelIndex = 0;
        var ceilIndex = 0
        var rowIndex = 0
        var self = this;

        this.getLevelInfoFromLocalStorage();

        gameData.levelSelection.forEach(function (levelConfig, index) {
            if (ceilIndex === config.levelSelection.maxLevelsPerRow) {
                ceilIndex = 0;
                rowIndex++;
            }
            var levelButton = self.initLevelButton(levelConfig, index, ceilIndex, rowIndex);
            self.levels[pagIndex].add(levelButton);

            levelIndex++;
            ceilIndex++;
            if (levelIndex === (config.levelSelection.maxLevelsPerPage * (pagIndex + 1))) {
                pagIndex++;
                ceilIndex = 0;
                rowIndex = 0;
            }
        });
        this.levels[0].visible = true;
    },

    getPosition: function getPosition(ceilIndex, rowIndex) {
        var levelSelectionConfig = config.levelSelection;
        var x;
        if (ceilIndex === 0) {
            x = levelSelectionConfig.group.offSetX;
        } else if (ceilIndex === 1) {
            x = (levelSelectionConfig.buttons.width + levelSelectionConfig.buttons.offSetX + levelSelectionConfig.group.offSetX) * ceilIndex;
        } else {
            x = (levelSelectionConfig.buttons.width + (levelSelectionConfig.buttons.offSetX * 2)) * ceilIndex;
        }

        var y;
        if (rowIndex === 0) {
            y = levelSelectionConfig.group.offSetY;
        } else {
            y = levelSelectionConfig.group.offSetY + ((levelSelectionConfig.buttons.height + levelSelectionConfig.buttons.offSetY) * rowIndex);
        }

        return {x: x, y: y};
    },

    initLevelButton: function initLevelButton(levelConfig, levelIndex, ceilIndex, rowIndex) {
        var positions = this.getPosition(ceilIndex, rowIndex);
        var buttonGp = this.game.add.group();
        var textConfig = config.levelSelection.buttons.text;
        var callback = function () {
            gameData.currentLevel = levelIndex;
            this.loopSound.stop();
            this.game.state.start('play');
        };
        var frameName;
        if (!levelConfig.blocked) {
            frameName = 'level_buttons_' + levelConfig.stars;
        } else {
            frameName = 'level_buttons_blocked';
        }
        var buttonSprite = this.game.add.button(positions.x, positions.y, 'levelButtons', callback, this, null, frameName);//+ levelConfig.stars
        var style = {font: "122px creamreg", fill: "#7B441A", wordWrap: true};

        var buttonText = this.game.add.text(positions.x + textConfig.x, positions.y + textConfig.y, levelIndex+1, style);
        buttonText.anchor.set(textConfig.anchorX, textConfig.anchorY);
        buttonGp.add(buttonSprite);
        buttonGp.add(buttonText);

        buttonSprite.input.enabled = !levelConfig.blocked;
        buttonText.visible = !levelConfig.blocked;

        return buttonGp;
    }
};

module.exports = SelectLevel;

},{"../config/main":4,"../gameData/gameData":6}],18:[function(require,module,exports){
'use strict';

var config = require('../config/main');
var gameData = require('../gameData/gameData');
var Tutorial = require('../modules/Tutorial');
function Menu() {
}

Menu.prototype = {
    preload: function () {

    },
    create: function () {
        var self = this;
        gameData.steps = 0;
        this.loopSound = this.game.add.audio('openSound', 0.1, true);
        this.loopSound.play();
        var openInfo = function openInfo() {
            self.tutorial.visible = true;
        };


        var initButtonInfo = function initButtonInfo() {
            self.buttonInfo = self.game.add.button(120, 1800, 'homeButtons', function(){
                openInfo();
            }, self, 'info_off', 'info_off', 'info_on');//'pause_off'
            self.buttonInfo.anchor.set(0.5);

            self.buttonInfo.anchor.set(config.menu.buttons.play.anchorX, config.menu.buttons.play.anchorY);
            self.buttonInfo.scale.set(0.5);
            self.buttonInfo.alpha = 0;
            self.game.add.tween(self.buttonInfo.scale)
                .to({x: 1}, 800, Phaser.Easing.Cubic.InOut, true);
            self.game.add.tween(self.buttonInfo.scale)
                .to({y: 1}, 800, Phaser.Easing.Cubic.InOut, true);
            self.game.add.tween(self.buttonInfo)
                .to({alpha: 1}, 800, Phaser.Easing.Cubic.InOut, true);

        };

        var initPlay = function initPlay() {
            self.playButton.anchor.set(0.5);
            self.playButton.scale.set(0.5);
            self.playButton.alpha = 0;
            self.game.add.tween(self.playButton.scale)
                .to({x: 1}, 800, Phaser.Easing.Cubic.InOut, true);
            self.game.add.tween(self.playButton.scale)
                .to({y: 1}, 800, Phaser.Easing.Cubic.InOut, true);
            self.game.add.tween(self.playButton)
                .to({alpha: 1}, 800, Phaser.Easing.Cubic.InOut, true);
        };

        var initSound = function initSound() {
            self.soundButton = self.game.add.button(self.game.width - 120, 1800, 'gameButtons', function () {
                self.game.sound.mute = true;
                self.soundButton.visible = false;
                self.muteButton.visible = true;

            }, self, 'sound_enabled_off', 'sound_enabled_off', 'sound_enabled_on', 'sound_enabled_off');//'sound_enabled_off')

            self.soundButton.anchor.set(config.menu.buttons.play.anchorX, config.menu.buttons.play.anchorY);
            self.soundButton.scale.set(0.5);
            self.soundButton.alpha = 0;
            self.game.add.tween(self.soundButton.scale)
                .to({x: 1}, 800, Phaser.Easing.Cubic.InOut, true);
            self.game.add.tween(self.soundButton.scale)
                .to({y: 1}, 800, Phaser.Easing.Cubic.InOut, true);
            self.game.add.tween(self.soundButton)
                .to({alpha: 1}, 800, Phaser.Easing.Cubic.InOut, true);

            self.muteButton = self.game.add.button(self.game.width - 120, 1800, 'gameButtons', function () {
                self.game.sound.mute = false;
                self.soundButton.visible = true;
                self.muteButton.visible = false;
            }, self, 'sound_disabled_off', 'sound_disabled_off', 'sound_disabled_on', 'sound_disabled_off');//'gameButtons', 'sound_disabled_off'

            self.muteButton.anchor.set(config.menu.buttons.play.anchorX, config.menu.buttons.play.anchorY);
            self.muteButton.scale.set(0);
            self.muteButton.visible = self.game.sound.mute;
            self.game.add.tween(self.muteButton.scale)
                .to({x: 1}, 800, Phaser.Easing.Cubic.InOut, true);
            self.game.add.tween(self.muteButton.scale)
                .to({y: 1}, 800, Phaser.Easing.Cubic.InOut, true);
            self.game.add.tween(self.soundButton.scale)
                .to({x: 1}, 800, Phaser.Easing.Cubic.InOut, true);
            self.game.add.tween(self.soundButton.scale)
                .to({y: 1}, 800, Phaser.Easing.Cubic.InOut, true);
            self.soundButton.visible = !self.game.sound.mute;
        };

        this.initBackground();


        self.playButton = self.game.add.button(self.game.width /2, self.game.height / 2 - 140, 'homeButtons', self.start, self, 'big_play_off', 'big_play_off', 'big_play_on');
        self.playButton.alpha = 0;

        setTimeout(initPlay, 450);
        setTimeout(initButtonInfo, 500);
        setTimeout(initSound, 750);
        this.initHappyFlan();
        this.title = this.game.add.sprite(this.game.width/2, 360, 'titleGame');
        this.title.anchor.set(0.5);
        this.title.scale.set(0.2);
        this.title.alpha = 0;

        this.game.add.tween(this.title.scale)
            .to({x: 1}, 800, Phaser.Easing.Cubic.InOut, true);
        this.game.add.tween(this.title.scale)
            .to({y: 1}, 800, Phaser.Easing.Cubic.InOut, true);
        this.game.add.tween(this.title)
            .to({alpha: 1}, 800, Phaser.Easing.Cubic.InOut, true);
        var tween = this.game.add.tween(this.title)
            .to({rotation: 0.1}, 1000, Phaser.Easing.Cubic.InOut, true, 0, -1, true);
        tween.start();

        this.tutorial = new Tutorial({
            x: 0,
            y: 0,
            game: this.game,
            name: 'Tutorial',
            havePagination: true
        });
    },

    initBackground: function initBackground(){
        var background = this.game.add.sprite(0,0, 'bgHome');

    },

    initHappyFlan: function initHappyFlan() {
        var happyFlan = this.game.add.sprite(this.game.width/2, 1200, 'winAnim', 0);
        var anim = happyFlan.animations.add();
        happyFlan.anchor.x = 0.5;
        anim.play(24, true);
    },

    start: function () {
        this.loopSound.stop();
        this.game.state.start('levelSelection');
    }
};

module.exports = Menu;

},{"../config/main":4,"../gameData/gameData":6,"../modules/Tutorial":13}],19:[function(require,module,exports){
'use strict';
var Block = require('../modules/Block');
var Grid = require('../modules/Grid');
var Menu = require('../modules/Menu');
var Tutorial = require('../modules/Tutorial');
var HistoryBoard = require('../modules/HistoryBoard');
var gameData = require('../gameData/gameData');

function Play() {
}

Play.prototype = {
    create: function () {

        var self = this;
        gameData.steps = 0;
        var setBackground = function setBackground() {
            var interval = 10;
            self.bgBase = self.game.add.sprite(0, 0, 'bgBase' + Math.floor((gameData.currentLevel + 1)/interval + 1));
        };

        var isLevelWithTutorial = function isLevelWithTutorial(){
            return gameData.currentLevel === 0 || gameData.currentLevel === 1 || gameData.currentLevel === 3 || gameData.currentLevel === 5;
        }

        this.game.world.setBounds(0, 0, 2000, 2000);
        setBackground();
        this.game.events.onShutdown = new Phaser.Signal();
        this.grid = new Grid({
            game: this.game,
            x: 90,
            y: 90,
            name: 'Grid'
        });

        var generalGameGroup = self.game.add.group();

        generalGameGroup.add(this.grid);

        this.gameMusic = this.game.add.sound('mainSound', 0.1, true);

        self.buttonInfo = self.game.add.button(30, 1650, 'gameButtons', function () {
            self.menu.button1animation = this.game.add.tween(self.menu.levelButton);
            self.menu.button2animation = this.game.add.tween(self.menu.muteButton);
            self.menu.button3animation = this.game.add.tween(self.menu.soundButton);
            self.menu.button1animation.from({ x: 30, y: 1650 }, 300, Phaser.Easing.Linear.None);
            self.menu.button1animation.start();
            self.menu.button2animation.from({ x: 30, y: 1650 }, 300, Phaser.Easing.Linear.None);
            self.menu.button2animation.start();
            self.menu.button3animation.from({ x: 30, y: 1650 }, 300, Phaser.Easing.Linear.None);
            self.menu.button3animation.start();
            self.buttonInfo.visible = false;
            self.buttonInfo.inputEnabled = false;
            self.menu.buttonInfo.visible = true;
            self.menu.buttonInfo.inputEnabled = true;
            self.game.world.bringToTop(self.menu);
            self.replayButton.inputEnabled = false;
            self.menu.visible = true;
        }, this, 'pause_off', 'pause_off', 'pause_on')//'pause_off'

        generalGameGroup.add(self.buttonInfo);




        self.replayButton = self.game.add.button(250, 1650, 'gameButtons', function () {
            self.game.state.start('play');
        }, this, 'replay_off', 'replay_off', 'replay_on');//'replay_off'
        generalGameGroup.add(self.replayButton);

        this.menu = new Menu({
            x: 0,
            y: 0,
            game: this.game,
            name: 'Menu',
            parent: this,
            buttonStarter: self.buttonInfo,
            replayButton: self.replayButton
        });
        this.menu.visible = false;
        this.menu.inputEnabled = false;

        if (isLevelWithTutorial()) {
            var page = 'tutorial_01';

            if (gameData.currentLevel === 0) {
                page = 'tutorial_01';
            }
            else if (gameData.currentLevel === 1) {
                page = 'tutorial_04';
            }
            else if (gameData.currentLevel === 3) {
                page = 'tutorial_02';
            }
            else if (gameData.currentLevel === 5) {
                page = 'tutorial_03';
            }


            this.tutorial = new Tutorial({
                x: 0,
                y: 0,
                game: this.game,
                name: 'Tutorial',
                havePagination: false,
                firstPage: page
            });

            this.tutorial.visible = false;

            if(gameData.currentLevel === 0){
                this.storyBoard = new HistoryBoard({
                    x: 0,
                    y: 0,
                    game: this.game,
                    name: 'storyBoard',
                    callback: function(){
                        self.tutorial.visible = true;
                        self.gameMusic.fadeOut(1);
                        self.gameMusic.play();
                        self.gameMusic.fadeTo(1000, 0.1);
                    }
                });

            }else{
                this.gameMusic.play();
                this.tutorial.visible = true;
            }

        } else {
            this.gameMusic.play();
        }
    },
    shutdown: function () {
        this.grid.destroy();
        this.gameMusic.stop();
        this.game.events.onShutdown.dispatch();

    }
};

module.exports = Play;

},{"../gameData/gameData":6,"../modules/Block":8,"../modules/Grid":10,"../modules/HistoryBoard":11,"../modules/Menu":12,"../modules/Tutorial":13}],20:[function(require,module,exports){
'use strict';
var config = require('../config/main');
var gameData = require('../gameData/gameData');

function Preload() {
    this.ready = false;
}

Preload.prototype = {
    preload: function () {

        this.bg = this.game.add.sprite(0,0, 'loadBg');

        this.title = this.game.add.sprite(this.game.width/2, this.game.height/2, 'loadTitle');
        this.title.anchor.set(0.5);
        this.title.scale.set(0.2);
        this.title.alpha = 0;

        this.game.add.tween(this.title.scale)
            .to({x: 1}, 800, Phaser.Easing.Cubic.InOut, true);
        this.game.add.tween(this.title.scale)
            .to({y: 1}, 800, Phaser.Easing.Cubic.InOut, true);
        this.game.add.tween(this.title)
            .to({alpha: 1}, 800, Phaser.Easing.Cubic.InOut, true);
        var tween = this.game.add.tween(this.title)
            .to({rotation: 0.1}, 1000, Phaser.Easing.Cubic.InOut, true, 0, -1, true);
        tween.start();

        this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
        this.load.image('bgBase1', 'assets/images/bg_base.jpg');
        this.load.image('bgBase2', 'assets/images/bg_base2.jpg');
        this.load.image('bgBase3', 'assets/images/bg_base3.jpg');
        this.load.image('bgBase4', 'assets/images/bg_base4.jpg');
        this.load.image('bgLevelsSelector', 'assets/images/bg_levels_selector.jpg');
        this.load.image('tiles', 'assets/tiles/tiles.png');
        this.load.image('blocked', 'assets/images/block.png');
        this.load.image('blocked2', 'assets/images/block2.png');
        this.load.image('blocked3', 'assets/images/block3.png');
        this.load.image('playButton', 'assets/images/play_button.png');
        this.load.image('muteButton', 'assets/images/mute_button.png');
        this.load.image('levelSelection', 'assets/images/level_selection.png');
        this.load.image('bgPopup', 'assets/images/bg_popup.png');
        this.load.image('backgroundMenu', 'assets/images/menu_background.jpg');
        this.load.audio('openSound', 'assets/sound/open-sound-loop.mp3');
        this.load.audio('mainSound', 'assets/sound/gameloop.mp3');
        this.load.audio('angrySound', 'assets/sound/angrysound.mp3');
        this.load.audio('happySound2', 'assets/sound/happysound2.mp3');
        this.load.audio('happySound3', 'assets/sound/happysound3.mp3');
        this.load.audio('dieSound', 'assets/sound/deadsound.mp3');
        this.load.audio('gameOverSound', 'assets/sound/looser.mp3');
        this.load.audio('win', 'assets/sound/win.mp3');
        this.load.audio('starSound', 'assets/sound/starsound.mp3');
        this.load.audio('historySound', 'assets/sound/history.mp3');
        this.load.image('backgroundGameOver', 'assets/images/bg_lose.jpg');
        this.load.image('backgroundWin', 'assets/images/bg_win.jpg');
        this.load.image('bgHome', 'assets/images/bg_home_game.jpg');
        this.load.image('titleGame', 'assets/images/game_title.png');
        this.load.image('intro1', 'assets/images/intro01.jpg');
        this.load.image('intro2', 'assets/images/intro02.jpg');
        this.load.image('intro3', 'assets/images/intro03.jpg');
        this.load.image('intro4', 'assets/images/intro04.jpg');
        this.load.atlasJSONHash('win', 'assets/images/exitdoor_anim.png', 'assets/images/exitdoor_anim.json');
        this.load.atlasJSONHash('character', 'assets/images/pj_anim.png', 'assets/images/pj_anim.json');
        this.load.atlasJSONHash('vertical', 'assets/images/block_ver.png', 'assets/images/block_ver.json');
        this.load.atlasJSONHash('horizontal', 'assets/images/block_hor.png', 'assets/images/block_hor.json');
        this.load.atlasJSONHash('pageButtons', 'assets/images/selector_pages.png', 'assets/images/selector_pages.json');
        this.load.atlasJSONHash('levelButtons', 'assets/images/level_buttons.png', 'assets/images/level_buttons.json');
        this.load.atlasJSONHash('gameButtons', 'assets/images/game_buttons.png', 'assets/images/game_buttons.json');
        this.load.atlasJSONHash('homeButtons', 'assets/images/home_buttons.png', 'assets/images/home_buttons.json');
        this.load.atlasJSONHash('homeButton', 'assets/images/home_button.png', 'assets/images/home_button.json');
        this.load.atlasJSONHash('endButtons', 'assets/images/end_buttons.png', 'assets/images/end_buttons.json');
        this.load.atlasJSONHash('endStarts', 'assets/images/stars.png', 'assets/images/stars.json');
        this.load.atlasJSONArray('loseAnim', 'assets/images/lose_anim.png', 'assets/images/lose_anim.json');
        this.load.atlasJSONArray('winAnim', 'assets/images/win_anim.png', 'assets/images/win_anim.json');
        this.load.atlasJSONHash('tutorial', 'assets/images/tutorial.png', 'assets/images/tutorial.json');

    },
    create: function () {

    },
    onLoadComplete: function () {
        var self = this;
        gameData.levelSelection = config.level;

        setTimeout(function() {
            self.game.state.start('menu');
        }, 500);
    }
};

module.exports = Preload;

},{"../config/main":4,"../gameData/gameData":6}]},{},[7])