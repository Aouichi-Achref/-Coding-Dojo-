from flask import Flask ,render_template,request,session,redirect

app = Flask(__name__)


@app.route('/')          
def index():
    return render_template("index.html")



@app.route('/result' , methods=["post"])          
def save():
    data={**request.form}
    return render_template("survey.html",data=data)


@app.route('/home')          
def home():
    return render_template("index.html")



if __name__=="__main__":   
    app.run(debug=True)    