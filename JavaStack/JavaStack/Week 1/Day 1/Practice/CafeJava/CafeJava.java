
public class CafeJava {
    public static void main(String[] args) {
        // APP VARIABLES
        // Lines of text that will appear in the app. 
        String generalGreeting = "Welcome to Cafe Java, ";
        String pendingMessage = ", your order will be ready shortly";
        String readyMessage = ", your order is ready";
        String displayTotalMessage = "Your total is $";
        
        // Menu variables (add yours below)
        //! double mochaPrice = 3.5; not used yet
        double dripCoffee = 6.5;
        double latte = 4.5;
        double cappuccino = 6.5;
    
        // Customer name variables (add yours below)
        String customer1 = "Cindhuri🦓";
        String customer2 ="Sam🦁";
        String customer3 ="Jimmy🐉";
        String customer4 ="Noah🐕";
    
        // Order completions (add yours below)
        boolean isReadyOrder1 = false;
        boolean isReadyOrder2 = true;
        //! boolean isReadyOrder3 = false; not used yet
        boolean isReadyOrder4 = true;
    
        // APP INTERACTION SIMULATION (Add your code for the challenges below)
        // Example:
        System.out.println("=============🦓============"); 
        System.out.println(generalGreeting + customer1); // Displays "Welcome to Cafe Java, Cindhuri"
    	// ** Your customer interaction print statements will go here ** //
        if(isReadyOrder1){
            System.out.println(customer1+readyMessage);
        }else {
            System.out.println(customer1+ pendingMessage);
        }
        System.out.println("=============🐕============"); 
        System.out.println(generalGreeting + customer4); // Displays "Welcome to Cafe Java, "
        // ** Your customer interaction print statements will go here ** //
        if(isReadyOrder4){
            System.out.println(customer4+readyMessage);
            System.out.println(displayTotalMessage+cappuccino);
        }else {
            System.out.println(customer4+ pendingMessage);
        }

        System.out.println("============🦁============="); 
        System.out.println(generalGreeting + customer2); // Displays "Welcome to Cafe Java, Cindhuri"
        // ** Your customer interaction print statements will go here ** //
        System.out.println(customer2+ displayTotalMessage+latte*2);
        if(isReadyOrder2){
            System.out.println(customer2+readyMessage);

        }else{
            System.out.println(customer2+ pendingMessage);
        }
        System.out.println("===========🐉=============="); 
        System.out.println(generalGreeting + customer3); // Displays "Welcome to Cafe Java, Cindhuri"
        // ** Your customer interaction print statements will go here ** //
        System.out.println(customer3 +" "+displayTotalMessage+""+ (dripCoffee+latte));
        System.out.println("✌️✌️=========================✌️✌️"); 
    }
}
