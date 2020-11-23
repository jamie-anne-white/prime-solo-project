const editReducer = (state = [{user_id: 0}], action) => {
    switch (action.type) {
        // case 'SEND_ID':
        //     console.log(action.payload)
        //     id = action.payload
        //     return state;           
        case 'EDIT_ID_RESULTS':
            console.log(action.payload)
            return action.payload
        default:
            return state;
    }
}

export default editReducer;
