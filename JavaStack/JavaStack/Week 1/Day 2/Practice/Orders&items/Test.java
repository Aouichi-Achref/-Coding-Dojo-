import java.util.ArrayList;
public class Test {
    public static void main (String[] args){
        Item item1 =new Item();
        item1.name="mocha";
        item1.price=2.5;

        Item item2 =new Item();
        item2.name="latte";
        item2.price=3.5;

        Item item3 =new Item();
        item3.name= "drip coffee";
        item3.price=4.5;

        Item item4 =new Item();
        item4.name= "cappuccino";
        item4.price=5.5;


        Order order1 =new Order();
        order1.name="Cindhuri";

        Order order2 =new Order();
        order2.name="Jimmy";

        Order order3 =new Order();
        order3.name="Noah";

        Order order4 =new Order();
        order4.name="Sam";



        System.out.println(order1);
        System.out.println(order1.name+ " "+order1.total+ " "+order1.ready+" "+order1.items); 

        order2.items.add(item1.name);
        order2.total+=item1.price;
        System.out.println(order2.name+ " "+order2.total+ " "+order2.ready+" "+order2.items);

        order3.items.add(item4.name);
        order3.total+=item4.price;
        System.out.println(order3.name+ " "+order3.total+ " "+order3.ready+" "+order3.items);

        order4.items.add(item2.name);
        order4.total+=item2.price;
        System.out.println(order4.name+ " "+order4.total+ " "+order4.ready+" "+order4.items);

        order1.ready=true ;
        System.out.println(order1.name+ " "+order1.total+ " "+order1.ready+" "+order1.items);

        order4.items.add(item2.name);
        order4.items.add(item2.name);
        order4.total+=(item2.price*2);
        System.out.println(order4.name+ " "+order4.total+ " "+order4.ready+" "+order4.items);

        order2.ready=true ;
        System.out.println(order2.name+ " "+order2.total+ " "+order2.ready+" "+order2.items);
    }
}