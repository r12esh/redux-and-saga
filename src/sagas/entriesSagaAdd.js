import axios from "axios";
import { call, put, take } from "redux-saga/effects";
import entryTypes from "../actions/entries.actions";

export function* deleteEntrySaga() {
  const { payload } = yield take(entryTypes.REMOVE_ENTRY);
  yield call(deleteEntry, payload);
  yield put({ type: "REMOVE_ENTRY_RESULT", payload })
}

function deleteEntry(id) {
  axios.delete(`http://localhost:3001/entries/${id}`);
  axios.delete(`http://localhost:3001/values/${id}`);
  // await new Promise((s) => setTimeout(s, 3000))
}
