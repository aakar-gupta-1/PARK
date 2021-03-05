from flask import Flask
import requests
import random

app = Flask(__name__)
key1 = str(input("Enter Graphhopper API Key: "))

# Geocoding Section
start_url = f"https://graphhopper.com/api/1/geocode?q=Vellore&locale=en&debug=true&key={key1}" # Destination text -> coordinates API
r = requests.get(start_url.format()).json()
print(r['hits'][0]['point']['lat'])
print(r['hits'][0]['point']['lng'])
start_lat = r['hits'][0]['point']['lat']
start_lng = r['hits'][0]['point']['lng']

end_url = f"https://graphhopper.com/api/1/geocode?q=Bangalore&locale=en&debug=true&key={key1}" # Destination text -> coordinates API
r = requests.get(end_url.format()).json()
print(r['hits'][0]['point']['lat'])
print(r['hits'][0]['point']['lng'])
end_lat = r['hits'][0]['point']['lat']
end_lng = r['hits'][0]['point']['lng']

# Distance Calculator Section
url = f"https://graphhopper.com/api/1/matrix?point={start_lat},{start_lng}&point={end_lat},{end_lng}&type=json&vehicle=car&debug=true&out_array=weights&out_array=times&out_array=distances&key={key1}"  # Distance API
r = requests.get(url.format()).json()
print(r['distances'][1][0])
print(r['times'][1][0])
distance = (r['distances'][1][0])
time = (r['times'][1][0])

# OTP Section
otp_url = "https://www.fast2sms.com/dev/bulkV2"
otp = random.randint(1000, 9999)
phone_number = "999999999" # Add Phone Number
key2 = str(input("Enter OTP API Key: "))
print(otp)
querystring = {"authorization":f"{key2}","message":f"Your OTP for WakeAlarm is {otp}","language":"english","route":"q","numbers":f"{phone_number}"}
headers = {'cache-control': "no-cache"}
response = requests.request("GET", otp_url, headers=headers, params=querystring)
print(response)


if(distance > 1000):
    distance = str(float(distance/1000)) + " Kms"
if (time>60 and time<3600):
    time = str(float(time/60)) + " Mins"
elif (time>3600):
    time = str(float(time/3600)) + " Hrs"



@app.route('/')
def home():
    return({'Distance': distance, 'Time' : time, "OTP": otp})

if "__main__" == __name__:
    app.run(debug=True)