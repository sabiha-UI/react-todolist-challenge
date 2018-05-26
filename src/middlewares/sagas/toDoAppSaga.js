import { call, takeLatest, put } from 'redux-saga/effects';
import { actions, actionTypes } from '../../actions';
import { api } from '../api';

function* fetchItems() {
  try {
    const { data, status } = yield call(api.fetchItems);
    if (status !== 200) {
      yield put(actions.failedFetchListItems());
    } else {
      yield put(actions.fetchedListItems(data));
    }
  } catch (e) {
    //yield put(actions.failedFetchListItems());
  }
}

function* addItem({ item }) {
  try {
    const { status } = yield call(api.addItem, item);
    if (status !== 200) {
      yield put(actions.failedAddListItem());
    }
  } catch (e) {
    //yield put(actions.failedAddListItem());
  }
}

function* editItem({ item }) {
  try {
    const { status } = yield call(api.editItem, item);
    if (status !== 200) {
      yield put(actions.failedEditListItem());
    }
  } catch (e) {
    //yield put(actions.failedEditListItem());
  }
}

function* deleteItem({ item }) {
  try {
    const { status } = yield call(api.deleteItem, item._id);
    if (status !== 200) {
      yield put(actions.failedDeleteListItem());
    }
  } catch (e) {
    //yield put(actions.failedDeleteListItem());
  }
}

//watcher saga
export default function* toDoAppSaga() {
  yield takeLatest(actionTypes.FETCH_LIST_ITEMS, fetchItems);
  yield takeLatest(actionTypes.ADD_LIST_ITEM, addItem);
  yield takeLatest(actionTypes.EDIT_LIST_ITEM, editItem);
  yield takeLatest(actionTypes.DELETE_LIST_ITEM, deleteItem);
}
