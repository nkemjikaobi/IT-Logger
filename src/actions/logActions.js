import {GET_LOGS, SET_LOADING, LOGS_ERROR, SEARCH_LOGS, ADD_LOG, DELETE_LOG, UPDATE_LOG, SET_CURRENT, CLEAR_CURRENT } from './types'

//Get logs
export const getLogs = () => async dispatch => {     //getState is an additional parameter for the functin that can be added
  
    //set loading to true
    setLoading();
    try {
        const res = await fetch('/logs');
        const data = await res.json();

        dispatch({
            type: GET_LOGS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: LOGS_ERROR,
            payload: error.response.statusText
        })
    }
}

//Add new log
export const addLog = (log) => async dispatch => {     //getState is an additional parameter for the functin that can be added
  
    //set loading to true
    setLoading();
    try {
        const res = await fetch('/logs',{
            method: 'POST',
            body: JSON.stringify(log),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();

        dispatch({
            type: ADD_LOG,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: LOGS_ERROR,
            payload: error.response.statusText
        })
    }
}

//Edit log
export const updateLog = (log) => async dispatch => {     //getState is an additional parameter for the functin that can be added
  
    //set loading to true
    setLoading();
    try {
        const res = await fetch(`/logs/${log.id}`,{
            method: 'PUT',
            body: JSON.stringify(log),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();

        dispatch({
            type: UPDATE_LOG,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: LOGS_ERROR,
            payload: error.response.statusText
        })
    }
}

//Search logs
export const searchLogs = (text) => async dispatch => {     //getState is an additional parameter for the functin that can be added
  
    //set loading to true
    setLoading();
    try {
        const res = await fetch(`/logs?q=${text}`);
        const data = await res.json();

        dispatch({
            type: SEARCH_LOGS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: LOGS_ERROR,
            payload: error.response.statusText
        })
    }
}

//Delete log
export const deleteLog = (id) => async dispatch => {

    try {

        setLoading();

        await fetch(`/logs/${id}`, {
            method: 'DELETE',
        });

        dispatch({
            type: DELETE_LOG,
            payload: id
        })
    } catch (error) {
        dispatch({
            type: LOGS_ERROR,
            payload: error.response.statusText
        })
    }
}

//Set current log
export const setCurrent = log => {
    return {
        type: SET_CURRENT,
        payload: log
    }
}

//Clear current log
export const clearCurrent = log => {
    return {
        type: CLEAR_CURRENT
    }
}

//Set loading to true
export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}