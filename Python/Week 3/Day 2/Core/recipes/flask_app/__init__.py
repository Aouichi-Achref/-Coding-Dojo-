from flask import Flask


app= Flask(__name__)

DATABASE = "recipes_db"

app.secret_key="shshsh"