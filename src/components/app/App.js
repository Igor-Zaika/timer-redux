import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { useDispatch } from "react-redux";

import { setTusks } from "../../actions";
import MainPage from '../pages/MainPage';
import TaskChartPage from "../pages/TaskChartPage";
import SingleTaskPage from '../pages/SingleTaskPage';
import Page404 from '../pages/404';


function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		
		try {
			const tasksStorage = JSON.parse(localStorage.getItem('tasksLog'));

			if(tasksStorage.length > 0) {
				dispatch(setTusks(tasksStorage))
			}else {
				console.log('No tasks found');
			}
		}catch(e) {
			console.log('Failed to parse tasks', e);
		}
		// eslint-disable-next-line
	}, [])

  	return (
		<Router>
			<Routes>
				<Route path="/" element={<MainPage/>}/>
				<Route path="/:taskId" element={<SingleTaskPage/>}/>
				<Route path="/chart" element={<TaskChartPage/>}/>
				<Route path="*" element={<Page404/>}/>
			</Routes>
		</Router>
  	);
}

export default App;
