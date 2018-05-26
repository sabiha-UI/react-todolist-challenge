import { fork, all } from 'redux-saga/effects';
import toDoAppSaga from './toDoAppSaga';

export default function* rootSaga() {
  yield all([fork(toDoAppSaga)]);
}
