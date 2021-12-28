class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.length = 0;
    this.top = new Node();
    this.bottom = new Node();
  }

  push(value) {
    const newNode = new Node(value);

    if (this.top === null) {
      this.top = newNode;
      this.bottom = this.top;
    } else {
      const holded = this.top;
      this.top = newNode;
      this.top.next = holded;
    }

    this.length++;
    return this;
  }

  peek() {
    return this.top;
  }

  pop() {
    if (this.top === null) {
      return;
    }

    if (this.top === this.bottom) {
      this.bottom = null;
    }

    this.top = this.top.next;
    this.length--;

    return this;
  }
}

const stack = new Stack();
stack.push('Getir');
stack.push('Trendyol');
stack.push('N11');

console.log(stack);

stack.pop();
console.log(stack);
