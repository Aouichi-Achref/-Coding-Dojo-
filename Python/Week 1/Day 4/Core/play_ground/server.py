from flask import Flask , render_template
app = Flask(__name__) 

#http:....
@app.route('/')
def hello():
    return "Hello"

# #http:.../play
# @app.route('/play')
# def play():
#     return render_template("index.html")

#http:.../play/<int:number>
@app.route('/play/<int:number>')
def num(number):
    return render_template("index.html" , number=number)

#http:..../play/<int:number>/color
@app.route('/play/<int:number>/<color>')
def color(number,color):
    return render_template("index.html " , number=number , color=color)

if __name__=="__main__":   
    app.run(debug=True ,port=5000)    