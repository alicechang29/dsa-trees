import { BNodeNum } from "../common/bintree";
import { Queue } from "../common/queue";

/** Minimum depth from node to an "incomplete node".
 *
 * An incomplete node is a node with 0 or 1 children (not 2).
 */

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


function minDepthToIncomplete(node: BNodeNum): number {
  let depth = 0;
  const toVisit = new Queue<[BNodeNum, number]>([[node, depth]]); // [c,1], [d,2], [e,2]

  while (!toVisit.isEmpty()) {

    const currQueueItem = toVisit.dequeue(); //
    const currNode = currQueueItem[0]; //C
    depth = currQueueItem[1];  //1

    depth++;

    if (currNode.lnode === null || currNode.rnode === null) {
      return depth;
    }

    toVisit.enqueue([currNode.lnode, depth]);
    toVisit.enqueue([currNode.rnode, depth]);


  }
  return depth;
}

export { minDepthToIncomplete };
