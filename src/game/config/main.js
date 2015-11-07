var menuConfig = require('./menu');
module.exports = {
    startLevel: 0,
    rows: 9,
    cols: 5,
    level: {
        '0': {
            grid: [
                [1,0,1,0,0],
                [0,0,0,0,0],
                [0,0,0,0,0],
                [1,0,0,0,0],
                [0,0,0,0,0],
                [0,0,0,0,0],
                [0,0,0,0,0],
                [0,0,0,0,0],
                [0,0,0,0,0]
            ]
        }
    },

    menu: menuConfig
};