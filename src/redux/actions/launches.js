// ------------------------------------
// Constants
// ------------------------------------
export const GET_LAUNCHES_START = 'GET_LAUNCHES_START';
export const GET_LAUNCHES_SUCCESS = 'GET_LAUNCHES_SUCCESS';
export const GET_LAUNCHES_FAILED = 'GET_LAUNCHES_FAILED';

// ------------------------------------
// Actions
// ------------------------------------
export function getLaunchesStart(data) {
  return { type: GET_LAUNCHES_START, data };
}
export function getLaunchesSuccess(data) {
  return { type: GET_LAUNCHES_SUCCESS, data };
}
export function getLaunchesFailed(data) {
  return { type: GET_LAUNCHES_FAILED, data };
}
