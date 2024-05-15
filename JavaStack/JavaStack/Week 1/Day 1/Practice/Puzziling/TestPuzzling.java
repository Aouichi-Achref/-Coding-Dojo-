public class TestPuzzling {
    /*
    * This main method will always be the launch point for a Java application
    * For now, we are using the main to test all our 
    * AlfredQuotes methods.
    */
    public static void main(String[] args) {

            Puzzling puzzles=new Puzzling();


  // --------getTenRolls()-----------------

            System.out.println(" --------getTenRolls()-----------------");

            System.out.println(puzzles.getTenRolls());

            System.out.println(" --------getRandomLetter()-----------------");
             System.out.println(puzzles.getRandomLetter());

            System.out.println(" --------getPassword()-----------------");
             System.out.println(puzzles.generatePassword());
            System.out.println(" --------getNewPasswordSet()-----------------");
             System.out.println(puzzles.getNewPasswordSet(3));
    }
    
    }
