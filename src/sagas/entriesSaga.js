import axios from "axios";
import { call, fork, put, take } from "redux-saga/effects";
import entryTypes, { populateEntries, populateEntryDetails } from "../actions/entries.actions";


export function* getAllEntries() {
  yield take(entryTypes.GET_ENTRIES);
  console.log("I need to get Entries now");
  const result = yield call(axios.get, "http://localhost:3001/entries")
  console.log("Saga ka data bc : ", result);
  // yield put({ type: entryTypes.POPULATE_ENTRIES, payload: result.data })
  yield put(populateEntries(result.data))

}

function* getEntryDetails(id) {
  const { data } = yield call(axios, `http://localhost:3001/values/${id}`);
  console.log(data);
  // yield put({ type: entryTypes.POPULATE_ENTRY_DETAILS, payload: { id, entry: data } })
  yield put(populateEntryDetails(id,data))
}

export function* getAllEntriesDetails() {
  const { payload } = yield take(entryTypes.POPULATE_ENTRIES);
  for (let index = 0; index < payload.length; index++) {
    const entry = payload[index];
    yield fork(getEntryDetails, entry.id)

  }
}