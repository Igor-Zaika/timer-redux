import { Link } from 'react-router-dom';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { deepPurple, grey, lightBlue } from '@mui/material/colors';
import { useDispatch, useSelector} from 'react-redux';
// import { useEffect } from 'react';

import {deleteLog} from '../../actions/index';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	
	[`&.${tableCellClasses.head}`]: {
	  color: grey[500],
	},
	[`&.${tableCellClasses.body}`]: {
		color: deepPurple[900],
	},
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
	'&:nth-of-type(n)': {
	  backgroundColor: lightBlue[100],
	},
}));

function createData(id, task, timeStart, timeEnd, timeSpend, info, remove) {
    return { id, task, timeStart, timeEnd, timeSpend, info, remove};
}



const TaskLogTable = () => {
	const {dataTable} = useSelector(state => state);
	const dispatch = useDispatch();
	const tableLog = JSON.parse(localStorage.getItem('allData'));

	const onDeleteLog = (id) => {
		tableLog.forEach((item, i) => {
			if (item.id === id) {
				tableLog.splice(i,1);
			}
		})
		localStorage.setItem('allData', JSON.stringify(tableLog));
		dispatch(deleteLog());
	}

	const countTableLog = () => {
		let rows = [];
		for(let i = 0; i < dataTable.length; i++) {
			rows.push(createData(dataTable[i].id, dataTable[i].name, dataTable[i].start, dataTable[i].end, dataTable[i].spend, 'INFO', 'DELETE'));
		}
		return rows;
	}

	const rows = countTableLog();
	
	return(
		<TableContainer component={Paper}>
			<Table sx={{minWidth: 650}} aria-label="simple table">
				<TableHead>
					<TableRow>
						<StyledTableCell align="center">№</StyledTableCell>
						<StyledTableCell align="right">Task</StyledTableCell>
						<StyledTableCell align="right">Time start</StyledTableCell>
						<StyledTableCell align="right">Time end</StyledTableCell>
						<StyledTableCell align="right">Time spend</StyledTableCell>
						<StyledTableCell align="right" >Info</StyledTableCell>
						<StyledTableCell align="center">Delete</StyledTableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row, i) => (
						<StyledTableRow
							key={row.id}
							sx={{'&:last-child td,&:last-child th': {border: 0}}}>
							<StyledTableCell align="center" component="th" scope="row" color='palette.secondary.dark'>
								{i + 1}
							</StyledTableCell>
							<StyledTableCell align="right">{row.task}</StyledTableCell>
							<StyledTableCell align="right">{row.timeStart}</StyledTableCell>
							<StyledTableCell align="right">{row.timeEnd}</StyledTableCell>
							<StyledTableCell align="right">{row.timeSpend}</StyledTableCell>
							<StyledTableCell align="right" ><Link to={`/tableLog/${row.id}`}>{row.info}</Link></StyledTableCell>
							<StyledTableCell align="center" onClick={() => onDeleteLog(row.id)}>{row.remove}</StyledTableCell>
						</StyledTableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	)
}

export default TaskLogTable;