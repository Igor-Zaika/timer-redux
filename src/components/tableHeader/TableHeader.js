
import { Link } from 'react-router-dom';

import './tableHeader.scss';

const TableHeader = () => {

    return (
        <div className='table_wrapp'>
            <div className="tableLog" ><Link to="/timer-redux">TASKS LOG</Link></div>
            <div className="tableChart" ><Link to="/timer-redux/chart">TASKS CHART</Link></div>
        </div>
         
    )
}

export default TableHeader;