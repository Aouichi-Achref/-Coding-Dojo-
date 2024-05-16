public class BankAccount {
    //? MEMBER VARIABLES
    private double checkingBalance;
    private double savingsBalance;

    private static int accounts;
    private static double totalMoney; // refers to the sum of all bank account checking and savings balances

    //? CONSTRUCTOR
    public BankAccount(double checkingBalance, double savingsBalance){
        this.checkingBalance=checkingBalance ;
        this.savingsBalance=savingsBalance;
        accounts++;
        totalMoney =(checkingBalance+savingsBalance);
    }
    //? GETTERS
    //! for checking, savings, accounts, totalMoney
    public double getCheckingBalance() {
        return this.checkingBalance;
    }

    public double getSavingsBalance() {
        return this.savingsBalance;
    }

    public double getTotalMoney() {
        return totalMoney;
    }
    public int getAccount(){
        return accounts;
    }

    //? METHODS
    //! Deposit method    
    public void deposit(double amount, String accountType) {
        if (accountType.equalsIgnoreCase("checking")) {
            checkingBalance += amount;
        } else if (accountType.equalsIgnoreCase("savings")) {
            savingsBalance += amount;
        }
        //! Update totalMoney
        totalMoney += amount; 
    }


    //? withdraw 
    public void withdraw(double amount, String accountType) {
        if (accountType.equalsIgnoreCase("checking")) {
            if (amount <= checkingBalance) {
                checkingBalance -= amount;
                totalMoney -= amount; 
            } else {
                System.out.println("Insufficient funds in checking account.");
            }
        } else if (accountType.equalsIgnoreCase("savings")) {
            if (amount <= savingsBalance) {
                savingsBalance -= amount;
                totalMoney -= amount;
            } else {
                System.out.println("Insufficient funds in savings account.");
            }
        }
    }
    //? getBalance
    public void getBalance() {
        System.out.println("Checking Balance: " + checkingBalance);
        System.out.println("Savings Balance: " + savingsBalance);
    }

}
