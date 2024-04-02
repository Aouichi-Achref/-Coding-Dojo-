

user_data={}

class user:

    def __init__(self,first_name_value,last_name_value,email_value,age_value):
        self.first_name=first_name_value
        self.last_name=last_name_value
        self.email=email_value
        self.age=age_value
        self.is_rewards_member=False
        self.gold_card_points = 0

    def display_info(self):
        print(f"user first_Name : {self.first_name}\nlast_name : {self.last_name}\nis member??{self.is_rewards_member}\nemail : {self.email}\nage : {self.age}\npoints :{self.gold_card_points}\n****")
        return self
    
    def enroll(self):
        self.is_rewards_member = True
        self.gold_card_points+=200
        return self
    
    def spend_points(self, amount):
        self.gold_card_points-=amount
        return self


user1=user('ach','aouichi','sdd@sd',30)
user1.display_info().enroll().spend_points(20).display_info()
