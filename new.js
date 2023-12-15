const readline = require('readline');
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
    }

    addFirst(data){
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }
    reverse() {
        let current = this.head;
        let prev = null;
    
        while (current !== null) {
          const nextNode = current.next;
          current.next = prev;
          prev = current;
          current = nextNode;
        }
    
        this.head = prev;
    }

    display(){
        let current = this.head;
        while(current !== null){
            console.log(current.data);
            current = current.next;
        }
    }
    findSecondLargest() {
        if (!this.head || !this.head.next) {
          console.log("List does not have enough elements.");
          return;
        }
    
        let firstMax = -Infinity;
        let secondMax = -Infinity;
    
        let current = this.head;
    
        while (current !== null) {
          if (current.data > firstMax) {
            secondMax = firstMax;
            firstMax = current.data;
          } else if (current.data > secondMax && current.data < firstMax) {
            secondMax = current.data;
          }
    
          current = current.next;
        }
    
        if (secondMax === -Infinity) {
          console.log("There is no second-largest element.");
        } else {
          console.log("Second Largest Number: ", secondMax);
        }
      }
}

const linkedList = new LinkedList();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter the Number of Elements in LinkedList Below: ", (sizeOfLinkedList) => {
  sizeOfLinkedList = parseInt(sizeOfLinkedList);

  function promptElement(index) {
    if (index < sizeOfLinkedList) {
      rl.question(`Enter element #${index + 1}: `, (number) => {
        linkedList.addFirst(parseFloat(number));
        promptElement(index + 1);
      });
    } else {
      rl.close();
      console.log("Initial LinkedList:");
      linkedList.display();
      console.log("Reversed LinkedList:");
      linkedList.reverse();
      linkedList.display();
      console.log("\nFinding Second Largest Number:");
      linkedList.findSecondLargest();
    }
  }

  promptElement(0);
});