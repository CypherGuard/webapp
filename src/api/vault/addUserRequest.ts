import { AuthAxios } from '../instances/authAxios.ts';

export interface addUserVaultRequestProps {
  username: string;
  id: number;
}

export function addUserVaultRequest(props: addUserVaultRequestProps) {
  return AuthAxios().post('/vaults/share/' + props.id, {
    username: props.username,
  });
}
