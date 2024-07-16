import { AuthAxios } from '../instances/authAxios.ts';

export function getAllVaultRequest() {
  return AuthAxios().get('/vaults');
}
