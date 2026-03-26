const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');

const html = fs.readFileSync('index.html', 'utf8');

test('intro and end overlays use responsive horizontal padding', () => {
  assert.match(
    html,
    /#intro-text\s*\{[\s\S]*padding-inline:\s*clamp\(/,
  );

  assert.match(
    html,
    /#end-screen\s*\{[\s\S]*padding-inline:\s*clamp\(/,
  );
});

test('end text keeps responsive font sizing', () => {
  assert.match(
    html,
    /\.end-line\s*\{[\s\S]*font-size:\s*clamp\(/,
  );
});
