import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import "./App.css";
import weatherimage from "./images/weather.png";

function App() {

  const [city, setcity] = useState("");
  const [weather, setWeather] = useState([]);

  const getDetail = (e) => {
    e.preventDefault()
    axios.get("https://api.weatherbit.io/v2.0/current?&city=" + city + "&key=ef1b1e0e8137464e9918842ee17fe30e&include=minutely")
      .then((res) => setWeather(res.data.data))
      .catch((err) => console.log(err))
    console.log("inner_city", city);
  }

  return (
    <>
      <div class="header">
        <h1>CURRENT WEATHER</h1>
        <h2>தற்போதைய வானிலை நிலவரம்</h2>
      </div>
      <div class="grid ">
        <div class="item" tabindex="1">
          <div class="box row">
            <div class="col-8">
              <form class="form-inline">
                {/* <div class="col-4"><img src={weatherimage} height="150px" width="150px" /></div> */}
                <label class="display-5 font-weight-bold sr-only text-primary" for="inlineFormcityName2">City</label>
                <input type="text" class="form-control mb-2 mr-sm-2" placeholder="Enter the City" onChange={(e)=>setcity(e.target.value)} />
                <button type="submit" class="btn btn-primary mb-2" onClick={(e)=>getDetail(e)}>Submit</button>
              </form>
            </div>
          </div>
        </div>
        {
          weather.map((el)=>{
            console.log("el",el);
            return(
              <>
               <div class="item" tabindex="2">
          <div class="box">
            <h1>Thank you</h1>
          </div>
        </div>
        <div class="item" tabindex="3">
          <h1 class="display-1 font-weight-bold text-primary">{el.temp}°C</h1>
        </div>
        <div class="item" tabindex="4">
          <div class="date_country">
            <p class="h6 temperature text-primary">{el.datetime}</p>
            <p class="h6 temperature text-primary">{el.city_name} {el.country_code}</p>
          </div>
        </div>
              </>
            )
          })
        }
       
      </div>
    </>
  );
}



export default App;
