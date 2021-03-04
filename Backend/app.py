from flask import Flask, request
import requests

app = Flask(__name__)
key = input()
curl = "https://graphhopper.com/api/1/geocode?q=Vellore&locale=en&debug=true&key={key}" # Destination text -> coordinates API
r = requests.get(curl.format()).json()
@app.route('/')
def home():
    return(r)

url = "https://graphhopper.com/api/1/matrix?point=12.971774,79.161562&point=12.973510,79.168793&type=json&vehicle=car&debug=true&out_array=weights&out_array=times&out_array=distances&key={key}"  # Distance API
r = requests.get(url.format()).json()

if "__main__" == __name__:
    app.run(debug=True)