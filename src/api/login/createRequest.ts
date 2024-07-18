import { AuthAxios } from '../instances/authAxios.ts';

export interface createLoginRequestProps {
  name: string;
  username: string;
  password: string;
  url: string;
  notes: string;
  totp: string;
  vault_id: string;
}

export function createLoginRequest(props: createLoginRequestProps) {
  return AuthAxios().post('/vaults/' + props.vault_id + '/login', {
    name: props.name,
    username: props.username,
    password: props.password,
    url: props.url,
    notes: props.notes,
    totp: props.totp,
  });
}