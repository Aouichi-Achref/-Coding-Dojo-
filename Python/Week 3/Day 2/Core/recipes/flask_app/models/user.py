from flask_app.cofig.mysqlconnection import connectToMySQL
from flask_app import DATABASE
from flask import flash
import re

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$') 

class User:
    def __init__(self,data) -> None:
        self.id = data["id"]
        self.first_name=data["first_name"]
        self.last_name=data["last_name"]
        self.email=data["email"]
        self.password=data["password"]
        self.created_at=data["created_at"]
        self.updated_at=data["updated_at"]

    
    @classmethod
    def create_user(cls, data):
        query="INSERT INTO users (first_name,last_name,email,password) VALUES (%(first_name)s,%(last_name)s,%(email)s,%(password)s)"

        return connectToMySQL(DATABASE).query_db(query,data)
    
    @classmethod
    def get_by_id(cls, data):
        query="SELECT * FROM users WHERE id=%(id)s"

        result= connectToMySQL(DATABASE).query_db(query,data)
        return cls(result[0])
    
    @classmethod
    def get_by_email(cls, data):
        query="SELECT * FROM users WHERE email=%(email)s"
        result = connectToMySQL(DATABASE).query_db(query,data)

        if (result) :
            return cls(result[0])
        return False
    
    @staticmethod
    def validate(data):
        is_valid = True

        if len(data["first_name"]) < 1:
            is_valid = False
            flash("first_name Required !", "reg")
        if len(data["last_name"]) < 1:
            is_valid = False
            flash("last_name Required !", "reg")
        if len(data["email"]) < 1:
            flash("email Required !")
            is_valid = False
        elif not EMAIL_REGEX.match(data["email"]):
            flash("Invalid email address", "reg")
            is_valid = False
        else:
            data_for_email = {"email": data["email"]}
            potential_user = User.get_by_email(data_for_email)
            if potential_user:
                is_valid = False
                flash("email already taken, hopefully by you! ", "reg")
        if len(data["password"]) < 1:
            is_valid = False
            flash("password Required", "reg")
        elif not data["password"] == data["confirm_password"]:
            is_valid = False
            flash("passwords don't match!", "reg")
        return is_valid