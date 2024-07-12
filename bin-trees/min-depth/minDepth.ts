import { BNodeNum } from "../common/bintree";
import { Queue } from "../common/queue";
/*
BFS
- Make a queue (first in, last out)
A, B, C, D, E, G, F
- for each node in queue:
check if it has less than 2 nodes (either left or right is null)
-- if not, add 1 to the depth count
move onto next node
-- if so, return depth



*/

/** Get minimum depth from node.
 *
 * Minimum depth: length of shortest path from node to a leaf.
 **/

function minDepth(node: BNodeNum): number {
  if (node.lnode === null && node.rnode === null) return 1;

  if (node.lnode === null && node.rnode !== null) {
    return minDepth(node.rnode) + 1;
  }

  if (node.rnode === null && node.lnode !== null) {
    return minDepth(node.lnode) + 1;
  }

  return Math.min(minDepth(node.lnode!), minDepth(node.rnode!)) + 1;
}



export { minDepth };
