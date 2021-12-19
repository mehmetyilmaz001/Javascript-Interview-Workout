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

  insert(index, value) {
    if (index >= this.length) {
      this.append(value);
      return this.printList();
    }

    if (index === 0) {
      this.prepend(value);
      return this.printList();
    }

    const newNode = {
      value,
      next: null,
    };

    const foundNodeForOp = this.findNodeAtIndex(index - 1);
    const holdedNode = foundNodeForOp.next;

    newNode.next = holdedNode;
    foundNodeForOp.next = newNode;

    this.length++;

    return this.printList();
  }

  remove(index) {
    
    if(index > (this.length - 1)) return;

    if (index === 0) {
      this.head = this.head.next;
      return this.printList();
    }

    const foundNodeToMakeCorelation = this.findNodeAtIndex(index-1);
    const nodeTobeDeleted = foundNodeToMakeCorelation.next; 

    foundNodeToMakeCorelation.next = nodeTobeDeleted.next;

    this.length--;

    return this.printList();
  }

  reverse(){
    if(!this.head.next){
      return this.head;
    }

    let first = this.head;
    let second = first.next;

    this.tail = this.head;

    while(second){
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;

      console.log("first:", first);
      console.log("second:", second);
      console.log("temp:", temp);
      console.log(this.printList());
    }

    this.head.next = null;
    this.head = first;

    return this;
  }

  findNodeAtIndex(index) {
    let counter = 0;
    let current = this.head;

    while (counter !== index) {
      current = current.next;
      counter++;
    }

    return current;
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
linkedList.append(99);
linkedList.insert(2, 11);
linkedList.reverse();
