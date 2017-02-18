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


// read more about caption plugin here: http://www.sampingchuang.com/videojs-caption

$(document).ready(function () {
    /*// Get the Component base class from Video.js
     var Component = videojs.getComponent('Component');

     // The videojs.extend function is used to assist with inheritance. In
     // an ES6 environment, `class TitleBar extends Component` would work
     // identically.
     var TitleBar = videojs.extend(Component, {

     // The constructor of a component receives two arguments: the
     // player it will be associated with and an object of options.
     constructor: function (player, options) {

     // It is important to invoke the superclass before anything else,
     // to get all the features of components out of the box!
     Component.apply(this, options);

     // If a `text` option was passed in, update the text content of
     // the component.
     // if (options.text) {
     this.updateTextContent(options.text);
     // }
     },

     // The `createEl` function of a component creates its DOM element.
     createEl: function () {
     return videojs.dom.createEl('div', {
     // Prefixing classes of elements within a player with "vjs-"
     // is a convention used in Video.js.
     className: 'vjs-title-bar'
     });
     },

     // This function could be called at any time to update the text
     // contents of the component.
     updateTextContent: function (text) {
     // If no text was provided, default to "Title Unknown"
     if (!text) {
     text = 'Unknown title';
     }

     // Use Video.js utility DOM methods to manipulate the content
     // of the component's element.
     videojs.dom.emptyEl(this.el());
     videojs.dom.appendContent(this.el(), text);
     }
     });

     // Register the component with Video.js, so it can be used in players.
     videojs.registerComponent('TitleBar', TitleBar);

     // Add the TitleBar as a child of the player and provide it some text
     // in its options.
     bumbuPlayer.addChild('TitleBar', {text: 'Movie\'s title'});


     bumbuPlayer.on('keydown', function (e) {
     //     if (e.keyCode == 32) {
     //         console.log('Spase button pressed (keyCode: 32)');
     //         e.preventDefault();
     //
     //         if (this.paused()) {
     //             console.log('player is paused');
     //             this.play();
     //         } else {
     //             console.log('player is playing');
     //             this.pause();
     //         }
     //     }
     // });


     //var tracks = bumbuPlayer.textTracks();
     //console.log(tracks);
     */

    var captionJson = [
        {
            "data": "This is a roll up example.",
            "startTime": 0,
            "endTime": 1000
        },
        {
            "data": "As you can see,",
            "startTime": 1000,
            "endTime": 2000
        },
        {
            "data": "the caption is being pushed up.",
            "startTime": 2000,
            "endTime": 3000
        }
    ];

    var bumbuPlayer = videojs('bumbu-player', {
        html5: {
            nativeTextTracks: false
        },
        controlBar: {
            fullscreenToggle: true,
            remainingTimeDisplay: true,
            currentTimeDisplay: true
        },

        "controls": true,
        "preload": "auto"
    }, function () {
        console.log('Player is initialized and ready.');

        this.hotkeys({
            volumeStep: 0.1,
            seekStep: 5,
            enableModifiersForNumbers: false
        });
    });

    bumbuPlayer.caption({
        data: captionJson,
        setting: {
            captionType: 'roll-up'
        }
    });
});