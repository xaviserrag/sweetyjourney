var menuConfig = require('./menu');
var levelSelectionConfig = require('./levelSelection');
var gameLevel = require('./gameLevel');
module.exports = {
    startLevel: 0,
    rows: 9,
    cols: 5,
    level: gameLevel,
    menu: menuConfig,
    levelSelection: levelSelectionConfig
};