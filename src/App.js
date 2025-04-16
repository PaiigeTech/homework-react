import logo from './logo.svg';
import './App.css';
import ReactAnimatedWeather from 'react-animated-weather';

function App() {
  return (
  <div className="Weather-App">
    <div className="Cities">
      <ul className="city-list">
        <li>CPT
        </li>
<li>PLK</li>
<li>JHB</li>
<li>PTA</li>
      </ul>
    </div>
    <form>
      <input type= "text" className="Search-Form" placeholder="Enter a city.." />
      <input type= "submit" className="Search-Form-Button" value="Search"/>
      <input type= "submit" className="Search-Form-Current" value="Current"/>
    </form>
    <div className="Weather-App-Top">
  <div className="Weather-App-Results">
    <h2>London</h2>
    <p>
      Wednesday | 17:50
      <br />
      Mostly Cloudy
    </p>
  </div>
  <ReactAnimatedWeather
        icon="PARTLY_CLOUDY_DAY"
        color="goldenrod"
        size={64}
        animate={true}
      />
  <h1 className="Temperature">19°C</h1>
  </div>
    <div className="Weather-App-Description">
      <p>
        Precipitation:82%
        <br />
        Wind:4km/h
      </p>
    </div>
    <div className="Upcoming-Temperature">
      <ul className="Upcoming-Temperature-List">
        <li>THR <br /> <ReactAnimatedWeather
        icon="RAIN"
        color="blue"
        size={64}
        animate={true}
      /> <br /> 13°</li>
        <li>FRI <br /><ReactAnimatedWeather
        icon="PARTLY_CLOUDY_DAY"
        color="goldenrod"
        size={64}
        animate={true}
      /> <br /> 17° </li>
        <li>SAT<br /> <ReactAnimatedWeather
        icon="WIND"
        color="grey"
        size={64}
        animate={true}
      /> <br /> 12°</li>
        <li>SUN <br /><ReactAnimatedWeather
        icon="CLOUDY"
        color="black"
        size={64}
        animate={true}
      /> <br /> 20°</li>
      </ul>
    </div>
  </div>
  
  );
}

export default App;
