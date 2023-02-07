import React, {useState} from 'react';
import './App.css';

function StarRating({
  count,
  value,
  inactiveColor = '#ddd',
  size = 60,
  activeColor = '#F0FFFF',
  onChange
}) {

  const stars = Array.from({ length: count }, () => '☆');

  const handleChange = (value) => {
    onChange(value + 1);
  }

  return (
    <div>
      {
        stars.map((s, index) => {
          let style = inactiveColor;
          if (index < value) {
            style = activeColor;
          }
          return (
            <span className={"star"} key={index}
            style = {{color: style, width: size, height: size, fontSize: size}} onClick = {() => handleChange(index)}>
            {s}
            </span>
          )
        }
        )
      }
      {value}
    </div>
  )
}

function App() {
  const [rating, setRating] = useState(3);
  const handleChange = (value) => {
    setRating(value);
  }
  return (
    
    <div className="App">
      <h1>Star Rating React App</h1>
      <StarRating
        count={5}
        value = {rating}
        activeColor = {'#0000FF'}
        inactiveColor={'#ddd'}
        onChange = {handleChange}
      />
    </div>
  );
}

export default App;
