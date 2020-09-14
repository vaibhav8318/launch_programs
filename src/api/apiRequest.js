import superagent from 'superagent';
import config from '../config';

/*
 * @function 'call' common method that makes api requests
 * @param {object} 'request' stores the request 'method','endpoint', 'payload', 'query',
 * 'token' as keys...'
 */
export default function call({
  method = 'get',
  url,
  endpoint,
  payload,
  query,
  token,
  type = 'application/json'
}) {
  const { API } = config;
  const _url = url || `${API.BASE_URL}/${endpoint}`;

  const apiRequest = superagent(method, _url);

  return apiRequest
    .set('Authorization', `${token}`)
    .set('Content-Type', type)
    .send(payload)
    .query(query);
}
