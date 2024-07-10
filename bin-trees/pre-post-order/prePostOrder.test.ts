import { describe, expect, it } from "vitest";
import { postOrder, preOrder } from "./prePostOrder";
import { largeTree as lg, smallTree as sm } from "../common/bintree.test";

//              6
//            /   \
//           5     5
//

//                   6
//                /     \
//               5       5
//                    /     \
//                   3       1
//                 /   \
//                2     1
//

describe("dfsPreOrder", function () {
  it("returns values found pre-order", function () {
    expect(preOrder(sm.root)).toEqual([6, 5, 5]);
    expect(preOrder(lg.root)).toEqual([6, 5, 5, 3, 2, 1, 1]);
    expect(preOrder(null)).toEqual([]);
  });
});


describe("dfsPostOrder", function () {
  it("returns values found in-order", function () {
    expect(postOrder(sm.root)).toEqual([5, 5, 6]);
    expect(postOrder(lg.root)).toEqual([5, 2, 1, 3, 1, 5, 6]);
    expect(postOrder(null)).toEqual([]);
  });
});
