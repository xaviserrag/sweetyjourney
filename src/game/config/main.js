var menuConfig = require('./menu');
var levelSelectionConfig = require('./levelSelection');
module.exports = {
    startLevel: 0,
    rows: 9,
    cols: 5,
    level: {
        '0': {
            grid: [
                [0,0,1,0,0],
                [0,0,0,0,0],
                [2,0,0,0,0],
                [0,0,0,0,3],
                [0,0,2,0,0],
                [0,0,0,0,0],
                [0,0,0,3,0],
                [0,3,0,0,0],
                [0,0,0,0,0]
            ]
        }
    },
    menu: menuConfig,
    levelSelection: levelSelectionConfig
};