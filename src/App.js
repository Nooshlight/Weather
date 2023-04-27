
import './App.css';
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import Forecast from './components/Forecast';
import getWeatherData from './services/weatherService';
import getFormattedWeatherData from './services/weatherService';
import { useEffect, useState } from 'react';
import { data } from 'autoprefixer';


function App() {

  const [query, setQuery] = useState({ q: 'berlin' })
  const [units, setUnits] = useState('metric')
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    const fetchWeather = async () => {
      console.log(query)
      const message = query.q ? query.q : "current location";
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        console.log({ data })
        setWeather(data)
      });

    };
    fetchWeather();
  }, [query, units]);

  const formatBackground = () => {
    if (!weather) return "from-cyan-400 to-blue-900";
    const threshold = units === "metric" ? 20 : 60;
    if (weather.temp <= threshold) return "from-cyan-400 to-blue-800";

    return "from-yellow-400 to-orange-800";
  };

  return (
    <div className="flex">
      <div className={`flex flex-col justify-center w-full sm:w-[600px] mx-auto rounded-xl mt-20 py-5 px-10 bg-gradient-to-br  h-fit shadow-lg transition ease-out  shadow-gray-700 ${formatBackground()}`}  >
        <TopButtons setQuery={setQuery} />
        <Inputs setQuery={setQuery} units={units} setUnits={setUnits} name={weather?.name} />
        {weather && (
          <div>
            <TimeAndLocation weather={weather} />
            <TemperatureAndDetails weather={weather} />


          </div>
        )}


      </div>
    </div>
  );
}

export default App;
