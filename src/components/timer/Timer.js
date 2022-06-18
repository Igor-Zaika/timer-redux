import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { startTimer, stopTimer, addNewTask, onActiveModal, clearName, createLog } from '../../actions/index';

import './timer.scss'

const Timer = () => {
    const { nameTask, time, timerActive } = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        if(!localStorage.getItem('timerStart')) {
            dispatch(stopTimer());
        } else {
            dispatch(startTimer());
        }
        // eslint-disable-next-line
    }, []);

    const calcSpendTime = (mlsec) => {
        let seconds = Math.floor( (mlsec/1000) % 60 );
        let minutes = Math.floor( (mlsec/1000/60) % 60 );
        let hours = Math.floor( (mlsec/(1000*60*60) % 24));
        return `${hours < 10 ? '0': ''}${hours}:${minutes < 10 ? '0': ''}${minutes}:${seconds < 10 ? '0': ''}${seconds}`
    }

    const saveStartTimer = () => {
        if(!localStorage.getItem('timerStart'))  {
            localStorage.setItem('timerStart', Date.now())
            dispatch(startTimer());
        } else {
            dispatch(startTimer());
            console.log('timer')
        }
    }
  
    const saveFinishedDate = () => {
        const startTime = +localStorage.getItem('timerStart');
        const  endTime = Date.now();

        let dataTable = JSON.parse(localStorage.getItem("allData"));
        if(dataTable === null) dataTable = [];

        const newCreateDataTable = () => {
            const newData = {
                // id: dataTable.length + 1,
                id: uuidv4(),
                name: nameTask,
                start: calcSpendTime(startTime + 3 * 60 * 60 * 1000),
                end: calcSpendTime(endTime + 3 * 60 * 60 * 1000),
                spend: calcSpendTime(endTime - startTime),
            }
            return newData;
        }
        dataTable.push(newCreateDataTable());
        localStorage.setItem("allData", JSON.stringify(dataTable));
        dispatch(createLog());
    }
 
    const onStopTimer = () => {
        if(nameTask) {
            dispatch(stopTimer());
            saveFinishedDate();
            dispatch(clearName());
            localStorage.removeItem('timerStart');
        } else {
            dispatch(onActiveModal());
        }
    }

    return (
        <>
            <input 
                type='text' 
                placeholder="Name of your tusk" 
                value={nameTask}
                onChange={(e) => dispatch(addNewTask(e.target.value))}>
            </input>
            <div className="circle"></div>
            <div className="timer">
                {calcSpendTime(time)}
            </div>
            {!timerActive ? <button className='button' onClick={() => saveStartTimer()}>START</button> : ''}
            {timerActive ? <button className='button' onClick={() => onStopTimer()}>STOP</button> : ''}
        </>
    )
}

export default Timer;