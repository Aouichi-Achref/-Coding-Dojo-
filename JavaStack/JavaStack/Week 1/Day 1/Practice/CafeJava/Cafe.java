public class Cafe {
    public static void main(String[] args) {
        // APP VARIABLES
        // Lines of text that will appear in the app. 
        String generalGreeting = "Welcome to Cafe Java, ";
        String pendingMessage = ", your order will be ready shortly";
        String readyMessage = ", your order is ready";
        String displayTotalMessage = "Your total is $";
        
        // Menu variables (add yours below)
        double mochaPrice = 3.5;
        double dripPrice = 4.5 ;
        double lattePrice = 5.0 ;
        double cappuccinoPrice = 6.5;
    
        // Customer name variables (add yours below)
        String customer1 = "Cindhuri";
        String customer2 = "Sam";
        String customer3 = "Jimmy" ;
        String customer4 = "Noah" ;
    
        // Order completions (add yours below)
        boolean isReadyOrder1 = false;
        boolean isReadyOrder2 = true;
        boolean isReadyOrder3 = false;
        boolean isReadyOrder4 = true;


    

    
        // APP INTERACTION SIMULATION (Add your code for the challenges below)
        // Example:
        System.out.println(generalGreeting + customer1); // Displays "Welcome to Cafe Java, Cindhuri"
        if (isReadyOrder1) {
            System.out.println(readyMessage); 
        }
        else {
            System.out.println(pendingMessage);
        }

    	// ** Your customer interaction print statements will go here ** //
        System.out.println("************************");
        System.out.println(generalGreeting + customer4); // Displays "Welcome to Cafe Java, Cindhuri"
        if (isReadyOrder4) {
            System.out.println("Cappuccino "+readyMessage); 
            System.out.println(displayTotalMessage+cappuccinoPrice); 
        }
        else {
            System.out.println(pendingMessage);
        }


        System.out.println("************************");
        System.out.println(generalGreeting + customer2); // Displays "Welcome to Cafe Java, Cindhuri"
        if (isReadyOrder2) {
            System.out.println("2 lattes "+readyMessage); 
            System.out.println(displayTotalMessage+lattePrice*2); 
        }
        else {
            System.out.println("2 lattes "+pendingMessage);
        }


        System.out.println("************************");
        isReadyOrder2 = !isReadyOrder2;
        System.out.println(generalGreeting + customer2); // Displays "Welcome to Cafe Java, Cindhuri"
        if (isReadyOrder2) {
            System.out.println("2 lattes "+readyMessage); 
            System.out.println(displayTotalMessage+lattePrice*2); 
        }
        else {
            System.out.println("2 lattes "+pendingMessage);
        }
        

        System.out.println("************************");
        System.out.println(generalGreeting + customer3+" you change your order to latte");
        System.out.println("you should be add " +(lattePrice-mochaPrice));


 // Menu variables (add yours below)
        mochaPrice = 4.5;
        dripPrice = 5 ;
        lattePrice = 6.8 ;
        cappuccinoPrice = 8.5;
    
        
    
        // Order completions (add yours below)
        isReadyOrder1 = true;
        isReadyOrder2 = false;
        isReadyOrder3 = true;
        isReadyOrder4 = false;


    

    
        // APP INTERACTION SIMULATION (Add your code for the challenges below)
        // Example:
        System.out.println(generalGreeting + customer1); // Displays "Welcome to Cafe Java, Cindhuri"
        if (isReadyOrder1) {
            System.out.println(readyMessage); 
        }
        else {
            System.out.println(pendingMessage);
        }
    	// ** Your customer interaction print statements will go here ** //
         System.out.println("************************");
        System.out.println(generalGreeting + customer4); // Displays "Welcome to Cafe Java, Cindhuri"
        if (isReadyOrder4) {
            System.out.println("Cappuccino "+readyMessage); 
            System.out.println(displayTotalMessage+cappuccinoPrice); 
        }
        else {
            System.out.println(pendingMessage);
        }
        System.out.println("************************");
        System.out.println(generalGreeting + customer2); // Displays "Welcome to Cafe Java, Cindhuri"
        if (isReadyOrder2) {
            System.out.println("2 lattes "+readyMessage); 
            System.out.println(displayTotalMessage+lattePrice*2); 
        }
        else {
            System.out.println("2 lattes "+pendingMessage);
        }
        System.out.println("************************");
        isReadyOrder2 = !isReadyOrder2;
        System.out.println(generalGreeting + customer2); // Displays "Welcome to Cafe Java, Cindhuri"
        if (isReadyOrder2) {
            System.out.println("2 lattes "+readyMessage); 
            System.out.println(displayTotalMessage+lattePrice*2); 
        }
        else {
            System.out.println("2 lattes "+pendingMessage);
        }

        System.out.println("************************");
        System.out.println(generalGreeting + customer3+" you change your order to latte");
        System.out.println("you should be add " +(lattePrice-mochaPrice));


    }
}