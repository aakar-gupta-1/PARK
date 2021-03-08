import React from "react";
import { Link, withRouter } from "react-router-dom";
import map1 from '../image/map1.PNG'

function Home2(props) {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
        <div class="col-lg-5">
            <button class = "icon"><i class="fa fa-car fa-2x"></i></button>
            <button class = "icon"><i class="fa fa-bus fa-2x"></i></button>
            <button class = "icon"><i class="fa fa-train fa-2x"></i></button>
            <button class = "icon"><i class="fa fa-bicycle fa-2x"></i></button>
            <h3 class="font-weight-bold heading animate__animated animate__fadeIn">
                I'm currently at <br />
                |<br />
                |<br />
                |<br />
                I'm going to
            </h3>
            <form action="">
                <input type="text" placeholder="Eg:     Ashok Nagar    "/><br /><br />
                <h3 class ="heading">Call me 
                <form>
                    <select name = "dropdown">
                    <option value = "2" selected>5</option>
                    <option value = "10">10</option>
                    <option value = "15">15</option>
                    <option value = "20">20</option>
                    <option value = "30">30</option>
                 </select>
                </form> minutes before</h3>
                <button>
                <Link class="buttonlink" to="/home3">
                    Schedule Call
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

export default Home2;