import './App.css'
import Counter from './component/Counter';
import Title from './component/Title';
import useCountdown from './hooks/useCountdown';


function App() {

  const counterTitle = "Contagem regressiva para 2024"
  const dias = 1
  const horas = 2
  const minutos = 3
  const segundos = 40
  // console.log(notes)
  const [day, hour, minute, second] =useCountdown("Jan 1, 2024 00:00:00")
  return (

  <div className="App">
    <div className="container">
    <Title title={counterTitle} />
    <div className="countdown-container">
    <Counter title="Dias" number={day} />
    <Counter title="Horas" number={hour} />
    <Counter title="Minutos" number={minute} />
    <Counter title="Segundos" number={second} />
    </div>
    </div>
  
  </div>
    ); 
}

export default App
