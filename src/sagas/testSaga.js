import { delay, put, take, call, fork, takeEvery, cancel, cancelled, takeLatest } from "redux-saga/effects";

function half(number) {
  return 0.5 * number;
}

export function* testSaga() {
  while (true) {
    console.log("Sarting Saga");
    const state = yield take("TEST_MESSAGE");
    const a = yield call(half, 5)
    console.log(a);
    const b = half(10)
    console.log(b);
    console.log("Finish Saga function", state);
  }
};

function* doNothing(state) {
  console.log("I've been called");
  yield delay(2000);
  console.log("I am doing nothun : ", state);
}

export function* testSagaFork() {
  while (true) {
    const state = yield take("TEST_MESSAGE_2");
    yield fork(doNothing, state);
    yield fork(doNothing, state);
    yield fork(doNothing, state);
    // yield call(doNothing,state);
    // yield call(doNothing,state);
    // yield call(doNothing,state);
  }
}

function* testSagaTakeEveryProcess({ payload }) {
  console.log(`Starting Process for ${payload}`);
  yield delay(10000);
  console.log(`Ending process for index ${payload}`);
}



export function* testSagaTakeEvery() {
  // const { payload } = 
  yield takeEvery(
    "TEST_MESSAGE_3",
    testSagaTakeEveryProcess
  )
  // console.log(`Finish takeEvery for index ${payload}`);
}

function* infinitySaga() {
  let index = 0;
  console.log("Starting infinity saga");
  while (true) {
    index++;
    try {
      console.log(`inside infinite loop ${index} times`);
      yield delay(1000)
    } catch (error) {
      console.error("A error happened", error);
    }
    finally {
      console.log("was the fork camcelled ? ", yield cancelled());
    }
  }
  // console.log("Ending infinitySaga");
}

// export function* testSagaCancelled() {
//   yield take("TEST_MESSAGE_4");
//   const handleCancel = yield fork(infinitySaga)
//   yield delay(3000);
//   yield cancel(handleCancel)

// }

export function* testSagaTakeLatest(){
  yield takeLatest("TEST_MESSAGE_5",infinitySaga)
}

export function* dispatchTest() {
  let index = 0;
  // yield put({ type: "TEST_MESSAGE_5", payload: index })

  while (true) {
    yield delay(5000);
    yield put({ type: "TEST_MESSAGE_5a", payload: index })
    index++;
  }
}
