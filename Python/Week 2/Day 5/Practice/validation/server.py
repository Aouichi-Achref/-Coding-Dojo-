from flask_app import app
from flask import render_template,request,session,redirect
from flask_app.controllers import dojos


@app.route('/')          
def index():
    return render_template("index.html")



@app.route('/home')          
def home():
    return render_template("index.html")



if __name__=="__main__":   
    app.run(debug=True)    
