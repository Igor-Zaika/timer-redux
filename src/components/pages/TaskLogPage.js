import { useSelector } from "react-redux";

import Timer from "../timer/Timer";
import TableHeader from "../tableHeader/TableHeader";
import Modal from "../modal/Modal";
import TaskLogTable from "../tasksLog/TaskLog";

const TaskLogPage = () => {
    const { modal } = useSelector(state => state);

    return (
        <>
            <Timer/>
            <TableHeader/>
            {modal ? <Modal/> : null}
            <TaskLogTable/>
        </>
    )
}

export default TaskLogPage;