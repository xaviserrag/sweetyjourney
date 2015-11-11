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
