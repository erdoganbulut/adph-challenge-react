import {
  API_CALL_REQUEST,
  API_CALL_SUCCESS,
  API_CALL_FAILURE,
  DELETE_ITEM_FROM_DATASET,
} from '../actions/actions.types';
import StateI, { DatasetItemI } from './state.types';

const initialState: StateI = {
  dataset: [],
  fetching: false,
  error: null,
};

const findDeleteItemsIds = (dataset: DatasetItemI[], id: number) => {
  let ids: number[] = [];
  let childIds: number[] = [];
  const el = dataset.find(o => o.ID === id);
  const childs = dataset.filter(o => o.parentID === id);
  if (childs.length > 0) {
    childs.forEach(child => {
      childIds = [...childIds, ...findDeleteItemsIds(dataset, child.ID)];
    });
  }
  if (el) ids = [...ids, ...childIds, el.ID];
  return ids;
};

const deleteItem = (dataset: DatasetItemI[], id: number) => {
  const itemsIds = findDeleteItemsIds(dataset, id);
  const newArr = [...dataset];
  itemsIds.forEach(i => {
    const itemIndex = newArr.findIndex((o: DatasetItemI) => o.ID === i);
    if (itemIndex) {
      newArr.splice(itemIndex, 1);
    }
  });
  return newArr;
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case API_CALL_REQUEST:
      return { ...state, fetching: true, error: null };
    case API_CALL_SUCCESS:
      return { ...state, fetching: false, dataset: action.dataset };
    case API_CALL_FAILURE:
      return { ...state, fetching: false, dataset: [], error: action.error };
    case DELETE_ITEM_FROM_DATASET:
      return { ...state, dataset: deleteItem(state.dataset, action.id) };
    default:
      return state;
  }
};

export default reducer;
