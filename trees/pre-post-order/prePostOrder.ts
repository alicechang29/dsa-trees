import { TreeNodeNum } from "../common/tree";
import { Stack } from "../common/stack";

/*
Pre-order -> do yourself first before children
Using recursion:
- define base case: if(!node) return [];
-- base case needs to be truthful (traversal from empty node is empty array)

const out = [node.val]
- make an array first that contains "you"

for (const c of node.children) {
//
  out.push(...preOrder(c))

}
*/

function preOrderR(node: TreeNodeNum | null): number[] {
  //define base case:
  if (!node) return [];
  //base case needs to be truthful (traversal from empty node is empty array)

  const out = [node.val];
  //make an array first that contains "you";

  for (const c of node.children) {
    //pushing the result of asking the same question to my children
    out.push(...preOrderR(c));
  }
  return out;
}

/** dfsPreOrder(): Traverse from the invoking node using pre-order DFS.
 * Returns an array of values of visited nodes. */

function preOrder(node: TreeNodeNum | null): number[] {
  if (node === null) return [];

  const toVisit = new Stack<TreeNodeNum>([node]);
  // BOTTOM - 1, 2, 3, 4, 5, 6, 7, 8 - TOP

  let output: number[] = []; //1

  while (!toVisit.isEmpty()) {

    let currNode = toVisit.pop();
    //add myself to output first before doing anything to children
    output.push(currNode.val);

    for (let i = currNode.children.length - 1; i >= 0; i--) {
      //put children into stack
      toVisit.push(currNode.children[i]);

    }
  }

  return output;
}


/** dfsPostOrder(): Traverse from the invoking node using post-order DFS.
 * Returns an array of values of visited nodes. */

function postOrder(node: TreeNodeNum | null): number[] {

  if (node === null) return [];
  let output: number[] = [];
  //post order returns an array

  //traverse all children
  for (const child of node.children) {
    // push the value into the array
    output.push(...postOrder(child));
    console.log({ output });
  }

  //insert the root last
  output.push(node.val);

  return output;
}

export { preOrder, postOrder };
