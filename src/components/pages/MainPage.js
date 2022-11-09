import { useSelector } from "react-redux";

import Timer from "../timer/Timer";
import TableHeader from "../tableHeader/TableHeader";
import Modal from "../modal/Modal";
import TaskLog from "../tasksLog/TaskLog";
import { useEffect } from "react";

const MainPage = () => {
    const { modal } = useSelector(state => state);

    useEffect(() => {
        document.body.style.overflow = modal ? 'hidden' : 'scroll'
    },[modal])
    
    return (
        <>
            <Timer/>
            <TableHeader/>
            {modal ? <Modal/> : null}
            <TaskLog/>
        </>
    )
}

export default MainPage;