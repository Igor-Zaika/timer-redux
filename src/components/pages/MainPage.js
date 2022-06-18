import { useSelector } from "react-redux";

import Timer from "../timer/Timer";
import TableHeader from "../tableHeader/TableHeader";
import Modal from "../modal/Modal";

const MainPage = () => {
    const { modal } = useSelector(state => state);

    return (
        <>
            <Timer/>
            <TableHeader/>
            {modal ? <Modal/> : null}
        </>
    )
}

export default MainPage;