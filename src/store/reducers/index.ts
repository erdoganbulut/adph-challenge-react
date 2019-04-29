import { API_CALL_REQUEST, API_CALL_SUCCESS, API_CALL_FAILURE } from '../actions/actions.types';
import StateI from './state.types';

const initialState: StateI = {
  dataset: null,
  fetching: false,
  error: null,
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case API_CALL_REQUEST:
      return { ...state, fetching: true, error: null };
    case API_CALL_SUCCESS:
      return { ...state, fetching: false, dataset: action.dataset };
    case API_CALL_FAILURE:
      return { ...state, fetching: false, dataset: null, error: action.error };
    default:
      return state;
  }
};

export default reducer;
