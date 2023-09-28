import { Node } from "./node.js";

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    append(value) {
        const newNode = new Node(value);
        this.length++;

        if (!this.head) {
            this.head = newNode;
            return this.head;
        }

        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    prepend(value) {
        const newNode = new Node(value);
        this.length++;

        if (this.head) {
            newNode.next = this.head;
        }

        this.head = newNode;
    }

    size() {
        return this.length;
    }

    getHead() {
        return this.head;
        // For head value:
        // return this.head.value;
    }

    getTail() {
        let current = this.head;

        while (current.next) {
            current = current.next;
        }
        return current;
        // For tail value:
        // return current.value
    }

    at(index) {
        let count = 0;
        let current = this.head;

        while (count < index) {
            current = current.next;
            count++;
        }
        return current;
    }

    pop() {
        let current = this.head;
        let previous = null;

        while (current.next) {
            previous = current;
            current = current.next;
        }
        previous.next = null;
        this.length--;
    }

    contains(value) {
        let current = this.head;

        while (current.next) {
            if (current.value === value) return true;
            current = current.next;
        }
        return false;
    }

    find(value) {
        let count = 0;
        let current = this.head;

        while (current) {
            if (current.value === value) {
                return count;
            }
            current = current.next;
            count++;
        }
        return null;
    }

    toString() {
        let current = this.head;
        let str = "";

        while (current) {
            str += `( ${current.value} ) -> `;
            current = current.next;
        }
        str += "null";

        return str;
    }
}

const list = new LinkedList();
// console.log('list:', list);

list.append(5);
// console.log('append:', list);

list.prepend(12);
// console.log('prepend:', list);

// console.log('size:', list.size());

// console.log('head:', list.getHead());

// console.log('tail:', list.getTail());

list.append(19);
list.append(24);
list.append(36);
/*
console.log('at(0)', list.at(0));
console.log('at(1)', list.at(1));
console.log('at(2)', list.at(2));
console.log('at(3)', list.at(3));
console.log('at(4)', list.at(4));
*/

// console.log('length before pop', list);
// console.log('tail before pop:', list.getTail());
list.pop();
// console.log('length after pop', list);
// console.log('tail after pop:', list.getTail());

/*
console.log('contains(19):', list.contains(19)); // true
console.log('contains(88):', list.contains(88)); // false
*/

console.log('find(12):', list.find(12)); // 0
console.log('find(5):', list.find(5)); // 1
console.log('find(19):', list.find(19)); // 2
console.log('find(24):', list.find(24)); // 3
console.log('find(88):', list.find(88)); // null

// ( 12 ) -> ( 5 ) -> ( 19 ) -> ( 24 ) -> null
console.log('toString:', list.toString());
