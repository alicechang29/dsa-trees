import { expect, it } from "vitest";
import {
  denseTree,
  largeTree,
  longTree,
  smallTree,
} from "../common/bintree.test";
import { minDepthToIncomplete } from "./minDepthIncomplete";


it("handles simple trees", function () {
  expect(minDepthToIncomplete(smallTree.root!)).toBe(2);
});

it("handles more complex trees", function () {
  expect(minDepthToIncomplete(largeTree.root!)).toBe(2);
});

it("handles long tree", function () {
  expect(minDepthToIncomplete(longTree.root!)).toBe(2);
});

it("handles dense tree", function () {
  expect(minDepthToIncomplete(denseTree.root!)).toBe(3);
});
