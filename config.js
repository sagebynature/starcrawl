/**
 * Starcrawl Configuration
 * Edit this file to customize the experience.
 */
const CONFIG = {
  // YouTube video ID for background music.
  // Extract from the URL: youtube.com/watch?v=THIS_PART
  // Set to null to disable music.
  youtubeVideoId: null,

  // Total scroll duration in seconds. Increase for slower, more dramatic crawl.
  scrollDuration: 115,

  // Markdown file to load as the crawl message.
  messageFile: "MESSAGE.md",

  // The big title shown before the crawl begins.
  crawlTitle: "Starcrawl",

  // Subtitle line shown above the crawl (optional, set to "" to hide).
  crawlSubtitle: "A cinematic repo showcase",

  // ── Start screen ──────────────────────────────────────────────────────────
  // Set false to skip the start screen and begin the sequence automatically.
  showStartScreen: true,
  startPromptText: "Click to start the demo",

  // ── "A long time ago..." intro ────────────────────────────────────────────
  // Set false to skip the blue intro text entirely.
  showIntro: true,
  introLines: [
    "A simple markdown file.",
    "A much bigger entrance."
  ],

  // ── Title reveal ──────────────────────────────────────────────────────────
  // Set false to skip the title zoom-out and go straight to the crawl.
  showTitleReveal: true,

  // ── End screen ────────────────────────────────────────────────────────────
  // A single string, or an array of strings for multiple lines.
  endText: [
    "Edit the message.",
    "Tune the config.",
    "Publish your own crawl."
  ],

  // ── Crawl text size ───────────────────────────────────────────────────────
  // Body paragraph font size. Any valid CSS value: "1.8rem", "2vw", "24px".
  // Set to null to use the responsive default (clamp 1rem–1.4rem).
  crawlTextSize: null,

  // ── Crawl width ───────────────────────────────────────────────────────────
  // Width of the crawl text column. Any valid CSS value: "70%", "900px".
  // Set to null to use the default (min(86vw, 42rem)).
  crawlWidth: null,

  // ── Advanced crawl timing/layout ──────────────────────────────────────────
  // All of these can be left alone unless you want to tune the presentation.
  crawlStartOffsetVh: 5,
  crawlEndTriggerViewport: -0.2,
  crawlFadeDistanceViewportHeights: 2,
  crawlPerspective: 400,
  crawlPerspectiveOrigin: "50% 90%",
  crawlTiltDegrees: 18,

  // ── Sequence timing ───────────────────────────────────────────────────────
  fadeMs: 1300,
  fadeSettleMs: 1400,
  introDurationMs: 5000,
  titleHoldMs: 1200,
  titleZoomMs: 4800,
  endFadeDurationSeconds: 4,
  // Set to null to show the end screen after the fade completes.
  endScreenDelayMs: null,
};
