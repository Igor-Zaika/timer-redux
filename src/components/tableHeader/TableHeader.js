import { useDispatch, useSelector } from 'react-redux'; 
import { Link } from 'react-router-dom';

import {showActiveLog, showActiveChart} from '../../actions/index'
import './tableHeader.scss';

const TableHeader = () => {
    const dispatch = useDispatch();
    const {activeLine} = useSelector(state => state)

    const checkTaskLog = () => {
        if(!localStorage.getItem("allData")) {
            return
        } else {
            dispatch(showActiveLog());
        }
    }

    return (
        <div className='table_wrapp'>
            <div className="tableLog" onClick={() => checkTaskLog()}><Link to="/tableLog">TASKS LOG</Link></div>
            <div className="tableChart" onClick={() => dispatch(showActiveChart())}><Link to="/tableChart">TASKS CHART</Link></div>
            <hr className={activeLine === 'log' ? 'line_log-active' : 'line_log'}/>
            <hr className={activeLine === 'chart' ? 'line_chart-active' : 'line_chart'}/>
        </div>
         
    )
}

export default TableHeader;