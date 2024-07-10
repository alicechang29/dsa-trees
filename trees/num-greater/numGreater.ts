import { TreeNode, TreeNodeNum } from "../common/tree";
import { Stack } from "../common/stack";

/*
1. add first node to stack
2. while stack is not empty, pop off the top
3. check if the node val is greater than lB
 - if so, add to count
 - if not, move on
4. add children to stack

*/

/** numGreater(lowerBound): starting from the invoking node and moving
 * through its children, return a count of the number of nodes whose value
 * is greater than lowerBound. */

function numGreater(node: TreeNodeNum, lowerBound: number): number {
  const toVisit = new Stack<TreeNode<number>>([node]);
  let count = 0;

  while (!toVisit.isEmpty()) {
    const currentNode = toVisit.pop();

    if (currentNode.val > lowerBound) count++;

    for (const child of currentNode.children) {
      toVisit.push(child);
    }
  }
  return count;
}

export { numGreater };