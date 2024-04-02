from flask_app.cofig.mysqlconnection import connectToMySQL
from flask_app import DATABASE
from flask import flash
import re

EMAIL_REGEX = re.compile(r"^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$")

class Dojo:
    def __init__(self, data) -> None:
        self.id=data["id"]
        self.name=data["name"]
        self.location=data["location"]
        self.language=data["language"]
        self.comment=data["comment"]
        self.created_at=data["created_at"]
        self.updated_at=data["updated_at"]



    @classmethod
    def create(cls, data):
        query = """
                  INSERT INTO dojos (name, location, language, comment)
                  VALUES (%(name)s,%(location)s,%(language)s,%(comment)s);
                """

        return connectToMySQL(DATABASE).query_db(query, data)
    



    @staticmethod
    def validate(data):
        is_valid = True

        if len(data["name"]) < 1:
            is_valid = False
            flash("name is Required !", "reg")
        
        if len(data["location"]) < 1:
            is_valid = False
            flash("location is Required !", "reg")

        if len(data["language"]) < 1:
            is_valid = False
            flash("language is Required !", "reg")

        if len(data["comment"]) < 1:
            is_valid = False
            flash("Comment mustbe at least 3 characters", "reg")
     
        return is_valid