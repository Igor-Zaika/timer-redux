import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import MainPage from '../pages/MainPage';
import TaskChartPage from "../pages/TaskChartPage";
import SingleTaskPage from '../pages/SingleTaskPage';
import Page404 from '../pages/404';

function App() {

  	return (
		<Router>
			<Routes>
				<Route path="/timer-redux" element={<MainPage/>}/>
				<Route path="/timer-redux/:taskId" element={<SingleTaskPage/>}/>
				<Route path="/timer-redux/chart" element={<TaskChartPage/>}/>
				<Route path="*" element={<Page404/>}/>
			</Routes>
		</Router>
  	);
}

export default App;
