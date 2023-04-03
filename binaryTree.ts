class TreeNode {
  pointerLeft: TreeNode | null = null;
  pointerRight: TreeNode | null = null;

  constructor(public value: string) {}
}

class SearchBinaryTree {
  current: TreeNode | null = null;

  insertArray(arrayValues: string[]) {
    arrayValues.forEach(
        (value) => {
            const newTreeNode = new TreeNode(value);

            if (!this.current) {
                this.current = newTreeNode;
                return;
            }

            let currentTreeNode = this.current;

            while (true) {
                if (value === currentTreeNode.value) {
                    console.log(`${value} existe na arvore`);
                    return;
                }

                if (value < currentTreeNode.value) {
                    if (!currentTreeNode.pointerLeft) {
                      currentTreeNode.pointerLeft = newTreeNode;
                      console.log(`Inserido ${value} a esquerda do ${currentTreeNode.value}`);

                      return;
                    }

                    currentTreeNode = currentTreeNode.pointerLeft;
                } else {
                    if (!currentTreeNode.pointerRight) {
                      currentTreeNode.pointerRight = newTreeNode;
                      console.log(`Inserido ${value} a direita do ${currentTreeNode.value}`);

                      return;
                    }

                    currentTreeNode = currentTreeNode.pointerRight;
                }
            }
        }
    );
  }

  search(value: string): boolean {
    let currentTreeNode = this.current;
    while (currentTreeNode) {
      if (value === currentTreeNode.value) {
        console.log(`${value} foi encontrado na arvore`);

        return true;
      }

      currentTreeNode = value < currentTreeNode.value ? currentTreeNode.pointerLeft : currentTreeNode.pointerRight;
    }

    console.log(`${value} nao foi encontrado na arvore`);

    return false;
  }
}

const binaryTree = new SearchBinaryTree();

let arrayBinaryTree: string[] = ["Erik", "Ferri", "Liz"];

binaryTree.insertArray(arrayBinaryTree);

console.log("------------------")

binaryTree.search("Erik"); // true
binaryTree.search("Ferri"); // true
binaryTree.search("Liz"); // true
binaryTree.search("ferri"); // false
binaryTree.search("Zeca"); // false
