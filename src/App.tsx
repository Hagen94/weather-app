
import CurrentWeather from './components/CurrentWeather'
import Daily from './components/Daily'
import Hourly from './components/Hourly'
import Forecast from './pages/Forecast'


function App() {
 

  return (
    <>
    <h1>Weather app</h1>
    <Forecast />
    <CurrentWeather/>
    <Daily/>
    <Hourly/>
    </>
  )
}

export default App
