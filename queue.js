/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    let newNode = new Node(val);
    if(!this.first) {
      this.first= newNode;
      this.last = newNode;
    }else {
      this.last.next=newNode;
      this.last = newNode;
    }
    this.size +=1;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if(!this.first) throw new Error("cant remove from an empty array");
    let node = this.first;
    //if the first and the last is the same one
    if(this.first=this.last){
      //update the last to null
      this.last=null;
    }
    //update the first to be the next one
    this.first = this.first.next;
    //update the size because we remove one
    this.size -=1;
    //return the value of the the node we remove
    return node.val;

  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    return this.first.val;

  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    if(this.size===0){
      return true
    }else{
      return false;
    }
    

  }
}

module.exports = Queue;
