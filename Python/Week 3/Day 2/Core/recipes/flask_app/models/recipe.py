from flask_app.cofig.mysqlconnection import connectToMySQL
from flask_app import DATABASE
from flask import flash
import re

class Recipe:
    def __init__(self,data) :
        self.id=data["id"]
        self.name=data["name"]
        self.description=data["description"]
        self.instructions=data["instructions"]
        self.duration=data["duration"]
        self.date=data["date"]
        self.created_at=data["created_at"]
        self.updated_at=data["updated_at"]
        self.user_id=data["user_id"] 
        self.first_name=data["first_name"]
    
    @classmethod
    def create(cls, data):
        query="INSERT INTO recipes (name,description,instructions,duration,date,user_id) VALUES (%(name)s,%(description)s,%(instructions)s,%(duration)s,%(date)s,%(user_id)s)"
        return connectToMySQL(DATABASE).query_db(query,data)
    

    @classmethod
    def get_all(cls):
        query="SELECT recipes.*,users.first_name FROM recipes JOIN users ON users.id=recipes.user_id"

        result= connectToMySQL(DATABASE).query_db(query)
        recipes=[]
        print("+++++++++++++++++++++++++++++++++++++++++++++")
        print(result)
        for row in result:
            recipes.append(cls(row))
      
        return recipes
    



    @classmethod
    def get_by_id(cls, data):
        query="SELECT recipes.*,users.first_name FROM recipes JOIN users ON users.id=recipes.user_id WHERE recipes.id=%(id)s"

        result= connectToMySQL(DATABASE).query_db(query,data)
        return cls(result[0])
    
    @classmethod
    def delete(cls, data):
        query="DELETE FROM recipes WHERE id=%(id)s"

        return connectToMySQL(DATABASE).query_db(query,data)
    
    @classmethod
    def edit(cls,data):
        query="""
                UPDATE recipes 
                SET name = %(name)s, description=%(description)s,instructions=%(instructions)s,duration=%(duration)s,date=%(date)s
                WHERE id=%(id)s
              """
        return connectToMySQL(DATABASE).query_db(query,data)
    
    @staticmethod
    def validate(data):
        is_valid = True

        if len(data["name"]) < 3:
            is_valid = False
            flash("name Required !")
        if len(data["description"]) < 3:
            is_valid = False
            flash("description Required !")
        if len(data["instructions"]) < 3:
            flash("instructions Required !")
            is_valid = False
        return is_valid
    