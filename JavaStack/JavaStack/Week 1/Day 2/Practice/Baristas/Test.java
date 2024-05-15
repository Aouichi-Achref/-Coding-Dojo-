import java.util.ArrayList;
public class Test {
    public static void main (String[] args){

        Item Pizza = new Item("pizza",10);
        Item Burger = new Item("burger",15);
        Item Sandwich = new Item("sandwich",8.5);
        Item Pepsi =new Item("pepsi",5.8);
        Item Icecream= new Item("icecream",2.5);


        Order order1=new Order();
        order1.addItem(Pizza);
        order1.addItem(Pepsi);

        Order order2=new Order();
        order2.addItem(Burger);
        order2.addItem(Icecream);

        Order Dali=new Order("Dali");
        Dali.addItem(Pizza);
        Dali.addItem(Sandwich);
        Dali.addItem(Pepsi);

        Order Tiga=new Order("Tiga");
        Tiga.addItem(Pizza);
        Tiga.addItem(Burger);
        Tiga.addItem(Icecream);

        Order Mostapha=new Order("Mostapha");
        Mostapha.addItem(Pepsi);
        Mostapha.addItem(Icecream);


        order1.getStatusMessage();
        order2.getStatusMessage();
        Tiga.getStatusMessage();
        Mostapha.getStatusMessage();
        order1.setReady(true);
        order2.setReady(true);
        Tiga.setReady(true);
        Mostapha.setReady(true);
        order1.getStatusMessage();
        order2.getStatusMessage();
        Tiga.getStatusMessage();
        Mostapha.getStatusMessage();

        System.out.println("=====Dali=========Total======");
        System.out.println(Dali.getOrderTotal());
        System.out.println("====Order1========Total========");
        System.out.println(order1.getOrderTotal());
        System.out.println("====Mostapha======Total==========");
        System.out.println(Mostapha.getOrderTotal());
        System.out.println("====================");
        System.out.println("====================");
        order1.display();
        System.out.println("====================");
        order2.display();
        System.out.println("====================");
        Dali.display();
        System.out.println("====================");
        Tiga.display();
        System.out.println("====================");
        Mostapha.display();
        System.out.println("====================");
    }
}