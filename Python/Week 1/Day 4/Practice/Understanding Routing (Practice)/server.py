from flask import Flask  # Import Flask to allow us to create our app
app = Flask(__name__)    # Create a new instance of the Flask class called "app"




@app.route('/')          # The "@" decorator associates this route with the function immediately following
def hello_world():
    return 'Hello World!'  # Return the string 'Hello World!' as a response

@app.route('/dojo')
def hello_dojo():
    return 'hello Dojo'

@app.route('/say/<name>')
def say_hi(name):
    return f'hi {name}'

@app.route('/repeat/<int:times>/<word>')
def reaperfgcw_hi(word,times):
    return f'<h2>{word}</h2>'*times


if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True,port=5000)    # Run the app in debug mode.

