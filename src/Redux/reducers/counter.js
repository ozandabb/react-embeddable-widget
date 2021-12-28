// const initialState = {
//     myCounter : 0
// }

// const counterReducer = (state = initialState , action) => {
//     switch(action.type){
//         case 'INCREMENT':
//             return {
//                 ...state,
//                 myCounter : state.myCounter + action.payload
//             };
//         case 'DECREMENT':
//             return state.myCounter - 1;
//         default:
//             return state.myCounter
//     }
// }


const counterReducer = (state = 0 , action) => {
    switch(action.type){
        case 'INCREMENT':
            return state + action.payload;
        case 'DECREMENT':
            return state - 1;
        default:
            return state
    }
}

export default counterReducer;