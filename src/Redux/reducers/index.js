import counterReducer from './counter';
import loginReducer from './isLogged';
import { combineReducers } from 'redux';
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistconfig = {
    key: "root",
    storage,
  };

const allReducers = combineReducers({
    counter : counterReducer,
    login : loginReducer
})

export default allReducers;
// export const root = (state, action) => allReducers(state, action);
// export default persistReducer(persistconfig, root);