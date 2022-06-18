
const initialState = {
    nameTask: '',
    modal: false,
    activeLine: '',
    time: Math.floor(Date.now() - localStorage.getItem('timerStart')),
    timerActive: false,
    dataTable: JSON.parse(localStorage.getItem('allData'))
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'START_TIMER':
            return {
                ...state,
                timerActive: true,
            }
        case 'STOP_TIMER':
            return {
                ...state,
                timerActive: false,
                time: 0,
                
            } 
        case 'INCREASE_TIMER':
            return {
                ...state,
                timerActive: true,
                time: Math.floor(Date.now() - +localStorage.getItem('timerStart'))
            }
        case 'ON_ACTIVE_MODAL':
            return {
                ...state,
                modal: true
            }
        case 'OFF_ACTIVE_MODAL':
            return {
                ...state,
                modal: false
            }
        case 'ADD_NEW_TASK':
            return {
                ...state,
                nameTask: action.payload
            };
        case 'CLEAR_NAME':
            return {
                ...state,
                nameTask: ''
            };    
        case 'SHOW_ACTIVE_LOG':
            return {
                ...state,
                activeLine: 'log'
            }  
        case 'SHOW_ACTIVE_CHART':
            return {
                ...state,
                activeLine: 'chart'
            } 
        case 'CREATE_LOG':
            return {
                ...state,
                dataTable: JSON.parse(localStorage.getItem('allData')),
            }
        case 'DELETE_LOG':
            return {
                ...state,
                dataTable: JSON.parse(localStorage.getItem('allData'))
            };
        default: return state
    }
}

export default reducer;
