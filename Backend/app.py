from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return("Home")

if "__main__" == __name__:
    app.run(debug=True)