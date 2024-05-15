import java.util.ArrayList;

public class Order {
    private String name ;
    private boolean ready ;
    private ArrayList<Item> items ;

    //? CONSTRUCTOR with no return type and same name "Order"
    public Order(){
        this.name="Zombie";
        this.items = new ArrayList<>();
    }
    //? CONSTRUCTOR with no return type and same name "Order" but after Overloading
    public Order(String name){
        this.name=name;
        this.items = new ArrayList<>();
    }

    //? MOST OF THE WORK
    //! add item Methods
    public void addItem(Item item){
        items.add(item);
    }

    //! getStatusMessage Methods
    public String getStatusMessage(){
        //?ready=1
        if (this.ready) {return "Your order is ready.";}
        //?ready=0
        else {return "Thank you for waiting. Your order will be ready soon.";}
    }

    //!getOrderTotal Methods
    public double getOrderTotal(){
        double tolal=0;
        for (int i=0; i<this.items.size(); i++){
        //? add to total ,jib il Price mil item bill GETTERS baad ma tjib il item mil ArrayList
            tolal+= this.items.get(i).getPrice();
            }
        return tolal;
    }

    //! display Methods
    public void display(){
        System.out.println("Customer Name: "+this.name);
        for (int i=0; i<this.items.size(); i++){
            System.out.println(this.items.get(i).getName()+"==> $"+this.items.get(i).getPrice());
            }
        System.out.println("Total==> $"+getOrderTotal());
    }

    //! GETTERS & SETTERS
    //? NAME
    public void setName(String name){
        this.name=name;
    }
    public String getName (){
        return this.name;
    }

    //? READY
    public void setReady(boolean ready){
        this.ready=ready;
    }
    public boolean getReady(){
        return this.ready;
    }


    //?ITEMS
        public void setItems(ArrayList<Item> items){
        this.items=items ;
    }
    public ArrayList<Item> getItems(){
        return this.items;
    }



}