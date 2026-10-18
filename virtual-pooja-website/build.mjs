import { cp, mkdir, rm } from "node:fs/promises";
import { join } from "node:path";

const output = "dist";

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await cp("frontend", output, { recursive: true });
await cp("public", join(output, "public"), {
  recursive: true,
  filter: (src) => !src.toLowerCase().endsWith("readme.md"),
});

console.log("Virtual Pooja static site built in dist/");
