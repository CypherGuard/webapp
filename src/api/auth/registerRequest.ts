import { BaseAxios } from '../instances/baseAxios.ts';

export interface RegisterRequestProps {
  email: string;
  username: string;
  password: string;
  password_confirm: string;
}

export function registerRequest(props: RegisterRequestProps) {
  return BaseAxios.post('/auth/register', props);
}
