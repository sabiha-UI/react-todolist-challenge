import { axios } from '../../utils';

const ENDPOINT = {
  FETCH_LIST_ITEMS: '/items',
  ADD_LIST_ITEM: '/items/add',
  EDIT_LIST_ITEM: 'items/edit',
  DELETE_LIST_ITEM: 'items/delete/',
};

const fetchItems = () => axios.get(ENDPOINT.FETCH_LIST_ITEMS);

const addItem = item => axios.post(ENDPOINT.ADD_LIST_ITEM, item);

const editItem = item => axios.put(ENDPOINT.EDIT_LIST_ITEM, item);

const deleteItem = itemId =>
  axios.delete(`${ENDPOINT.DELETE_LIST_ITEM}${itemId}`);

export default { fetchItems, addItem, editItem, deleteItem };
