
import { Link, useParams  } from "react-router-dom"
import './singleLog.scss';

const SingleLogPage = () => {
    const logId = useParams()

    const dataTabl = JSON.parse(localStorage.getItem("allData"));
    
    const singleLog = dataTabl.filter(item => item.id === logId.logId);

    console.log(singleLog)
    

    return (

        <div className="single-log">
            <div className="single-log__info">
                <div className="number">№:  {singleLog[0].id}</div>
                <div className="task">Task:  {singleLog[0].name}</div>
                <div className="time-start">Time start:  {singleLog[0].start}</div>
                <div className="time-end">Time end:  {singleLog[0].end}</div>
                <div className="time-spend">Time spend:  {singleLog[0].spend}</div>
            </div>
            <Link to="/" className="single-log__back">Back to main page</Link>
        </div>
    )
}

export default SingleLogPage;