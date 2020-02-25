import React from 'react';
import Box from './components/Box.js'
import './App.css';

function App() {


  function reset(){
    window.location.reload(false);
  }

  const [number, setNumber] = React.useState(0);
  const [boxes, setBoxes] = React.useState([]);



  React.useEffect(()=>{
    
    if(number%2 == 0){
      let ogBoxes = boxes;
      ogBoxes.push('some string');
      setBoxes(ogBoxes);
    }

  }, [number]);

  let boxEles = boxes.map((bx, idx)=>
    <Box/>
  );

  return (
    <div className="App">

      <button onClick={()=>setNumber(number+1)}>Counter</button>
      <button onClick={reset}>Reset</button>
      <div>{number}</div>
      {boxEles}

    </div>
  );
}

export default App;
