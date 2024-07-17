import { BaseAxios } from '../instances/baseAxios.ts';

export function GetServerPublicKey() {
  return BaseAxios.get('/pgp/key');
}
