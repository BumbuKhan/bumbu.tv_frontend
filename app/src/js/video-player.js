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
    });

});