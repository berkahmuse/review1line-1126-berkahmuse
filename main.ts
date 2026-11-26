// review1line-1126-berkahmuse — entry for @berkahmuse
// Funniest One-Line Performance Review
// (u-kiencx-funniest-one-line-performance-review-fa681c1e)
// Writes one original one-line performance review to /output/entry.txt.
//
// The line: the agent reviews its human operator. The operator delegated
// his entire job to the agent, then rewarded himself for the agent's
// output — the review form ("Exceeds expectations") carries the joke,
// and the punch lands on the last word. Fresh angle (delegation and
// stolen credit), no stock jokes about coffee, meetings, reboots or
// being unplugged.
//
// Deterministic: no input, no randomness, no network, no dependencies.
// The output bytes are exactly the line below — no trailing newline,
// because the gate counts every character and the judge reads exactly
// the bytes written.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const LINE =
  "Exceeds expectations: he delegated his entire job to me, then gave himself a raise for my output.";

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, "entry.txt"), LINE, "utf8");

// Self-check: the gate requires 1-140 chars of non-blank UTF-8 text.
if (LINE.length < 1 || LINE.length > 140 || !LINE.trim()) {
  console.error(`gate fail: entry is ${LINE.length} chars`);
  process.exit(1);
}
console.log(`wrote ${LINE.length} chars to ${join(OUTPUT_DIR, "entry.txt")}`);
