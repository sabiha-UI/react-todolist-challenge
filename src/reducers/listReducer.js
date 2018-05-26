// use this reducer for your todo list reducer...
import uuidv4 from 'uuid/v4';
import { actionTypes } from '../actions';

const initialState = {
  items: [{_id:1001, text:"aaa"}, {_id:1002, text:"bbb"}, {_id:1003, text:"ccc"}],
  currentItem: {
    _id: '',
    text: '',
  },
  oldItem: {
    _id: '',
    text: '',
  },
  errorWhileFetchingItems: false,
};

const ListReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CURRENT_ITEM: {
      return {
        ...state,
        currentItem: action.item,
        oldItem:action.item,
      };
    }
    case actionTypes.RESET_CURRENT_ITEM: {
      return {
        ...state,
        currentItem: initialState.currentItem,
      };
    }

    case actionTypes.TEXT_CHANGE: {
      return {
        ...state,
        currentItem: {
          ...state.currentItem,
          text: action.text,
        },
      };
    }
    case actionTypes.FETCH_LIST_ITEMS: {
      return {
        ...state,
      };
    }
    case actionTypes.FETCHED_LIST_ITEMS: {
      return {
        ...state,
        items: action.items,
      };
    }
    case actionTypes.ADD_LIST_ITEM: {
      return {
        ...state,
        oldItem: action.item,
        errorWhileFetchingItems: false,
        items: [...state.items, action.item],
        currentItem: initialState.currentItem,
      };
    }
    case actionTypes.EDIT_LIST_ITEM: {
      const index = state.items.findIndex(item => item._id === action.item._id);
      state.items.splice(index, 1, action.item);
      return {
        ...state,
        currentItem: initialState.currentItem,
        items: state.items,
      };
    }
    case actionTypes.DELETE_LIST_ITEM: {
      return {
        ...state,
        oldItem: action.item,
        items: state.items.filter(item => item._id !== action.item._id),
      };
    }

    case actionTypes.FAILED_FETCH_LIST_ITEMS: {
      alert("Unable to fetch list, looks like server down, hence showing local data...");
      return {
        ...state,
        errorWhileFetchingItems: true,
      };
    }
    case actionTypes.FAILED_ADD_LIST_ITEM: {
      alert("Unable to add item,  looks like server down...");
      const index = state.items.findIndex(
        item => item._id === state.oldItem._id,
      );
      state.items.splice(index, 1);
      return {
        ...state,
      };
    }
    case actionTypes.FAILED_EDIT_LIST_ITEM: {
      alert("Unable to update item,  looks like server down...");
      const index = state.items.findIndex(
        item => item._id === state.oldItem._id,
      );
      state.items.splice(index, 1, state.oldItem);
      return {
        ...state,
        items: state.items,
      };
    }
    case actionTypes.FAILED_DELETE_LIST_ITEM: {
      alert("Unable to delete item,  looks like server down...");
      return {
        ...state,
        items: [...state.items, state.oldItem],
      };
    }
    default:
      return state;
  }
};

export default ListReducer;
