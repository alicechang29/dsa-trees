import { describe, expect, it } from "vitest";
import { largeTree, longTree, smallTree } from "../common/bintree.test";
import { minDepth } from "./minDepth";

describe("minDepth", function () {
  it("handles simple trees", function () {
    expect(minDepth(smallTree.root!)).toBe(2);
  });

  it("handles more complex trees", function () {
    expect(minDepth(largeTree.root!)).toBe(2);
  });

  it("handles long tree", function () {
    expect(minDepth(longTree.root!)).toBe(4);
  });
});
