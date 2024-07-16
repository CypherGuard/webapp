import { AuthAxios } from '../instances/authAxios.ts';

export function GetCurrentUser() {
  return AuthAxios().get('/user/me');
}