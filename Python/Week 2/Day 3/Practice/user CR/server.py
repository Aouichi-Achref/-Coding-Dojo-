from flask import Flask,render_template,redirect,request
from user import User
 # Import Flask to allow us to create our app
app = Flask(__name__) 
   # Create a new instance of the Flask class called "app"




@app.route('/')     
def read():
    users=User.get_all()
    return render_template("read.html",users=users)



@app.route('/process')
def create_process():
    return render_template("create.html")

@app.route('/create', methods=['POST'])
def create():
    print(request.form["first_name"])
    user_dict = {
        "first_name": request.form["first_name"],
        "last_name": request.form["last_name"],
        "email": request.form["email"]
    }
    User.save(user_dict)
    return redirect("/")


@app.route("/edit/<int:id>")
def update_user(id):
    user_id_dict = {"id": id}
    user = User.get_one(user_id_dict)
    return render_template("edit.html", user=user)


    #! ACTION ROUTE
@app.route("/update/<int:id>", methods=["POST"])
def process_update(id):
    data = {
            **request.form,
            "id": id,
           }
    User.update(data)
    return redirect("/")

    #! ACTION ROUTE
@app.route("/show/<int:id>")
def show(id):
    data={"id":id}
    user= User.get_one(data)
    return render_template("show.html",user=user)

@app.route("/delete/<int:id>")
def delete(id):
    data={"id":id}
    User.delete(data)
    return redirect("/")





if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True)    # Run the app in debug mode.