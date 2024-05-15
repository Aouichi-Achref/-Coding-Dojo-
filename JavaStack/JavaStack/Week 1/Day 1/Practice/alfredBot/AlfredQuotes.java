import java.util.Date;
public class AlfredQuotes {
    
    public String basicGreeting() {
        System.out.println("--------------------");
        return ("Hello, lovely to see you. How are you?");
    }
    
    public String guestGreeting(String name) {
        return "Greetings "+name;
    }
    
    public String dateAnnouncement() {
        Date currentDate= new Date();
        return "today is "+currentDate;
    }
    
    public String respondBeforeAlexis(String conversation) {
        int alexis=conversation.indexOf("Alexis");
        int alfred=conversation.indexOf("Alfred");
        if(alexis>=0){
            return "Right away, sir. She certainly isn't sophisticated enough for that.\n=======================" ;
        }
        if(alfred>0){
            return "At your service. As you wish, naturally.\n =======================";
        }
        return "Right. And with that I shall retire. \n ================";
    }
    
}