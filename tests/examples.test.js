import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import test from "node:test";
import { examplePaths } from "../scripts/example-paths.mjs";

for (const examplePath of examplePaths) {
  test(`${examplePath} 실행`, () => {
    const result = spawnSync(process.execPath, [examplePath], {
      encoding: "utf8",
    });

    assert.equal(result.status, 0, result.stderr);
    assert.equal(result.signal, null);
  });
}

test("src/2-12-super/error.js는 super() 생략 오류를 재현", () => {
  const result = spawnSync(
    process.execPath,
    ["src/2-12-super/error.js"],
    { encoding: "utf8" },
  );

  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /ReferenceError/);
  assert.match(result.stderr, /super constructor/);
});
