import React from 'react' 
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import LandingPage from './components/LandingPage';

function App() {
  return (
    <div id='home'>
      <LandingPage />
      <img alt='' src={require('./images/background.jpg')} />
    </div>
  );
}

export default App;
