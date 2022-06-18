export const startTimer = () => {
    return {
        type: 'START_TIMER',
    }
}

export const stopTimer = () => {
    return {
        type: 'STOP_TIMER'
    }
}

export const increaseTimer = () => {
    return {
        type: 'INCREASE_TIMER'
    }
}

export const onActiveModal = () => {
    return {
        type: 'ON_ACTIVE_MODAL'
    }
}

export const offActiveModal = () => {
    return {
        type: 'OFF_ACTIVE_MODAL'
    }
}

export const addNewTask = (name) => {
    return {
        type: 'ADD_NEW_TASK',
        payload: name
    }
}

export const clearName = () => {
    return {
        type: 'CLEAR_NAME',
    }
}

export const showActiveLog = () => {
    return {
        type: 'SHOW_ACTIVE_LOG'
    }
}

export const showActiveChart = () => {
    return {
        type: 'SHOW_ACTIVE_CHART'
    }
}

export const createLog = () => {
    return {
        type: 'CREATE_LOG',
    }
}

export const deleteLog = () => {
    return {
        type: 'DELETE_LOG',
    }
}


