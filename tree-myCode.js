const prompt = require("prompt-sync")({ sigint: true });


class TreeNode {
    constructor(name) {
        this.name = name;
        this.children = [];
    }



    addChild = (child) => {
        if (this.children.length < 2) {
            this.children.push(child);
            console.log(`child ${child.name} has been added`)
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
        //zainab family => family bobo  
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
    //create new child node
    let child = new TreeNode(childName);

    //look for its parent
    let parent = root.searchForParent(child);

    //find it and add child i childeren < 2
    if (parent !== "Parent does not exist") {
        //add the child
        parent.addChild(child)
    }
    //else do not add the child
    else console.log(parent)
    childName = prompt("enter child full name (Done if finished): ")

}

root.traverse();