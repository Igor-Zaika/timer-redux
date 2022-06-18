import { useSelector } from "react-redux";

import Timer from "../timer/Timer";
import TableHeader from "../tableHeader/TableHeader";
import Modal from "../modal/Modal";
import TaskChart from "../tasksChart/TaskChart";

const TaskChartPage = () => {
    const { modal } = useSelector(state => state);

    return (
        <>
            <Timer/>
            <TableHeader/>
            {modal ? <Modal/> : null}
            <TaskChart/>
        </>
    )
}

export default TaskChartPage;