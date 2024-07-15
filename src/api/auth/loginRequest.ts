import { BaseAxios } from '../instances/baseAxios.ts';

export interface LoginRequestProps {
  email: string;
  password: string;
}

export function loginRequest(props: LoginRequestProps) {
  return BaseAxios.post('/auth/login', props);
}
