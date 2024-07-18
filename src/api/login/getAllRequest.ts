import { AuthAxios } from '../instances/authAxios.ts';

export function getAllLoginRequest(id: string) {
  return AuthAxios().get('/vaults/' + id + '/login');
}