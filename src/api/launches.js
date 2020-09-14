import apiCall from './apiRequest';
import endPoints from './endpoints';

export function fetchLaunchesListApi(params) {
  console.log('<<<<----fetchLaunchesListApi---->>>>', params);
  return apiCall({
    method: 'get',
    endpoint: `${endPoints.launches}`,
    query: params
  });
}

export default {
  fetchLaunchesListApi
};
