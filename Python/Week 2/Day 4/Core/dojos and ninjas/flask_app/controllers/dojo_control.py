from flask_app import app 
from flask import render_template,redirect,request,session
from flask_app.models.dojo import Dojo

@app.route('/')
def home():
    return redirect('/dojos')
@app.route('/dojos')
def dojo_home():
    return render_template('dojos.html',all_dojo=Dojo.get_all())

@app.route('/create',methods=['post'])
def create_dojo():
    data={**request.form}
    Dojo.create(data)
    return redirect('/dojos')