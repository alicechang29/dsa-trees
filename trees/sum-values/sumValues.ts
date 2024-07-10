import { TreeNodeNum } from "../common/tree";
import { Stack } from "../common/stack";
/*
Sum value of node and its descendants.

  4
1   5

{val: 4,
children: [{val:1,
            children: []
          },
            5]
}

TreeNode - val and children[]
1. traverse it, going through 1 node at a time
2. go to first node
3. add node to stack
4. go to the children
5. add child to


*/


/** sumValues(): add up all values of node and its descendants.
 * Returns sum as an integer. */
function sumValues(node: TreeNodeNum): number {
  const toVisit = new Stack<TreeNodeNum>([node]);
  let sum = 0;

  while (!toVisit.isEmpty()) {
    const current = toVisit.pop();
    sum += current.val;

    for (const child of current.children) {
      toVisit.push(child);
    }
  }

  return sum;
}

export { sumValues };
