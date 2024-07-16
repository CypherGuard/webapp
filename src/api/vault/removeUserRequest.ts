import { AuthAxios } from '../instances/authAxios.ts';

export interface removeUserVaultRequestProps {
  username: string,
  id: number
}

export function removeUserVaultRequest(props: removeUserVaultRequestProps) {
  return AuthAxios().delete('/vaults/share/' + props.id, {
    data: {
      username: props.username
    }
  });
}
