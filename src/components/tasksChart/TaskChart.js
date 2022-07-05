import { v4 as uuidv4 } from 'uuid';
import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

import { useSelector, useDispatch } from "react-redux";
import { setTusks } from "../../actions";

import './taskChart.scss'; 



const TasksChart = () => {
	const { tasks } = useSelector(state => state);
	const dispatch = useDispatch();

	const data = []

	for (let i = 0; i < 24; i++) {
		data.push({ name: i, 'Minutes in this hours': 0 })
	}

	tasks.forEach(task => {
		const dayOfToday = new Date().getDate();
		const day = +task.day

		const startHours = +task.start < 10 ? +task.start.slice(1, 2) : +task.start.slice(0, 2);
		const startMinutes = +task.start < 10 ? +task.start.slice(4, 5) : +task.start.slice(3, 5);
		const endHours = +task.end < 10 ? +task.end.slice(1, 2) : +task.end.slice(0, 2);
		const endMinutes = +task.end < 10 ? +task.end.slice(4, 5) : +task.end.slice(3, 5);

		if (dayOfToday > day) {
			return;
		} else if (dayOfToday === day) {
			for (let i = startHours; i <= endHours; i++) {
				if (startHours === endHours) {
					data[i]['Minutes in this hours'] += endMinutes - startMinutes
				} else if (i === startHours) {
					data[i]['Minutes in this hours'] = 60 - startMinutes
				} else if (i === endHours) {
					data[i]['Minutes in this hours'] = endMinutes
				} else {
					data[i]['Minutes in this hours'] = data[i]['Minutes in this hours'] + 60
				}
				
			}
		}
	})

	const getGenerateTasks = () => {

		const calcTime = (mlsec) => {
			let seconds = Math.floor( (mlsec/1000) % 60 );
			let minutes = Math.floor( (mlsec/1000/60) % 60 );
			let hours = Math.floor( (mlsec/(1000*60*60) % 24));
			return `${hours < 10 ? '0': ''}${hours}:${minutes < 10 ? '0': ''}${minutes}:${seconds < 10 ? '0': ''}${seconds}`
		}
	
		const getRandom = (min, max) =>  {
			return Math.floor(Math.random() * (max - min)) + min
		}
		
		const randomNumberTasks = getRandom(10, 15)
	
		const getRandomNumbers = () => {
			const result = [];
			while (result.length <= randomNumberTasks) {
				const randomHourStart = getRandom(0, 23);

		
				if (result.indexOf(randomHourStart) === -1) {
					result.push(randomHourStart)
				}
			}
			return result;
		};
	
		const result = getRandomNumbers();
		result.sort((a, b) => { return a - b; });

		const generatedTasks = [];

		result.forEach(hour => {
			const randomHourStart = hour * 3600000;
			const randomMinutStart = Math.floor(getRandom(0,3600000));
			const hourStart = randomHourStart + randomMinutStart;
			const durationOfTime = Math.floor(getRandom(600000,5400000));
			const randomHourEnd = hourStart + durationOfTime;

			generatedTasks.push({day: new Date().getDate(), id: uuidv4(), name: 'lorem', start: calcTime(hourStart), end: calcTime(randomHourEnd), spend: calcTime(randomHourEnd - hourStart)})
		})
	
		localStorage.setItem('tasksLog',JSON.stringify(generatedTasks));
		dispatch(setTusks(generatedTasks));
		
	}


	return (
		<>
			<hr className="line-chart"/>
			<ResponsiveContainer height={450} width='100%'>
				<BarChart
					data={data}
					barSize={35}
				>
				<XAxis dataKey="name" scale="point" padding={{left: 40, right: 40 }} />
				<YAxis ticks={[0, 15, 30, 45, 60]} />
				<Tooltip />
				<Legend />
				<CartesianGrid strokeDasharray="3 3" />
				<Bar dataKey="Minutes in this hours" fill="#8884d8" background={{ fill: "#eee" }} />
				</BarChart>
			</ResponsiveContainer>	
			<button 
				style={{backgroundColor: "red", color: "white", marginLeft: '92%'}}
				onClick={() => getGenerateTasks()}>GENERATE</button>
		</>
  	);
}

export default TasksChart;
