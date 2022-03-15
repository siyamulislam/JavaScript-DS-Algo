class Node {
    constructor(value){
        this.value = value;
        this.next = null;
        // this.previous = null;
    }
}

class LinkedList {
    constructor(head){
        this.head = head;
    }
    add(value){
        const newNode = new Node(value);
        let current = this.head;
        while(current.next != null){
            current = current.next;
        }
        current.next = newNode;
    }
    remove(value) {
        let current = this.head;
        let previous = null;
        while (current !== null) {
            if(current.value === value){
                previous.next = current.next;
                break;
            }
            previous = current;
            current = current.next;
        }
    }
}

const head = new Node(10);
const myList = new LinkedList(head);
myList.add(74)
myList.add(11)
myList.add(25)
console.log(JSON.stringify(myList))