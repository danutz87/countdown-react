import React from 'react';
import './App.css';
import Countdown from './components/countdown'

function App() {
  return (
    <Countdown
        timeTillDate="12 25 2020, 6:00 am"
        timeFormat="MM DD YYYY, h:mm a"
    />
  );
}

export default App;
