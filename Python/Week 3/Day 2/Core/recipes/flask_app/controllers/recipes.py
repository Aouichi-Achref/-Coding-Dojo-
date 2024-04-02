from flask_app import app
from flask import redirect,request,session,render_template,flash
from flask_app.models.user import User
from flask_app.models.recipe import Recipe



@app.route('/recipe/new')
def create():
    return render_template("new.html")



@app.route('/recipe/<int:id>')
def show(id):
    if "user_id" not in session:
        return redirect("/")
    data = {"id": session["user_id"]}
    loggedin_user = User.get_by_id(data)
    recipe=Recipe.get_by_id({"id":id})

    return render_template("show.html",loggedin_user=loggedin_user,recipe=recipe)


@app.route('/delete/<int:id>')
def delete(id):
    if "user_id" not in session:
        return redirect("/")
    Recipe.delete({"id":id})

    return redirect("/")


@app.route('/recipe/create' ,methods=["post"])
def process_create():
    if not Recipe.validate(request.form):
        return redirect("/recipe/new")
    data={**request.form,"user_id":session["user_id"]}
    Recipe.create(data)
    return redirect("/dashboard")



@app.route('/edit/<int:id>')
def edit(id):
    if "user_id" not in session:
        return redirect("/")
    data = {"id": session["user_id"]}
    loggedin_user = User.get_by_id(data)
    recipe=Recipe.get_by_id({"id":id})

    return render_template("edit.html",loggedin_user=loggedin_user,recipe=recipe)

@app.route('/edit/<int:id>' ,methods=["post"])
def process_edit(id):
    if not Recipe.validate(request.form):
        return redirect("/recipe/new")
    data={"id":id,**request.form,}
    Recipe.edit(data)
    return redirect("/dashboard")


