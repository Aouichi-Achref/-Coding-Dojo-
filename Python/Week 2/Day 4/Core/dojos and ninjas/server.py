from flask_app import app
from flask_app.controllers import dojo_control
from flask_app.controllers import ninja_control


if __name__=="__main__":
    print("ahla si hamza")
    app.run(debug=True,port=5000)
    # app.run(port=5000)