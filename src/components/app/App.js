
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import MainPage from '../pages/MainPage';
import TaskLogPage from '../pages/TaskLogPage';
import TaskChartPage from "../pages/TaskChartPage";
import SingleLogPage from '../pages/SingleLogPage';
import Page404 from '../pages/404';


function App() {

  	return (
		<Router>
			<Routes>
				<Route path="/" element={<MainPage/>}/>
				<Route path="/tableLog" element={<TaskLogPage/>}/>
				<Route path="/tableLog/:logId" element={<SingleLogPage/>}/>
				<Route path="/tableChart" element={<TaskChartPage/>}/>
				<Route path="*" element={<Page404/>}/>
			</Routes>
		</Router>
  	);
}

export default App;
