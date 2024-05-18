import java.util.ArrayList;

public class Order{
    private String name;
    private boolean ready;
    private ArrayList<Item> items ;


    public Order(String name){
        this.name=name;
        this.items = new ArrayList<>();
    }
    public void addItem(Item item){
        items.add(item);
    }
    public double getOrderTotal(){
        double total=0;
        for(int i=0;i<this.items.size();i++){
            total+=this.items.get(i).getPrice();
        }
        return total;
    }
    public void display(){
        System.out.println("=======================================");
        System.out.println("hello dear Customer "+this.name);
        for (int i=0; i<this.items.size();i++){
            System.out.println(this.items.get(i).getName()+" --$"+this.items.get(i).getPrice());
        }
        System.out.println("Total: $"+getOrderTotal());
    }

    //! GETTERS & SETTERS
    public String getName(){
        return this.name;
    }
    public void setName(String name){
        this.name=name;
    }

    public boolean getReady(){
        return this.ready;
    }
    public void setReady(boolean ready){
        this.ready=ready;
    }
    public ArrayList<Item> getItems(){
        return this.items;
    }
    public void setItems(ArrayList<Item> items){
        this.items=items ;
    }
}
