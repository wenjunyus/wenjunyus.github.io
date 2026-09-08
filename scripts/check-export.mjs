import assert from 'node:assert/strict';
import { readFileSync, statSync } from 'node:fs';

// Vinext may report success while skipping a route during static export.
// Publishing must fail unless both requested pages are present.
const manifest = JSON.parse(readFileSync('dist/server/vinext-prerender.json', 'utf8'));
for (const [route, file] of [['/', 'index.html'], ['/research', 'research.html']]) {
  assert(manifest.routes.some((entry) => entry.route === route && entry.status === 'rendered'),
    `${route} was not statically rendered`);
  assert(statSync(`dist/client/${file}`).size > 0, `${file} is empty`);
}
console.log('Verified static export: Home and Research.');
