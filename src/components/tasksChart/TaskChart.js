
import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const data = [
  {
    name: 0,
    pv: 2400,
  },
  {
    name: 1,
    pv: 1398,
  },
  {
    name: 2,
    pv: 9800,
  },
  {
    name: 3,
    pv: 3908,
  },
  {
    name: 4,
    pv: 4800,
  },
  {
    name: 5,
    pv: 3800,
  },
  {
    name: 6,
    pv: 4300,
  },
  {
    name: 7,
    pv: 4300,
  },
  {
    name: 8,
    pv: 4300,
  },
  {
    name: 9,
    pv: 4300,
  },
  {
    name: 10,
    pv: 4300,
  },
  {
    name: 11,
    pv: 4300,
  },
  {
    name: 12,
    pv: 4300,
  },
  {
    name: 13,
    pv: 4300,
  },
  {
    name: 14,
    pv: 4300,
  },
  {
    name: 15,
    pv: 4300,
  },
  {
    name: 16,
    pv: 4300,
  },
  {
    name: 17,
    pv: 4300,
  },
  {
    name: 18,
    pv: 4300,
  },
  {
    name: 19,
    pv: 4300,
  },
  {
    name: 20,
    pv: 4300,
  },
  {
    name: 21,
    pv: 4300,
  },
  {
    name: 22,
    pv: 4300,
  },
  {
    name: 23,
    pv: 4300,
  },
  
];

const tasksChart = () => {
	return (
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
		<YAxis />
		<Tooltip />
		<Legend />
		<CartesianGrid strokeDasharray="3 3" />
		<Bar dataKey="pv" fill="#8884d8" background={{ fill: "#eee" }} />
		</BarChart>
  	);
}

export default tasksChart;
