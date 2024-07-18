import NavbarLayout from '../layout/NavbarLayout.tsx';
import HeaderLayout from '../layout/HeaderLayout.tsx';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { getAllLoginRequest } from '../api/login/getAllRequest.ts';
import { Key, useEffect, useState } from 'react';
import VaultLayout from '../layout/VaultLayout.tsx';
import VaultElementList from '../components/vault/VaultElementList';

function VaultRoute() {
  let { id } = useParams();
  const logins = useQuery(['vault_list', id], () => getAllLoginRequest(id || ''), {
    enabled: !!id,
    onSuccess: (data) => {
      setSelected(data.data[0].id);
    }
  });
  const [selected, setSelected] = useState<number | undefined>(undefined);
  
  return (
    <NavbarLayout>
      <HeaderLayout>
        <VaultLayout id={selected}>
          {
            logins?.data?.data && <VaultElementList onClick={setSelected} element={logins.data.data} />
          }
        </VaultLayout>
      </HeaderLayout>
    </NavbarLayout>
  );
}

export default VaultRoute;
