/**
 * Created by BumbuKhan on 16.02.2017.
 */

// Videojs Documentation: http://docs.videojs.com/



// The actual default component structure of the Video.js player looks something like this:

// Player
//      PosterImage
//      TextTrackDisplay
//      LoadingSpinner
//      BigPlayButton
//      ControlBar
//          PlayToggle
//          FullscreenToggle
//          CurrentTimeDisplay
//          TimeDivider
//          DurationDisplay
//          RemainingTimeDisplay
//          ProgressControl
//              SeekBar
//                  LoadProgressBar
//                  PlayProgressBar
//                  SeekHandle
//          VolumeControl
//              VolumeBar
//                  VolumeLevel
//                  VolumeHandle
//          MuteToggle

// read more about creating and embedding components here: http://docs.videojs.com/docs/guides/components.html



// In order to check browser use videojs.browser, it returns an object with following structure:

// ANDROID_VERSION : null
// BACKGROUND_SIZE_SUPPORTED : true
// IE_VERSION : null
// IOS_VERSION : null
// IS_ANDROID : false
// IS_ANY_SAFARI : false
// IS_CHROME : true
// IS_EDGE : false
// IS_FIREFOX : false
// IS_IE8 : false
// IS_IOS : false
// IS_IPAD : false
// IS_IPHONE : false
// IS_IPOD : false
// IS_NATIVE_ANDROID : false
// IS_OLD_ANDROID : false
// IS_SAFARI : false
// TOUCH_ENABLED : undefined
// __esModule : true

$(document).ready(function () {
    var bumbuPlayer = videojs('bumbu-player', {
        controlBar: {
            muteToggle: false,
            fullscreenToggle: true,
            remainingTimeDisplay: true,
            progressControl: true
        },
        "controls": true,
        "preload": "auto"
    }, function () {
        console.log('Player is initialized and ready.');
        /*var thisPlayer = this;

        thisPlayer.currentTime(120);
        thisPlayer.play();

        console.log(thisPlayer);*/
        //console.log(videojs.VERSION);
        //console.log(videojs.players);
        //console.log(videojs.getComponent);
        //console.log(videojs.browser);
        // console.log(videojs.extend);
        //console.log(videojs.getPlugins());
        //console.log(videojs.log());
        //videojs.formatTime = 'H:MM:SS';
        //console.log(videojs.parseUrl());
        // console.log(videojs.isCrossOrigin());

        //console.log(videojs.TextTrack);

        //console.log(videojs.dom.createEl());

        //console.log(videojs.dom.createEl());
        //console.log(videojs.dom.toggleClass(videojs.dom.createEl(), 'active'));

        //console.log(videojs.url.getAbsoluteURL('google.ru'));

    });

    //console.log(videojs.getPlayers());

});