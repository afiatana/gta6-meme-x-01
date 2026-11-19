// gta6-meme-x-01 — make.fun entry program (Node 22, standard library only).
//
// The entry itself is the X post: a GTA 6 meme whose first picture is meme.png
// (make.fun's ghost riding shotgun in a pink Vice City convertible) and whose
// text carries the bounty link and this account's play code. The house reads
// that post straight from X, so this program does not need to describe it.
//
// All main.ts has to do is hand the house the post's address: copy POST.json
// from the repository root into the output directory, where the gate reads it.
// POST.json is one small JSON object (at most 16384 bytes); a placeholder
// address in it means the gate refuses the entry until the real post lands.
// It must not reach the network, read the clock, or touch files outside the
// repository, so repeated runs write the same bytes.
//
// Local run (mirrors the grader's /bot -> /output layout):
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });

try {
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`could not copy POST.json from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
