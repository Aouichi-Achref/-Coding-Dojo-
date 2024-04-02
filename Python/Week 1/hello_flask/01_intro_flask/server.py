from flask import Flask , render_template # Import Flask to allow us to create our app
app = Flask(__name__)    # Create a new instance of the Flask class called "app"
@app.route('/')          # The "@" decorator associates this route with the function immediately following
def hello_world():
    return 'Hello World!'  # Return the string 'Hello World!' as a response

@app.route('/hello')
def hello():
    return "hello from server😉😉"

@app.route('/hello/user')
def say_hello():
    return "<h1>hello user html is back😎</h1>"

@app.route('/hello/user/<username>')
def say_hello_username(username):
    return f"<h1>hello {username} html is back😎</h1>"


@app.route('/hello/user/<username>/<int:times>')
def say_hello_username_time(username,times):
    return f"<h1>hello {username} html is back😎</h1>"*times


@app.route('/user/<username>/<int:age>')
def user_info(username,age):
    return f"<h1>User Name: {username} <br/> Age: {age}</h1>"

@app.route('/index/<username>/<int:age>')
def first_html(username,age):
    users=[
        {'name' : "atig",'age':25},
        {'name' : "dali",'age':26},
        {'name' : "shloomo",'age':24},
        {'name' : "jridi",'age':25},
        {'name' : "3tor",'age':27}
        ]
    return render_template("index.html" , user = username, age = age, users=users)



if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True,port=1337)    # Run the app in debug mode.

