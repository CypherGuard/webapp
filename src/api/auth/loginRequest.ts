import { BaseAxios } from '../instances/baseAxios.ts';

export interface LoginRequestProps {
  email: string;
  username: string;
  password: string;
  password_confirm: string;
}

export function loginRequest (props: LoginRequestProps) {
  return BaseAxios.post(
    '/auth/register',
    props
  );
}