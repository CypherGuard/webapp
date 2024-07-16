import { AuthAxios } from '../instances/authAxios.ts';

export interface createVaultRequestProps {
  name: string;
}

export function createVaultRequest(props: createVaultRequestProps) {
  return AuthAxios().post('/vaults', props);
}
