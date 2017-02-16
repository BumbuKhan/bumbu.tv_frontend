/**
 * Created by BumbuKhan on 16.02.2017.
 */

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

// read more http://docs.videojs.com/docs/guides/components.html

$(document).ready(function () {
    var bumbuPlayer = videojs('bumbu-player', {
        controlBar: {
            muteToggle: false,
            fullscreenToggle: false,
            remainingTimeDisplay: false,
            progressControl: false
        },
        "controls": true,
        "preload": "auto"
    }, function () {
        console.log('Player is initialized and ready.');
    });
});