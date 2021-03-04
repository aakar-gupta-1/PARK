from flask import Flask
import requests

app = Flask(__name__)
key1 = str(input("Enter API Key: "))
curl = f"https://graphhopper.com/api/1/geocode?q=Vellore&locale=en&debug=true&key={key1}" # Destination text -> coordinates API
r = requests.get(curl.format()).json()
@app.route('/')
def home():
    return(r)

url = f"https://graphhopper.com/api/1/matrix?point=12.971774,79.161562&point=12.973510,79.168793&type=json&vehicle=car&debug=true&out_array=weights&out_array=times&out_array=distances&key={key1}"  # Distance API
r = requests.get(url.format()).json()

if "__main__" == __name__:
    app.run(debug=True)