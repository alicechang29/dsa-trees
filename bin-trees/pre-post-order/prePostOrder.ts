import { BNodeNum } from "../common/bintree";
import { Stack } from "../common/stack";
/*
Pre-order: parent first then child from left to right

- start at root node
- add node to the stack
- check left
- add left node to the stack
- check children
- add left... continue
- check right

- do this until

Stack
*/

/** dfsPreOrder(): Traverse from the invoking node using pre-order DFS.
 * Returns an array of values of visited nodes. */

function preOrder(node: BNodeNum | null): number[] {
  //base
  if (node === null) return [];

  //stack: bottom: A, B,D,E,F, C, G :top

  //NOTE: need to add initial node to the result
  const result: number[] = [node.val]; //A, B
  const lNode = node.lnode; // B, D
  const rNode = node.rnode; // C, E

  // preOrder returns an array
  // to combine result with any new results, spread out the return
  result.push(...preOrder(lNode));
  result.push(...preOrder(rNode));

  return result; //[A, B, D, ]
}


/** dfsPostOrder(): Traverse from the invoking node using post-order DFS.
 * Returns an array of values of visited nodes. */

function postOrder(node: BNodeNum | null): number[] {
  return [42];
}

export { preOrder, postOrder };