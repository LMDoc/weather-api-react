import React, { Component } from 'react';
import './App.css';
import DayList from './component/dayList';
import Day from './component/day';
const API_KEY = 'd4d1416bdc4560f6e6de8ee08a92d797';
const url = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=d4d1416bdc4560f6e6de8ee08a92d797&q=Berlin,de&units=metric'


class App extends Component {
  constructor(props) {
    super(props);


    this.state = {
        data: {},
    } 
  }

  async fetchData() {
    const res = await fetch(url);
    const data = await res.json();
    this.setState({ data })
  }

  componentWillMount() {
    this.fetchData();
  }


  render() {
  if(!this.state.data.city) {
    return (
      <h1>Loading Data...</h1>
    )
  }

    return (
      <div className='container'>
        <Day data={ this.state.data } />
      </div>
      )
    }
  }
  

export default App;
