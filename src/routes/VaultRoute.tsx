import NavbarLayout from '../layout/NavbarLayout.tsx';
import HeaderLayout from '../layout/HeaderLayout.tsx';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { getAllLoginRequest } from '../api/login/getAllRequest.ts';
import { Key } from 'react';

function VaultRoute() {
  let { id } = useParams();
  const logins = useQuery(['vault_list', id], () => getAllLoginRequest(id || ''), {
    enabled: !!id,
  });
  
  return (
    <NavbarLayout>
      <HeaderLayout>
        {
          logins?.data?.data && logins.data.data.map((item: any, index: Key) => <p key={index}>{item.name}</p>)
        }
      </HeaderLayout>
    </NavbarLayout>
  );
}

export default VaultRoute;
