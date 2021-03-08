import React from "react";
import { Link, withRouter } from "react-router-dom";
import map1 from '../image/map1.PNG'

function Home(props) {
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
                <button>
                <Link class="buttonlink" to="/home2">
                    Send OTP
                </Link>
                    </button>
            </form>
          </div>
          <div class="col-lg-7">
          <img class="imgabout animate__animated animate__fadeIn animate__delay-1s image" src={map1} alt="some aesthetic shit" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;