import { spawnSync } from "node:child_process";
import { examplePaths } from "./example-paths.mjs";

for (const examplePath of examplePaths) {
  console.log(`\n# ${examplePath}`);
  const result = spawnSync(process.execPath, [examplePath], {
    encoding: "utf8",
  });

  process.stdout.write(result.stdout);
  process.stderr.write(result.stderr);

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}
