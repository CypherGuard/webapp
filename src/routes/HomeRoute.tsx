import NavbarLayout from '../layout/NavbarLayout.tsx';
import HeaderLayout from '../layout/HeaderLayout.tsx';

export function HomeRoute() {
  return (
    <NavbarLayout>
      <HeaderLayout>
        <div>
          <h1>Home</h1>
          <p>Welcome to the home page.</p>
        </div>
      </HeaderLayout>
    </NavbarLayout>
  );
}
