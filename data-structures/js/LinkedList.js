
class LinkedList {

  // #node;
  // #first;
  // #last;
  // #sizes;

  constructor(){
    this.sizes = 0;
    this.first = null;
    this.last = null;
    this.node = null;
  }

  addLast(item) {
    this.node = { value: item, next: null }

    if (this.isEmpty()) {
      // passing by ref
      // both first and last variables are referencing the same object in the memory:
      this.first = this.last = this.node;
    } else {
      // passing by ref;
      this.last.next = this.node;
      // passing by value
      this.last = this.node;
    }
    this.sizes++;
  }

  addFirst(item) {
    this.node = { value: item, next: null }
    if (this.isEmpty()) {
      this.first = this.last = this.node;
    } else {
      node.next = this.first;
      this.first = this.node;
    }
    this.sizes++;
  }

  removeFirst() {
    if (this.isEmpty()) {
      throw 'No element'
    }

    if (this.first == this.last) {
      this.first = this.last = null
    } else {
      let second = this.first.next;
      this.first.next = null;
      this.first = second;
    }
    this.sizes--
  }

  removeLast(){
    if (this.isEmpty()) {
      throw 'No element'
    }

    if (this.first == this.last) {
      this.first = this.last = null
    } else {
      let previous = this.getPrevious(last);
      previous.next = null;
      this.last = previous;
    }
    this.sizes--
  }

  getPrevious(node){
    let current = this.first;
    while (current != null) {
      if (current.next == node) return current
      current = current.next
    }
    return null;
  }

  isEmpty() {
    return this.first == null;
  }

  contains(item) {
    let current = this.first;

    while (current != null) {
      if (current.value == item) return true;
      current = current.next;
    }
    return false;
  }

  getSizes(){
    return this.sizes;
  }

  indexOf(item) {
    let index = 0;
    let current = this.first;

    while (current != null) {

      if (current.value == item) return index;
      current = current.next;
      index++;
    }

    return -1;
  }

  reverse(){
    // [10 -> 20 -> 30]
    //   p    c    n

    let previous = this.first;
    let current = this.first.next;


    while(current != null){
      let next = current.next;
      // n = 30
      current.next = previous;
      // [ 10 -> 20 -> 30 ] to [ 10 <- 20 -> 30]
      previous = current;
      // p = 20
      current = next;
      // c = 30
    }
    this.last = this.first;
    this.last.next = null;
    this.first = previous;
  }

}

const list = new LinkedList();

list.addLast(10);
list.addLast(20);
list.addLast(30);
// console.log(list.contains(30));
// console.log(list.indexOf(40));
// list.removeFirst();
// list.removeFirst();
// list.removeFirst();
// list.removeFirst();
// list.removeFirst();
// list.removeFirst();
// list.removeFirst();
// list.addFirst(5);
list.reverse();
console.log({first: list.first});
console.log({last: list.last});

// var node = {value: 10};
// var a = node;
// var b = node;

// b.next = {value: 20, next: null};
// b = {value: 20, next: null};

// console.log(a , b);