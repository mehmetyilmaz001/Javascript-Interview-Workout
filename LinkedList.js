class LinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
    };

    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    //   let current = this.head;

    //   const newNode = {
    //     value,
    //     next: null,
    //   };

    //   while (current) {
    //     if (current.next === null) {
    //       current.next = newNode;
    //       this.tail = current.next;
    //       return this;
    //     } else {
    //       current = current.next;
    //       this.length++;
    //     }
    //   }
    // }

    // Much cleaner and time complexity effective
    const newNode = {
      value,
      next: null,
    };

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  prepend(value) {
    const newNode = {
      value,
      next: null,
    };

    newNode.next = this.head;
    this.head = newNode;

    this.length++;

    return this;
  }

  printList() {
    const arr = [];
    let current = this.head;

    while (current) {
      arr.push(current.value);
      current = current.next;
    }

    return arr;
  }
}

const linkedList = new LinkedList(10);

linkedList.append(5);
linkedList.append(16);
linkedList.append(1);

linkedList.prepend(99);

console.log(linkedList.printList());
