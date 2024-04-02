from flask_app import app 
from flask import flash ,render_template,redirect,request
from flask_app.models.email_model import Email


@app.route('/')
def home():
    return render_template('index.html')
@app.route('/emails')
def emails():
    return render_template('email.html',all_emails=Email.get_all())

@app.route("/create/email",methods=['post'])
def create_email():
    data={**request.form}
    if not Email.validate_email(data):
        return redirect('/')
    if  Email.get_by_email(data):
        flash("this email was used")
        return redirect("/")
    Email.create(data)
    return redirect('/emails')