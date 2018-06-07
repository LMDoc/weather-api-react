import React, { Component } from 'react';

const Day = props => {
	let min_temp = String(props.data.list[0].main.temp_min).split('.')[0];
	let max_temp = String(props.data.list[0].main.temp_max).split('.')[0];

	return (
		<div className='card'>
			<h2> Today </h2>
				<img src='http://icon-park.com/imagefiles/simple_weather_icons_thunderstorms.png' />
			<div className='temps'>
				<h3 id='low'>{min_temp}c</h3>
				<h3>{max_temp}c</h3>
			</div>
		</div>
	)
}

export default Day;