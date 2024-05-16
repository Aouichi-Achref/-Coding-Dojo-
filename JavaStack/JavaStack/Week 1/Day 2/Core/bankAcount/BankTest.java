public class BankTest {
    public static void main(String[] args){

        //? Creating three instances of the BankAccount class
        BankAccount TigaAccount = new BankAccount(1000, 500);
        BankAccount DaliAccount = new BankAccount(2000, 1000);
        BankAccount ShloomoAccount = new BankAccount(1500, 200);


        //? start of the deposit test
        System.out.println("Deposit Test:");
        //! Depositing money into the BankAccount instance
        TigaAccount.deposit(200, "checking");
        DaliAccount.deposit(300, "savings");
        ShloomoAccount.deposit(100, "checking");
        //! Printing the checking balance
        System.out.println("Account 1 Checking Balance: " + TigaAccount.getCheckingBalance());
        System.out.println("Account 2 Savings Balance: " + DaliAccount.getSavingsBalance());
        System.out.println("Account 3 Checking Balance: " + ShloomoAccount.getCheckingBalance());
        System.out.println("************************");

        //? tart of the withdrawal test
        System.out.println("Withdrawal Test:");
        //! Withdrawing money from each BankAccount instance
        TigaAccount.withdraw(50, "checking");
        DaliAccount.withdraw(200, "savings");
        ShloomoAccount.withdraw(300, "checking");

        //! Printing the checking balance after withdrawal
        System.out.println("Account 1 Checking Balance: " + TigaAccount.getCheckingBalance());
        System.out.println("Account 2 Savings Balance: " + DaliAccount.getSavingsBalance());
        System.out.println("Account 3 Checking Balance: " + ShloomoAccount.getCheckingBalance());
        System.out.println("************************");




    }
}
