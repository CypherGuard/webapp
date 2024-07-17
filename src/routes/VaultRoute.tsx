import NavbarLayout from '../layout/NavbarLayout.tsx';
import HeaderLayout from '../layout/HeaderLayout.tsx';
import { useStore } from '@nanostores/react';
import { UserPgpKey } from '../stores/userPgpKey.ts';

function VaultRoute() {
  const key = useStore(UserPgpKey);

  return (
    <NavbarLayout>
      <HeaderLayout>
        <div>
          <h1>Vault</h1>
        </div>
        {key ? (
          <div>
            <h2>Public Key</h2>
            <p>{key.publicKey}</p>
            <h2>Private Key</h2>
            <p>{key.privateKey}</p>
          </div>
        ) : (
          <div>
            <h2>Loading...</h2>
          </div>
        )}
      </HeaderLayout>
    </NavbarLayout>
  );
}

export default VaultRoute;
