from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import DATABASE


class Ninja:
    def __init__(self, data_dict):
        self.id=data_dict['id']
        self.dojo_id=data_dict['dojo_id']
        self.first_name=data_dict['first_name']
        self.last_name=data_dict['last_name']
        self.age=data_dict['age']
       
    @classmethod
    def get_all(cls):
        query='''SELECT * FROM ninjas'''
        results=connectToMySQL(DATABASE).query_db(query)
        all_ninjas=[]
        for result in results :
            all_ninjas.append(cls(result))
        return all_ninjas

    @classmethod 
    def create(cls,data):
        query=''' INSERT INTO ninjas (dojo_id,first_name,last_name,age)
                VALUES (%(dojo_id)s,%(first_name)s,%(last_name)s,%(age)s);'''
        return connectToMySQL(DATABASE).query_db(query,data)
    
    @classmethod
    def get_by_dojo_id(cls,data):
        query='''SELECT * FROM ninjas WHERE dojo_id=%(dojo_id)s'''
        results=connectToMySQL(DATABASE).query_db(query,data)
        all_ninjas=[]
        for result in results :
            all_ninjas.append(cls(result))
        return all_ninjas