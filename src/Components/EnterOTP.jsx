import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import Axios from 'axios';

function Home(props) {

  const[otp, getinfo] = useState('');

  const submit_OTP = () => {
    Axios.post('http://localhost:5000/api/checkOTP', {
      otp : otp
    }).then(()=>{
      alert("Successfully sent otp for checking");
    });
  };

  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
        <div class="col-lg-5">
            <h1 class="font-weight-bold heading animate__animated animate__bounce">Want us to wake you up before your destination?</h1>
            <p>
              We'll give you a call on
            </p>
            <form action="">
                <input type="text" placeholder="+91 | 0 0 0 0 0 0 0 0 0 0"/><br /><br />
                
            </form>
          </div>
          <div class="col-lg-5 otp-form">
            <h3 class="font-weight-bold heading animate__animated animate__fadeIn animate__delay-1s">We sent a one time password on the mobile number you gave us :)</h3>
            <form class="animate__animated animate__fadeIn animate__delay-1s"action="">
                <input type="text" placeholder="Enter the OTP"/><br /><br />
                <button>
                <Link class="buttonlink" onClick={submit_OTP}>
                    Submit OTP
                </Link>
                    </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;