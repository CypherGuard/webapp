import { AuthAxios } from '../instances/authAxios.ts';

export function getUserVaultRequest(id: number) {
  return AuthAxios().get('/vaults/share/' + id);
}
