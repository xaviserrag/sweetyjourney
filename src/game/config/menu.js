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