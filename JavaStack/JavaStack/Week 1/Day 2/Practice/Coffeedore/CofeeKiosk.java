import java.util.ArrayList;


public class CofeeKiosk {
    private ArrayList<Item> menu;
    private ArrayList<Order> orders;
    //
    public CofeeKiosk(){
        this.menu=new ArrayList<>();
        this.orders=new ArrayList<>();
    }
    public void addMenuItem(Item item){
        this.menu.add(item);
    }
    public void displayMenu(){
        for (int i=0; i<this.menu.size(); i++){
            System.out.println(i+" "+this.menu.get(i).getName()+" -- $"+this.menu.get(i).getPrice());
            }
    }
    //?add from console
    public void addMenuItemByInput(){
        //? CofeBusinessLogic bil fazet
        System.out.println("Please enter item name :");
        String item = System.console().readLine();
        System.out.println("Please enter the price for item:");
        String price = System.console().readLine();
        //? possible
    /** double priceDouble=Double.parseDouble(price);===========
    ==== addMenuItem(new Item(item,priceDouble));=========== **/
        addMenuItem(new Item(item,Double.parseDouble(price)));
    }

        public void newOrder() {
        //? CofeBusinessLogic bil fazet
        System.out.println("Please enter customer name for new order:");
        String name = System.console().readLine();
        this.orders.add(new Order(name));
        // lazem ychouf il MENU
        displayMenu();
    	//? pick with int wella quit with q  
        System.out.println("Please enter a menu item index or q to quit:");
        String drinkNumber = System.console().readLine();
        
        //! while loop what they want,what they want🎶🎶
        //? work until drinkNumber = q
        while(!drinkNumber.equals("q")) {
            //? A3tih
            this.orders.get(this.orders.size()-1).addItem(this.menu.get(Integer.parseInt(drinkNumber)));
            //? if want somthing else or not
            System.out.println("enter a new item index or q to quit:");
            drinkNumber = System.console().readLine();
        }
        //
        this.orders.get(this.orders.size()-1).display();
    }
}
