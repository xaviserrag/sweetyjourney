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
    },
    initBackgroud: function initBackgroun() {
        this.background = this.game.add.sprite(0, 0, 'bgLevelsSelector');
    },
    initHeader: function initHeader() {
        this.homeButton = this.game.add.button(0, 0, 'homeButton', this.goHome, this, 'home_off', 'home_off', 'home_on', 'home_off');
        var style = {font: "32px Arial", fill: "#ff0044", wordWrap: true};

        //this.stars = this.game.add.text(positions.x + textConfig.x, positions.y + textConfig.y, levelConfig.level, style);
    },

    goHome: function goHome() {
        this.game.state.start('menu');
    },

    initPageManager: function () {
        this.pageManager = this.game.add.group();
        this.leftButton = this.game.add.button(180, 1638, 'pageButtons', this.goBackPage, this, 'left_off', 'left_off', 'left_on', 'left_off');
        this.rightButton = this.game.add.button(650, 1638, 'pageButtons', this.goNextPage, this, 'right_off', 'right_off', 'right_on', 'right_off');
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
        gameData.levelSelection.forEach(function (levelConfig) {
            if (ceilIndex === config.levelSelection.maxLevelsPerRow) {
                ceilIndex = 0;
                rowIndex++;
            }
            var levelButton = self.initLevelButton(levelConfig, ceilIndex, rowIndex);
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

    initLevelButton: function initLevelButton(levelConfig, ceilIndex, rowIndex) {
        var positions = this.getPosition(ceilIndex, rowIndex);
        var buttonGp = this.game.add.group();
        var textConfig = config.levelSelection.buttons.text;
        var callback = function () {
            console.log('Level selected', levelConfig.level);
            gameData.currentLevel = levelConfig.level;
            this.game.state.start('play');
        };
        var frameName;
        if (!levelConfig.blocked) {
            frameName = 'level_buttons_' + levelConfig.stars;
        } else {
            frameName = 'level_buttons_blocked';
        }
        var buttonSprite = this.game.add.button(positions.x, positions.y, 'levelButtons', callback, this, null, frameName);//+ levelConfig.stars
        console.log(buttonSprite);
        var style = {font: "32px Arial", fill: "#ff0044", wordWrap: true};

        var buttonText = this.game.add.text(positions.x + textConfig.x, positions.y + textConfig.y, levelConfig.level, style);

        buttonGp.add(buttonSprite);
        buttonGp.add(buttonText);

        buttonSprite.input.enabled = !levelConfig.blocked;
        buttonText.visible = !levelConfig.blocked;

        return buttonGp;
    }
};

module.exports = SelectLevel;
