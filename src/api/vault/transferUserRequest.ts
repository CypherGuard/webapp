import { AuthAxios } from '../instances/authAxios.ts';

export interface transferUserVaultRequestProps {
  username: string,
  id: number
}

export function transferUserVaultRequest(props: transferUserVaultRequestProps) {
  return AuthAxios().post('/vaults/transfer/' + props.id, {
    username: props.username
  });
}
