/**
 * Starcrawl Configuration
 * Edit this file to customize the experience.
 */
const CONFIG = {
  // YouTube video ID for background music.
  // Extract from the URL: youtube.com/watch?v=THIS_PART
  // Set to null to disable music.
  youtubeVideoId: "_D0ZQPqeJkk",

  // Total scroll duration in seconds. Increase for slower, more dramatic crawl.
  scrollDuration: 150,

  // Markdown file to load as the crawl message.
  messageFile: "MESSAGE.md",

  // The big title shown before the crawl begins.
  crawlTitle: "Sage 2.0",

  // Subtitle line shown above the crawl (optional, set to "" to hide).
  crawlSubtitle: "Embarking on a new chapter",

  // ── Start screen ──────────────────────────────────────────────────────────
  // Set false to skip the start screen and begin the sequence automatically.
  showStartScreen: true,
  startPromptText: "Click anywhere to begin",

  // ── "A long time ago..." intro ────────────────────────────────────────────
  // Set false to skip the blue intro text entirely.
  showIntro: true,
  introLines: [
    "\"You can never cross the ocean until you have the courage to lose sight of the shore.\"",
    "- Christopher Columbus"
  ],

  // ── Title reveal ──────────────────────────────────────────────────────────
  // Set false to skip the title zoom-out and go straight to the crawl.
  showTitleReveal: true,

  // ── End screen ────────────────────────────────────────────────────────────
  // A single string, or an array of strings for multiple lines.
  endText: [
    "sage.choi@gmail.com",
    "https://www.linkedin.com/in/sage-choi/",
    "https://sagebynature.substack.com/"
  ],

  // ── Crawl text size ───────────────────────────────────────────────────────
  // Body paragraph font size. Any valid CSS value: "1.8rem", "2vw", "24px".
  // Set to null to use the responsive default (clamp 1rem–1.4rem).
  crawlTextSize: "clamp(1.3rem, 2.8vw, 1.9rem)",

  // ── Crawl width ───────────────────────────────────────────────────────────
  // Width of the crawl text column. Any valid CSS value: "70%", "900px".
  // Set to null to use the default (min(58%, 680px)).
  crawlWidth: "75%",
};
