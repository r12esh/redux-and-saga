import { applyMiddleware, combineReducers, createStore } from "redux";
import entriesReducer from "../reducers/entries.reducers";
import {composeWithDevTools} from "redux-devtools-extension";
import modalsReducer from "../reducers/modals.reducers";
import createSagaMiddleware from "redux-saga";
import { initSagas } from "../sagas";
// import { testSaga } from "../sagas/testSaga";

const rootReducer = combineReducers({
  entries: entriesReducer,
  modals: modalsReducer,
});

const sagaMiddleware = createSagaMiddleware();
const middleWares = [sagaMiddleware];

const configureStore = () => {

  const store = createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(...middleWares)
    ));
  initSagas(sagaMiddleware)
  // sagaMiddleware.run(testSaga);
  return store;
  
};


// Another way of doing the configureStore is as Follows:
// const configureStore = () =>{
//   return compose(
//     applyMiddleware(sagaMiddleware), 
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     )(createStore)(rootReducer)
// };


export default configureStore;