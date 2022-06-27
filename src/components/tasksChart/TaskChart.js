
import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

import { useSelector } from "react-redux";

import './taskChart.scss'; 



const TasksChart = () => {
	const { tasks } = useSelector(state => state);

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
		const spendtHours = +task.spend < 10 ? +task.spend.slice(1, 2) : +task.spend.slice(0, 2);
		const spendMinutes = +task.spend < 10 ? +task.spend.slice(4, 5) : +task.spend.slice(3, 5);

		
		if (spendtHours === 0 && spendMinutes === 0) {
			return;
		}	

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

	const getGenerateTask = () => {
		const generetedTask = [];

		data.forEach(value => {
			if (value['Minutes in this hours'] > 10 && value['Minutes in this hours'] <= 90) {
				generetedTask.push(value)
			}
		})

		const getRandom = (min, max) =>  {
			return Math.floor(Math.random() * (max - min)) + min
		}

		const randomTasks = getRandom(10, 16)

		if (generetedTask.length < randomTasks) {
			return generetedTask;
		} else {
			generetedTask.forEach((tusk, i) => {
				if(tusk[i] <= randomTasks ) {
					generetedTask.push(tusk)
				}
			})
		}
	}

	return (
		<>
			<hr className="line-chart"/>
			<BarChart
				width={930}
				height={300}
				data={data}
				margin={{
					top: 5,
					right: 10,
					left: 10,
					bottom: 5
				}}
				barSize={20}
			>
			<XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
			<YAxis ticks={[0, 15, 30, 45, 60]} />
			<Tooltip />
			<Legend />
			<CartesianGrid strokeDasharray="3 3" />
			<Bar dataKey="Minutes in this hours" fill="#8884d8" background={{ fill: "#eee" }} />
			</BarChart>
			<button 
				style={{backgroundColor: "red", color: "white", marginLeft: '950px'}}
				onClick={() => getGenerateTask()}>GENERATE</button>
		</>
  	);
}

export default TasksChart;
