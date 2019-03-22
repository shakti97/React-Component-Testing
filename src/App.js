import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Components/Button/Button';


const App =()=>{
  const [count,setCount] =useState(0);

  const incrementCount = increment =>{
    setCount(count+increment);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div>
        <Button increment={1} onClickFunction={incrementCount} />
        <Button increment={10} onClickFunction={incrementCount} />
        <Button increment={100} onClickFunction={incrementCount} />
        <Button increment={1000} onClickFunction={incrementCount} />
        <span>{count}</span>
      </div>
    </div>
  );
}

export default App;
