import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './css/style.css'
import DisplayPage from './components/DisplayPage';

class App extends React.Component {
  render() {
    return (
      <div className='display-page'>
        <div className='overlay'>
          <div className='d-flex justify-content-center align-items-center'>
            <img src={require('./images/logo.png')} />
          </div>

          <DisplayPage />
        </div>
      </div>
    );
  }
}

export default App;
