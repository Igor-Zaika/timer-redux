
import { Link } from 'react-router-dom';

import './tableHeader.scss';

const TableHeader = () => {

    const checkTaskLog = () => {
        if(!localStorage.getItem("allData")) {
            return
        }
    }

    return (
        <div className='table_wrapp'>
            <div className="tableLog" onClick={() => checkTaskLog()}><Link to="/tableLog">TASKS LOG</Link></div>
            <div className="tableChart" ><Link to="/tableChart">TASKS CHART</Link></div>
        </div>
         
    )
}

export default TableHeader;