from flask_app.cofig.mysqlconnection import connectToMySql
from flask_app import DATABASE
from flask import flash

class Author:
    def __init__(self,data) :
        self.id=data['id']
        self.name=data['name']


    @classmethod
    def add_author(cls, data):
        query = """
        INSERT INTO pokemon (name) 
        VALUES (%(name)s);
        """
        return connectToMySql(DATABASE).query_db(query, data)
    
    @classmethod
    def get_by_id(cls, data):
        query = """
        SELECT * FROM authors WHERE id = %(id)s;
        """
        result = connectToMySql(DATABASE).query_db(query,data)
        return cls(result[0])
    
    @classmethod
    def get_all_authors(cls, data):
        query = """
        SELECT * FROM authors;
        """
        all_authors=[]
        result = connectToMySQL(DATABASE).query_db(query,data)
        for row in result:
            all_authors.append(cls(row))
        return all_authors