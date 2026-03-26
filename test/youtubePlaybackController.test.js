const test = require('node:test');
const assert = require('node:assert/strict');

const { YouTubePlaybackController } = require('../youtubePlaybackController.js');

test('plays once when playback was requested before player becomes ready without requiring a gesture', () => {
  const calls = [];
  const controller = new YouTubePlaybackController();

  controller.requestPlayback();
  controller.attachPlayer({
    playVideo() {
      calls.push('play');
    },
  });

  assert.deepEqual(calls, []);

  controller.markPlayerReady();
  assert.deepEqual(calls, ['play']);
});

test('retries after autoplay is blocked when a later interaction occurs', () => {
  const calls = [];
  const controller = new YouTubePlaybackController();

  controller.attachPlayer({
    playVideo() {
      calls.push('play');
    },
  });

  controller.requestPlayback();
  controller.markPlayerReady();
  controller.markAutoplayBlocked();

  assert.deepEqual(calls, ['play']);

  controller.notifyInteraction();
  assert.deepEqual(calls, ['play', 'play']);
});

test('does not call playVideo more than once after playback has started', () => {
  const calls = [];
  const controller = new YouTubePlaybackController();

  controller.attachPlayer({
    playVideo() {
      calls.push('play');
    },
  });

  controller.requestPlayback();
  controller.markPlayerReady();
  controller.markPlaybackStarted();
  controller.notifyInteraction();
  controller.requestPlayback();

  assert.deepEqual(calls, ['play']);
});
