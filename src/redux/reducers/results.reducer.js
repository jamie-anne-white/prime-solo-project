const resultsReducer = (state = [], action) => {
    console.log('RESULTS REDUCER', state, action.payload);
    switch (action.type) {
        case 'SET_RESULTS':
            return action.payload;        
        default:
            return state;
    }

}

export default resultsReducer;