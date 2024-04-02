from flask import Flask, render_template, redirect,session,request
import random

app=Flask(__name__)

app.secret_key="secret are heer."

@app.route('/')
def index():
    if "random_num" not in session:
        session['random_num']=random.randint(1,100)
    return render_template ('index.html')

@app.route('/chose',methods=['POST'])
def chose():
    session['chose'] = int(request.form['chose'])
    print(session['chose'],"🐱‍👤*3",session['random_num'])

    return redirect("/")

@app.route('/clear')
def destroy():
    session.clear()
    return redirect('/')











if __name__==("__main__"):
    app.run(debug=True,port=5000)
