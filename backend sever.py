from flask import Flask, request

app = Flask(__name__);

@app.route('/register', methods=["Post"])

def newForm():
    data  = request.form
    return "New user registered"