from flask_app.cofig.mysqlconnection import connectToMySQL
from flask_app import DATABASE
from flask import flash
import re	  
# create a regular expression object that we'll use later
EMAIL_REGEX = re.compile(r"^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$")

class Email :
    def __init__(self,data_dict):
        self.id=data_dict['id']
        self.email=data_dict['email']
        self.created_at=data_dict['created_at']
        self.updated_at=data_dict['updated_at']
    
    @classmethod
    def create(cls,data):
        query="""INSERT INTO emails (email) VALUES (%(email)s)"""
        return connectToMySQL(DATABASE).query_db(query,data)
    

    @classmethod
    def get_all(cls):
        query='''SELECT * FROM emails; '''
        result=connectToMySQL(DATABASE).query_db(query)
        emails=[]
        for row in result :
            emails.append(cls(row))
        print("*-*-*-*-*-*-*-", emails,"*-*-*-*-*-*-*-")
        return emails 
    # ----------
    @classmethod
    def get_by_email(cls,data):
        query='''SELECT * FROM emails WHERE email LIKE %(email)s'''
        results= connectToMySQL(DATABASE).query_db(query,data)
        if results:
            return cls(results[0])
        return False
    
    @staticmethod 
    def validate_email(data_dict):
        is_valid=True
        print("-----------------",data_dict,"-----------------------")
        # print(data_dict['email'])
        #  Email Validation
        if not EMAIL_REGEX.match(data_dict["email"]):
            flash("Email is not valid.")
            is_valid = False
        
        return is_valid



