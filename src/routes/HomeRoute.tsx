import { useAuth } from '../utils/context/auth.tsx';

export function HomeRoute() {
  const {token} = useAuth();
  
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the home page.</p>
      <p>{token.toString()}</p>
    </div>
  );
}
