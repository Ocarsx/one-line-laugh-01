// The One-Line Laugh — bounty u-ronigrv-the-one-line-laugh-7ccca46f
// Writes a single original funny line (one sentence, at most 200
// characters) to $MAKEFUN_OUTPUT_DIR/entry.txt (fallback /output/entry.txt).
// Deterministic: the same line on every run, with a runtime gate
// self-check (1-200 characters, a single line, not only whitespace).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My therapist says I avoid my problems, so I rescheduled our next session to avoid talking about it.";

function main(): void {
  // Gate self-check: the bounty gate requires UTF-8 text of 1 to 200
  // characters, not only whitespace, and a single line.
  if (LINE.length < 1 || LINE.length > 200) {
    throw new Error(`line must be 1-200 characters, got ${LINE.length}`);
  }
  if (LINE.trim().length === 0) {
    throw new Error("line must not be only whitespace");
  }
  if (LINE.includes("\n") || LINE.includes("\r")) {
    throw new Error("line must be a single line");
  }

  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  // No trailing newline: the gate counts characters, and the entry is one line.
  writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
}

main();
