// actions for the todo list can go here...

import * as types from './types';
import uuidv4 from 'uuid/v4';

const setCurrentItem = item => {
  return {
    type: types.SET_CURRENT_ITEM,
    item,
  };
};

const resetCurrentItem = () => {
  return {
    type: types.RESET_CURRENT_ITEM,
  };
};

const onTextChange = text => {
  return {
    type: types.TEXT_CHANGE,
    text,
  };
};

const fetchListItems = () => {
  return {
    type: types.FETCH_LIST_ITEMS,
  };
};

const fetchedListItems = items => {
  return {
    type: types.FETCHED_LIST_ITEMS,
    items,
  };
};

const addListItem = item => {
  item._id = uuidv4();
  return {
    type: types.ADD_LIST_ITEM,
    item,
  };
};

const editListItem = item => {
  return {
    type: types.EDIT_LIST_ITEM,
    item,
  };
};

const deleteListItem = item => {
  return {
    type: types.DELETE_LIST_ITEM,
    item,
  };
};

const failedFetchListItems = () => {
  return {
    type: types.FAILED_FETCH_LIST_ITEMS,
  };
};

const failedAddListItem = () => {
  return {
    type: types.FAILED_ADD_LIST_ITEM,
  };
};

const failedEditListItem = () => {
  return {
    type: types.FAILED_EDIT_LIST_ITEM,
  };
};

const failedDeleteListItem = () => {
  return {
    type: types.FAILED_DELETE_LIST_ITEM,
  };
};

export {
  setCurrentItem,
  resetCurrentItem,
  onTextChange,
  fetchListItems,
  fetchedListItems,
  addListItem,
  editListItem,
  deleteListItem,
  failedFetchListItems,
  failedAddListItem,
  failedEditListItem,
  failedDeleteListItem,
};
