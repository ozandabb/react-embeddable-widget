import nameReducer from '../reducers/nameReducer';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore }  from 'redux-persist';


const store = createStore(
    nameReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

// const middleware = [thunk];

// const store = createStore(

//   console.log("Running the store"),
//     nameReducer,
//     compose(
//         applyMiddleware(...middleware),
//         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     )
//   );

// export const persistor = persistStore(store);
// export default { store , persistor };


export default store;


