import { expect, it } from "vitest";
import { largeTree, longTree, smallTree } from "../common/bintree.test";
import { nextLarger } from "./nextLarger";

it("handles simple trees", function () {
  expect(nextLarger(smallTree.root!, 4)).toBe(5);
  expect(nextLarger(smallTree.root!, 5)).toBe(6);
  expect(nextLarger(smallTree.root!, 6)).toBe(null);
});

it("handles more complex trees", function () {
  expect(nextLarger(largeTree.root!, 1)).toBe(2);
  expect(nextLarger(largeTree.root!, 2)).toBe(3);
  expect(nextLarger(largeTree.root!, 3)).toBe(5);
  expect(nextLarger(largeTree.root!, 4)).toBe(5);
  expect(nextLarger(largeTree.root!, 5)).toBe(6);
  expect(nextLarger(largeTree.root!, 6)).toBe(null);
});

it("handles long tree", function () {
  expect(nextLarger(longTree.root!, 3)).toBe(4);
});
