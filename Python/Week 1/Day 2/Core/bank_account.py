


class BankAccount:
    
    all_account=[]
    
    def __init__(self,int_rate,balance): 
        self.int_rate=int_rate
        self.balance=balance
        BankAccount.all_account.append(self)
    
    def deposit(self, amount):
        self.balance+=amount
        return self

    def withdraw(self, amount):
        if(self.balance<amount):
            print("Insufficient funds: Charging a $5 fee")
        else:
            self.balance-=amount
        return self

    def display_account_info(self):
        print(f"Balance: {self.balance}$")
        return self
        
    def yield_interest(self):
        if(self.balance>=0):
            self.balance*=self.int_rate
        return self
    
class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account = BankAccount(int_rate=0.02, balance=0)
    
    # other methods
    
    def make_deposit(self, amount):
        self.account.deposit(amount)
        return self
    def make_withdrow(self,amount):
        self.account.withdraw(amount)
        print(f"Balance: {self.account.balance}")
        return self
    
    def make_transfert(self,amount,other_user):
        self.account.balance-=amount
        other_user.account.balance+=amount

user1=User('achref','aouichi').account(0.9,100)


    
    













# account1=BankAccount(0.75,500)
# account2=BankAccount(0.99,800)

# account1.deposit(20).deposit(20).deposit(20).withdraw(60).yield_interest()
# account1.display_account_info()

# account2.deposit(20).deposit(20).withdraw(10).withdraw(10).withdraw(10).withdraw(10).yield_interest()
# account2.display_account_info()

