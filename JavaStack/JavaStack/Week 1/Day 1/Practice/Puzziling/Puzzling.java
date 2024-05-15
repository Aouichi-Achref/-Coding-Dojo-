import java.util.Random;
import java.util.ArrayList;

public class Puzzling{

    public ArrayList<Integer> getTenRolls(){
        Random random=new Random();

        ArrayList<Integer> myArray = new ArrayList<Integer>();

        for(int i=0;i<10;i++){
            myArray.add(random.nextInt(20)+1);
        }

    return myArray;

    }

    public char getRandomLetter(){
        char[] alphabetArray = new char[26];

        // Populate the array with the alphabet using a loop
        char currentChar = 'A'; // Starting from 'A'

        for (int i = 0; i < 26; i++) {
            alphabetArray[i] = currentChar;
            currentChar++; // Move to the next character in the ASCII sequence
        }

        Random random = new Random();

    return alphabetArray[random.nextInt(26)+1];
    }

    public String generatePassword(){
        String password="";
        for (int i = 0; i < 8; i++) {
            password=password+getRandomLetter();
            
        }
        return password;
    }
    public ArrayList<String> getNewPasswordSet(int set){
        ArrayList<String> myArray = new ArrayList<String>();

         for (int i = 0; i < set; i++) {
       
        
        String password="";
        for (int j = 0; j < 8; j++) {
            password=password+getRandomLetter();
        }
        myArray.add(password);
        }
        return myArray;
    }

}