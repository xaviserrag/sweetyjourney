'use strict';

function SoundManager(){
    var sounds = {};

    this.addSound = function addSound(game, soundName, volume, isLoop) {
        console.log('Adding Sound', soundName);
        sounds[soundName] = game.add.sound(soundName, volume, isLoop);
    };

    this.play = function play(soundName) {
        console.log('Playing Sound', soundName);
        if (sounds[soundName]){
            sounds[soundName].play();
        }
    };

    this.stop = function stop(soundName) {
        console.log('Stop Sound', soundName);
        if (sounds[soundName]){
            sounds[soundName].stop();
        }
    };

    this.fadeOut = function fadeOut(soundName, duration) {
        console.log('fadeout Sound', soundName);
        if (sounds[soundName]){
            sounds[soundName].fadeOut(duration);
        }
    };

        this.fadeTo = function fadeTo(soundName, duration, volume) {
        console.log('FadeTo Sound', soundName);
        if (sounds[soundName]){
            sounds[soundName].fadeTo(duration, volume);
        }
    };
}

module.exports = new SoundManager();