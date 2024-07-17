import { AuthAxios } from '../instances/authAxios.ts';

export interface deleteVaultRequestProps {
  id: number;
}

export function deleteVaultRequest(props: deleteVaultRequestProps) {
  return AuthAxios().delete('/vaults/' + props.id);
}
