import java.util.NoSuchElementException;

public class LinkedList {
  private class Node {
    private int value;
    private Node next;

    public Node(int value) {
      this.value = value;
    }
  }

  private Node first;
  private Node last;
  private int size;

  public void addFirst(int item) {
    var node = new Node(item);

    if (isEmpty())
      first = last = node;
    else {
      node.next = first;
      first = node;
    }
    size++;
  }

  public void removeFirst() {
    if (isEmpty()) {
      throw new NoSuchElementException();
    }

    if (first == last) {
      first = last = null;
    } else {
      var second = first.next;
      first.next = null;
      first = second;
    }
    size--;
  }

  public void removeLast() {

    if (isEmpty()) {
      throw new NoSuchElementException();
    }

    if (first == last) {
      first = last = null;
    } else {
      var previous = getPreviousNode(last);
      previous.next = null;
      last = previous;
    }

    size--;
  }

  private Node getPreviousNode(Node node) {
    var current = first;

    while (current != null) {
      if (current.next == node)
        return current;
      current = current.next;
    }
    return null;
  }

  public int indexOf(int item) {
    var current = first;
    int index = 0;

    while (current != null) {
      if (current.value == item) {
        return index;
      }
      current = current.next;
      index++;
    }
    return -1;
  }

  public boolean contains(int item) {
    return indexOf(item) != -1;
  }

  public boolean isEmpty() {
    return first == null;
  }

  public void addLast(int item) {
    var node = new Node(item);

    if (isEmpty())
      first = last = node;
    else {
      // thinking from first item step by step
      last.next = node;
      last = node;
    }
    size++;
  }

  public int size() {
    return size;
  }

  public int[] toArray() {
    int[] array = new int[size];
    var current = first;
    int index = 0;

    while (current != null) {
      array[index++] = current.value;
      current = current.next;
    }

    return array;
  }

  public void reverse() {
    if(isEmpty()) return;

    var previous = first;
    var current = first.next;
    while (current != null) {
      var next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }
    last = first;
    last.next = null;
    first = previous;
  }

}