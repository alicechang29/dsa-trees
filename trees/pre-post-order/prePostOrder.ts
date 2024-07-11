import { TreeNodeNum } from "../common/tree";
import { Stack } from "../common/stack";

/** dfsPreOrder(): Traverse from the invoking node using pre-order DFS.
 * Returns an array of values of visited nodes. */

function preOrder(node: TreeNodeNum | null): number[] {
  if (node === null) return [];

  const toVisit = new Stack<TreeNodeNum>([node]);
  // BOTTOM - 1, 2, 3, 4, 5, 6, 7, 8 - TOP

  let output: number[] = []; //1

  while (!toVisit.isEmpty()) {

    let currNode = toVisit.pop(); // 1
    output.push(currNode.val);

    for (let i = currNode.children.length - 1; i >= 0; i--) {
      toVisit.push(currNode.children[i]);

    }
  }

  return output;
}


/** dfsPostOrder(): Traverse from the invoking node using post-order DFS.
 * Returns an array of values of visited nodes. */

function postOrder(node: TreeNodeNum | null): number[] {
  if (node === null) return [];

  const toVisit = new Stack<TreeNodeNum>([node]);
  // BOTTOM - 1, 2, 3, 4, 5, 6, 7, 8 - TOP

  let output: number[] = []; //1



  return output;
}

export { preOrder, postOrder };
