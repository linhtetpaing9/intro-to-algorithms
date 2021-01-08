import java.util.Arrays;

public class Main {
  public static void main(String[] args){
    LinkedList list = new LinkedList();
   
    // list.addLast(20);
    // list.addLast(30);
    // list.addFirst(30);
    // list.addFirst(20);
    // list.addFirst(10);
    list.addLast(10);
    list.addLast(20);
    list.addLast(30);
    list.addLast(40);
    // var array = list.toArray();
    // list.removeLast();
    // System.out.println(Arrays.toString(array));
    list.reverse();
    // System.out.println(list);
  }
}