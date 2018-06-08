import React, { Component } from 'react';
import './App.css';
import Day from './component/day';

class App extends Component {
  constructor(props) {
    super(props);


    this.state = {
        data: {},
        backgroundstyle: {},
        lat: '',
        long: '',
    } 
  }

  async fetchData() {
    const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.long}&appid=d4d1416bdc4560f6e6de8ee08a92d797&units=metric`);
    const data = await res.json();
    this.setState({ data })
    this.getBackground();
  }

  async getLocation() {
      navigator.geolocation.getCurrentPosition((pos) => { 
        const position = pos;
        this.setState({ lat: position.coords.latitude });
        this.setState({ long: position.coords.longitude });
        this.fetchData();
      });
      
  }

  getBackground() {
    if(this.state.data.weather[0].main == 'Clear') {
      this.setState({backgroundstyle: {background: "url('https://images.unsplash.com/photo-1470137430626-983a37b8ea46?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cd022977b89fcc340dcf5a4e8deb6537&auto=format&fit=crop&w=1350&q=80') center center", backgroundSize: '100%' } })
    } else if(this.state.data.weather[0].main == 'Rain') {
      this.setState({backgroundstyle: {background: "url('https://images.unsplash.com/photo-1516005054594-328cb12b7a61?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=97cf677cbf52ddf62732a350338a4150&auto=format&fit=crop&w=1350&q=80') center center", backgroundSize: '100%' } })
    } else if(this.state.data.weather[0].main == 'Clouds') {
      this.setState({backgroundstyle: {background: "url('https://images.unsplash.com/photo-1518277748204-ba05cb84d9f5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9ea3b1a82b08a4ba9764a8788c9cdaaa&auto=format&fit=crop&w=1350&q=80') center center", backgroundSize: 'cover' } })
    } else if(this.state.data.weather[0].main == 'Snow'){
      this.setState({backgroundstyle: {background: "url('https://images.unsplash.com/photo-1507181280972-47966b705fd2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ba9981ac19dad97f946183ed98fae69b&auto=format&fit=crop&w=1489&q=80') center center", backgroundSize: 'cover' } })
    }
  }

  componentWillMount() {
    this.getLocation();
  }


  render() {
  if(!this.state.data.name) {
    return (
      <div className="loading">
        <h1>Just a moment...</h1>
        <img src="http://thinkfuture.com/wp-content/uploads/2013/10/loading_spinner.gif" />
      </div>
    )
  }

    return (
      <div className='container' style={this.state.backgroundstyle}>
        <Day data={ this.state.data } />
      </div>
      )
    }
  }
  

export default App;
