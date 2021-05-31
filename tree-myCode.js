const prompt = require("prompt-sync")({ sigint: true });


class TreeNode {
    constructor(name) {
        this.name = name;
        this.children = [];
    }



    addChild = (child) => {
        if (this.children.length < 2) {
            this.children.push(child);
            console.log(`added a child to ${child.name.split(" ")[1]}`)
        }
        else console.log("child is an orphan")
    };


    traverse = () => {
        let nodes = [this];
        while (nodes.length > 0) {
            let currentNode = nodes.pop();
            console.log(currentNode.name);
            nodes = [...nodes, ...currentNode.children];
        }
    };

    searchForParent = (child) => {
        let nodes = [this];
        while (nodes.length > 0) {
            let currentNode = nodes.pop();
            if (child.name.split(" ")[1] === currentNode.name.split(" ")[0]) {
                return currentNode
            }

            nodes = [...nodes, ...currentNode.children];
        }
        return "Parent does not exist";
    };
}




let childName = prompt("enter child full name (Done if finished): ");
const root = new TreeNode("family")
while (childName.toUpperCase() !== "DONE") {
    let child = new TreeNode(childName);

    let parent = root.searchForParent(child);

    if (parent !== "Parent does not exist") {
        parent.addChild(child)
    }
    else console.log(parent)
    childName = prompt("enter child full name (Done if finished): ")

}

root.traverse();



