import { Queue} from "../common/queue";
import { Stack } from "../common/stack";
import { TreeNodeNum, TreeNode } from "../common/tree";

/** Get maximum depth from node.
 *
 * Maximum depth: length of longest path from node to a leaf.
 **/

function maxDepth(node: TreeNodeNum | null): number {

  if (node === null) return 0

  const toVisit = new Queue<[TreeNodeNum, number]>([[node, 1]])
  let maxCount = 0

  while(!toVisit.isEmpty()){
    let [current, depth] = toVisit.dequeue()

    for (const child of current.children){
      toVisit.enqueue([child, depth + 1])
    }
    maxCount = Math.max(depth, maxCount)
  }

  return maxCount;
}

export { maxDepth };
