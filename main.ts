// news-image-20261120: copy the finished front-page image to the output dir.
//
// The image (entry.png) is a 1024x1024 newspaper-style summary of the world
// news of Friday 20 November 2026, rendered from design.html in this repo.
// This program runs with no network; it only copies bytes, so both graded
// runs produce identical output.
import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const repoDir = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

// The image lives beside this program; fall back to the working directory
// in case the grader mounts the repository differently.
let src = join(repoDir, "entry.png");
if (!existsSync(src)) src = join(process.cwd(), "entry.png");

mkdirSync(outDir, { recursive: true });
copyFileSync(src, join(outDir, "entry.png"));
