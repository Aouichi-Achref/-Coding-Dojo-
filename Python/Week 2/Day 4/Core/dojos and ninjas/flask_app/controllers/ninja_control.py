from flask_app import app 
from flask import render_template,redirect,request,session
from flask_app.models.ninja import Ninja
from flask_app.models.dojo import Dojo


# DiSPALY ROUTE
@app.route('/ninjas')
def ninjas():
    return render_template('ninjas.html',all_dojo=Dojo.get_all())


# ACTION ROUTE
@app.route('/create_ninja', methods=['post'])
def create():
    data={**request.form}
    print(data)
    Ninja.create(data)
    return redirect('/ninjas')

# display route

@app.route('/dojos/<int:id>')
def dojo_ninjas(id):
    data={'dojo_id':id}
    data2={'id':id}
    ninjas=Ninja.get_by_dojo_id(data)
    return render_template('dojo_ninjas.html',ninjas=ninjas,dojo=Dojo.get_by_id(data2))