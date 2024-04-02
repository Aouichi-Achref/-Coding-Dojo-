from flask import Flask,render_template,request,session,redirect
# Import Flask to allow us to create our app
app = Flask(__name__) 
# Create a new instance of the Flask class called "app"

app.secret_key= "This is asecret key"



session={"count":0}


@app.route('/')     
def simple():
    session["count"]+=1


    return render_template("index.html",session=session)



@app.route('/',methods={'POST'})     
def add():
    session["count"]+=1

    return render_template("index.html",session=session)

if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True)    # Run the app in debug mode.
