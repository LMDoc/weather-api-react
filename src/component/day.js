import React, { Component } from 'react';

const Day = props => {
	let icon = 'http://openweathermap.org/img/w/'+props.data.weather[0].icon+'.png';
	let min_temp = String(props.data.main.temp_min).split('.')[0];
	let max_temp = String(props.data.main.temp_max).split('.')[0];
	let updatedTime = Date().slice(16,21);

	return (
		<div className='card'>
			<h3> {props.data.name}, {props.data.sys.country}</h3>
				<img src={ icon } alt='icon'/>
			<div className='temps'>
				<p>{max_temp}c</p> <p>{props.data.weather[0].main}</p>
			</div>
			<p id='small'>Updated: {updatedTime}</p>
		</div>
	)
}

export default Day;