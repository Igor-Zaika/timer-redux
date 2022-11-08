import {Link} from 'react-router-dom';

import img from './error.gif';

const Page404 = () => {
    return (
        <div>
            <img style={{ display: 'block', width: "250px", height: "250px",objectFit: 'contain', margin: "0 auto"}}  src={img} alt="Error"/>
            <p style={{'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '20px'}}>Page doesn't exist</p>
            <Link style={{'display': 'block', 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '20px', 'marginTop': '10px'}} to="/timer-redux">Back to main page</Link>
        </div>
    )
}

export default Page404;