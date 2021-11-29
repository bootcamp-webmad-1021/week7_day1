import './App.css';
import Title from './Title'
import Button from './Button'
import Card from './Card';
import portrait1 from './images/img1.jpeg'
import portrait2 from './images/img2.jpeg'
import portrait3 from './images/img3.png'
import portrait4 from './images/img4.jpeg'
import Square from './SquareClassComponent'

function App() {
  return (
    <div className="App">

      <Title titleText="Soy una prop" />
      <Title titleText="Y yo otra" />

      <Button href="https://www.google.es" text="Google" target="_blank" />
      <Button href="https://www.yahoo.es" text="La copia" target="_self" danger />


      <Card name="guille" src={portrait1} age={25} role="TA" />
      <Card name="Laura" src={portrait2} age={25} role="TA" />
      <Card success name="sara" src={portrait3} age={25} role="TA" />
      <Card danger name="Teo" src={portrait4} age={31} role="Teacher" />

      <Square />
    </div>
  );
}

export default App;
