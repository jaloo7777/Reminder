import {ADD_REMINDER, REMOVE_REMINDER, CLEAR_REMINDER} from '../reducers/types';


export const add_Reminder = (text, date) => {
    const action = {
        type: ADD_REMINDER,
        text,
        date
    }
    console.log('add', action)
    return action;
}

export const remove_Reminder = (id) => {
    const action = {
        type: REMOVE_REMINDER,
        id
    }
    console.log('Remove', action)
return action
}

export const clear_Reminders = () => {
    const action = {
        type: CLEAR_REMINDER 
    }
    return action
}