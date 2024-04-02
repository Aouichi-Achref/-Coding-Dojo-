from flask_app import app
from flask import render_template, redirect, request, flash, session
from flask_app.models.dojo import Dojo


@app.route('/result' , methods=["post"])          
def save():
        # print(request.form)
    if not Dojo.validate(request.form):
        return redirect("/")
    data={**request.form}
    Dojo.create(data)
    return render_template("survey.html",data=data)