import { TreeNode, TreeNodeNum } from "../common/tree";
import { Stack } from "../common/stack";

/** countEvens(): starting from the invoking node and moving through its
 * children, count how many nodes have even values. Returns that count as
 * an integer. */
function countEvens(node: TreeNodeNum): number {

  const toVisit = new Stack<TreeNodeNum>([node]);
  let count = 0

  while (!toVisit.isEmpty()){
    const current = toVisit.pop()

    if (current.val % 2 === 0){
      count++
    }

    for (let child of current.children){
      toVisit.push(child)
    }
  }

  return count;
}

export { countEvens };
