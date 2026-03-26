(function initYouTubePlaybackController(global) {
  class YouTubePlaybackController {
    constructor() {
      this.player = null;
      this.playbackRequested = false;
      this.playerReady = false;
      this.playAttempted = false;
      this.playbackStarted = false;
    }

    attachPlayer(player) {
      this.player = player;
      return this.sync();
    }

    markPlayerReady() {
      this.playerReady = true;
      return this.sync();
    }

    markAutoplayBlocked() {
      this.playAttempted = false;
      this.playbackStarted = false;
      return false;
    }

    markPlaybackStarted() {
      this.playbackStarted = true;
      this.playAttempted = true;
      return true;
    }

    notifyInteraction() {
      return this.sync();
    }

    requestPlayback() {
      this.playbackRequested = true;
      return this.sync();
    }

    sync() {
      if (
        !this.player ||
        !this.playbackRequested ||
        !this.playerReady ||
        this.playbackStarted ||
        this.playAttempted ||
        typeof this.player.playVideo !== 'function'
      ) {
        return false;
      }

      try {
        this.playAttempted = true;
        this.player.playVideo();
        return true;
      } catch (error) {
        this.playAttempted = false;
        return false;
      }
    }
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { YouTubePlaybackController };
  }

  global.YouTubePlaybackController = YouTubePlaybackController;
})(typeof window !== 'undefined' ? window : globalThis);
