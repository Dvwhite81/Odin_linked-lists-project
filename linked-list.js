import { Node } from "./node.js";

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    append(value) {
        const newNode = new Node(value);
        this.size++;

        if (this.head === null) {
            this.head = newNode;
        }

        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        current = newNode;
    }
}

const list = new LinkedList();
console.log('list:', list);
list.append(5);
console.log('append:', list);
