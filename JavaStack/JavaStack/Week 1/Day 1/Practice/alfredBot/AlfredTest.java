public class AlfredTest {

    public static void main(String[] args) {
        AlfredQuotes alfredBot = new AlfredQuotes();
        
        String tryGreeting = alfredBot.basicGreeting();
        String tryGuestGreeting = alfredBot.guestGreeting("Beth Kane");
        String tryDateAnnouncement = alfredBot.dateAnnouncement();
        
        String alexisTry = alfredBot.respondBeforeAlexis(
                            "Alexis! Play some low-fi beats."
                            );
        String alfredTry = alfredBot.respondBeforeAlexis(
            "I can't find my yo-yo. Maybe Alfred will know where it is.");
        String notRelevantTry = alfredBot.respondBeforeAlexis(
            "Maybe that's what Batman is about. Not winning. But failing.."
        );
        
        System.out.println(tryGreeting);
        
        System.out.println(tryGuestGreeting);
        System.out.println(tryDateAnnouncement);
        System.out.println(alexisTry);
        System.out.println(alfredTry);
        System.out.println(notRelevantTry);
    }
}
