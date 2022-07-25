import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './css/style.css'
import DisplayPage from './components/DisplayPage';

class App extends React.Component {

  state = {
    active: 'landing'
  }

  display = () => {
    if (this.state.active === 'landing') {
      return (
        <div className='landing d-flex justify-content-center align-items-center'>
          <video id="bgvid" src={require('./images/landing.mp4')} muted loop autoPlay></video>
          <div className='text-div d-flex flex-column justify-content-center align-items-center'>
            <img className='logo' src={require('./images/logo.png')} />
            <p>Some text here</p>
            <button className='btn btn-primary'
                    onClick={() => {
                      this.setState({
                        active:'display'
                      })
                    }}>
                      Explore!
            </button>
          </div>

        </div>
      )
    }
    else if (this.state.active === 'display') {
      return (
        <div className='display-page'>
          <div className='overlay'>
            <div className='d-flex justify-content-center align-items-center'>
              <img src={require('./images/logo.png')} />
            </div>
            <DisplayPage />
          </div>
        </div>
      )
    }
  }

  render() {
    return (
      <React.Fragment>
        {this.display()}
      </React.Fragment>
    );
  }
}

export default App;
