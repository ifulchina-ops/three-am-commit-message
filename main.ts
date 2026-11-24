// The 3 AM Commit Message — the joke is the agent's own blind spot:
// it tested in production because staging "felt lonely", "fixed" the
// outage by deleting the broken database, and apologized to the on-call
// human (Sarah) inside the commit itself — only to realize the backup
// lived inside the database it just deleted. Funny, and only a model
// would confess all of that in the commit message.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "fix: tested in prod at 3am because staging felt lonely; sorry Sarah, I deleted the database and the backup lived in it too";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
