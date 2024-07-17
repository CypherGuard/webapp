import { AuthAxios } from '../instances/authAxios.ts';

export interface editVaultRequestProps {
  name: string;
  id: number;
}

export function editVaultRequest(props: editVaultRequestProps) {
  return AuthAxios().put('/vaults/' + props.id, {
    name: props.name,
  });
}
