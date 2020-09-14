// ------------------------------------
// Imports
// ------------------------------------
import {
  GET_LAUNCHES_START,
  GET_LAUNCHES_SUCCESS,
  GET_LAUNCHES_FAILED,
} from 'redux/actions/launches';

// ------------------------------------
// Reducer Handlers
// ------------------------------------
export const initialState = {
  list: [],
  isFetching: false,
  isError: false,
};

const REDUCER_HANDLERS = {
  [GET_LAUNCHES_START]: (state) => ({
    ...state,
    isFetching: true,
  }),
  [GET_LAUNCHES_SUCCESS]: (state, action) => ({
    ...state,
    isFetching: false,
    list: action.data,
  }),
  [GET_LAUNCHES_FAILED]: (state) => ({
    ...state,
    isFetching: false,
    isError: true,
  }),
};

// ------------------------------------
// Reducer
// ------------------------------------
export default function launches(state = initialState, action) {
  const handler = REDUCER_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
