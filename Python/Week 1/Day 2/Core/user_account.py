# class BankAccount:
#     # don't forget to add some default values for these parameters!
#     all_account=[]
#     def init(self, int_rate, balance): 
#         self.int_rate=int_rate 
#         self.balance=balance
#         BankAccount.all_account.append(self)
#         # your code here! (remember, instance attributes go here)
#         # don't worry about user info here; we'll involve the User class soon
#     def deposit(self, amount):
#         # your code here
#         self.balance+=amount
#         return self

#     def withdraw(self, amount):
#         # your code here
#         if amount<=self.balance :
#             self.balance-=amount
#         else : 
#             print("insufficient funds: Charging a $5 fee")
#         return self 

#     def display_account_info(self):
#         # your code here
#         print(f"Balance : ${self.balance}")
#         return self
#     def yield_interest(self):
#         # your code here
#         self.balance=self.balance+ self.balance*self.int_rate
#         return self
#     @classmethod
#     def display_all_account(cls):
#         for i in BankAccount.all_account :print(i.display_account_info())
#         return None

# class User:
#     def init(self, name, email):
#         self.name = name
#         self.email = email
#         self.account[0] = BankAccount(int_rate=0.02, balance=0)

# # other methods
#     def make_deposit(self, amount):
#         # your code here
#         self.account.deposit(amount)
#         return self
#     def make_withdraw(self,amount):
#         self.account.withdraw(amount)
#         return self
#     def display_user_balance(self) :
#         self.account.display_account_info()
#         return self

# user1=User("aouichi","achef123aouichi@gmail.com")
# user1.display_user_balance()
