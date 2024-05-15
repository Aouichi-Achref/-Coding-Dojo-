public class Item{
    // MEMBER VARIABLES
    private String name;
    private double price;

    //! CONSTRUCTOR with no return type and same name "Item"
    public Item(String name,double price){
        this.name=name;
        this.price=price;
    }

    //! GETTERS & SETTERS
    //? for name
    public void setName(String name){
        this.name=name;
    }
    public String getName (){
        return this.name;
    }
    // ?  for Price
    public double getPrice (){
        return this.price;
    }
    public void setPrice(double price){
        this.price=price;
    }
}
