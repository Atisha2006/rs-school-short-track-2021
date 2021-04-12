const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  get size() {
    return this.length;
  }

  enqueue(element) {
    const listNode = new ListNode(element);
    if (this.last === null) {
      this.last = listNode;
    } else {
      this.last.next = listNode;
      this.last = listNode;
    }
    if (this.first === null) {
      this.first = listNode;
    }
    this.length++;
  }

  dequeue() {
    const tmp = this.first.value;
    if (this.first !== null) {
      this.first = this.first.next;
      this.length--;
    }
    return tmp;
  }
}

module.exports = Queue;
