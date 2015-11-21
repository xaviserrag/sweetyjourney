'use strict';
var config = require('../../../config/main');

function SoundManager() {
    var sounds = {};

    this.mute = function mute(game, mute) {
        console.log('Mute', mute);
        for (var currentSound in sounds) {
            if (mute){
                sounds[currentSound].setVolume('0.0');
            }else{
                sounds[currentSound].setVolume(sounds[currentSound].ownVolume);
            }
        }
    };

    this.addSound = function addSound(game, soundName, volume, isLoop) {
        var media;
        var src = '/android_asset/www/'+config.sounds[soundName];
        if (!sounds[soundName]){
            sounds[soundName] = new Media(src, null, null, function(){
                if (isLoop && !sounds[soundName].isStopped){
                    sounds[soundName].play();
                }
            });
        }

        sounds[soundName].isStopped = false;
        sounds[soundName].ownVolume = volume;
        sounds[soundName].setVolume(volume);
    };

    this.play = function play(soundName) {
        console.log('Playing Sound', soundName);
        if (sounds[soundName]) {
            sounds[soundName].play();
            sounds[soundName].setVolume(sounds[soundName].ownVolume);
        }
    };

    this.stop = function stop(soundName) {
        console.log('Stop Sound', soundName);
        if (sounds[soundName]){
            sounds[soundName].isStopped = true;
            sounds[soundName].setVolume('0.0');
            sounds[soundName].stop();
        };
    };

    this.fadeIn = function fadeInd(soundName, duration) {
        this.play(soundName);
    };

    this.fadeOut = function fadeOut(soundName, duration) {};

    this.fadeTo = function fadeTo(soundName, duration, volume) {};

    //TODO WEB AUDIO, MOVE TO ANOTHER FILE
    /*
    this.mute = function mute(game, mute) {
        console.log('Mute', mute);
        game.sound.mute = mute;
    };

    this.addSound = function addSound(game, soundName, volume, isLoop) {
        if (!soundName[soundName]) {
            console.log('Adding Sound', soundName);
            sounds[soundName] = game.add.audio(soundName, volume, isLoop);
        }
    };

    this.play = function play(soundName) {
        console.log('Playing Sound', soundName);
        if (sounds[soundName]) {
            sounds[soundName].play();
        }
    };

    this.stop = function stop(soundName) {
        console.log('Stop Sound', soundName);
        if (sounds[soundName]) {
            sounds[soundName].stop();
        }
    };

    this.fadeIn = function fadeInd(soundName, duration) {
        console.log('fadeout Sound', soundName);
        if (sounds[soundName]) {
            sounds[soundName].fadeIn(duration);
        }
    };

    this.fadeOut = function fadeOut(soundName, duration) {
        console.log('fadeout Sound', soundName);
        if (sounds[soundName]) {
            sounds[soundName].fadeOut(duration);
        }
    };

    this.fadeTo = function fadeTo(soundName, duration, volume) {
        console.log('FadeTo Sound', soundName);
        if (sounds[soundName]) {
            sounds[soundName].fadeTo(duration, volume);
        }
    };*/
}

module.exports = new SoundManager();