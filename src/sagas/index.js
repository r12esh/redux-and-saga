// import * as testSaga from "./testSaga";A
import * as entriesSagaAdd from "./entriesSagaAdd";
import * as entriesSaga from "./entriesSaga";
import * as deleteEntrySaga from "./entriesSagaDeletion"
export function initSagas(sagaMiddleware) {
  // Object.values(testSaga).forEach(sagaMiddleware.run.bind(sagaMiddleware))
  Object.values(entriesSaga).forEach(sagaMiddleware.run.bind(sagaMiddleware))
  Object.values(deleteEntrySaga).forEach(sagaMiddleware.run.bind(sagaMiddleware))
  Object.values(entriesSagaAdd).forEach(sagaMiddleware.run.bind(sagaMiddleware))
}
