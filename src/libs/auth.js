import { AUTH_ACCESS_TOKEN } from './constants';

export default function getToken() {
  return localStorage.getItem(AUTH_ACCESS_TOKEN);
}
