const initialState = {
    reminders : []
};

const nameReducer = (state = initialState , action) => {
    switch(action.type){
        case 'ADD_REMINDER':
            console.log("Name reducer action - ",action.payload);
            return {
                ...state,
                reminders: [...state.reminders, action.payload]
            }
        default:
            return state;
    }
}

export default nameReducer;