import { useDispatch } from 'react-redux';

import { offActiveModal } from '../../actions/index';
import './modal.scss'


const Modal = () => {
    const dispatch = useDispatch();

    return (
        <div className="modal">
            <div className="modal_content">
                <div className="name">Empty task name</div>
                <div className="description">Are you trying close your task without name,entre the title and try agian!</div>
                <div className="close" onClick={() => dispatch(offActiveModal())}>CLOSE</div>
            </div>
        </div>
    )
}

export default Modal;