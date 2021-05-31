const prompt = require("prompt-sync")({ sigint: true });


class TreeNode {
    constructor(name) {
        this.name = name;
        this.children = [];

    }

    addChild = (node) => {
        if (this.children.length < 2) {
            this.children.push(node);
            console.log(`added a child to ${this.name}`)
        }
        else console.log("child is an orphan")
    };


    traverse = () => {
        let nodes = [this]; // to put the root node in our array
        while (nodes.length > 0) {
            let currentNode = nodes.pop();
            console.log(currentNode.name);
            nodes = [...nodes, ...currentNode.children];
        }
    };
}


const root = new TreeNode("family");
root.addChild("jack"); (jack)

const name = prompt("enter child full name (done if finished): ");
console.log(`added a child to ${}`)

const childOne = new TreeNode("Fahad");
const childTwo = new TreeNode("Jassim");


root.addChild(childOne);
root.addChild(childTwo);

console.log(root);