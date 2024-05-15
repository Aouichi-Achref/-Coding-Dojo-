import java.util.ArrayList;
public class CafeUtil{
    public int getStreakGoal(int numberOfWeeks){
        int sum=0;

        for (int i=1;i<=numberOfWeeks;i++){
            sum+=i;
        }
        return sum;

    }

    public double getOrderTotal(double[] prices){
        double sum=0;

        for (int i=0;i<prices.length;i++){
            sum+=prices[i];
        }
        return sum;
    }

    public void displayMenu(ArrayList<String> menuItems){
        for(int i=0;i<menuItems.size();i++){
        
        System.out.println(i+" "+menuItems.get(i));
        }
    }
    public void printPriceChart(/*String product, double price, int maxQuantity*/){

        System.out.println("Please enter Product Name:");
        String Productname = System.console().readLine();

        System.out.println("Please enter quantity:");
        String QuantityAsString = System.console().readLine();//! now need to convert to int
        int Quantity=Integer.parseInt(QuantityAsString);

        System.out.println("now worker will put price :");
        String PriceAsString = System.console().readLine();//! now need to convert to double
        Double Price=Double.parseDouble(PriceAsString);

            System.out.println(Productname);
            for(int i=0;i<Quantity;i++){
                if(i<1){
                    System.out.println(i+1 +" - $"+ (i+1)*Price);
                }else if(i>=1){
                    System.out.println(i+1 +" - $"+ ((i+1)*Price-(i*0.5)));
                }
            }
    }
    public void addCustomer(ArrayList<String> customers){
        System.out.println("Please enter your name:");
        String username = System.console().readLine();
        System.out.println("Hello : "+username);
        System.out.printf("There are "+(customers.size())+" people in front of you \n");
        customers.add(username);
        System.out.println(customers);
    }
}