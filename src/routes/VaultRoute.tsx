import NavbarLayout from '../layout/NavbarLayout.tsx';
import HeaderLayout from '../layout/HeaderLayout.tsx';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { getAllLoginRequest } from '../api/login/getAllRequest.ts';
import { Key, useEffect, useState } from 'react';
import VaultLayout from '../layout/VaultLayout.tsx';

function VaultRoute() {
  let { id } = useParams();
  const logins = useQuery(['vault_list', id], () => getAllLoginRequest(id || ''), {
    enabled: !!id,
  });
  const [selected, setSelected] = useState<number | undefined>(undefined);
  
  useEffect(() => {
    if(!logins?.data?.data) return;
    
    setSelected(logins.data.data[0].id);
  }, [logins]);
  
  return (
    <NavbarLayout>
      <HeaderLayout>
        <VaultLayout element={selected}>
          {
            logins?.data?.data && logins.data.data.map((item: any, index: Key) => <p key={index}>{item.name}</p>)
          }
        </VaultLayout>
      </HeaderLayout>
    </NavbarLayout>
  );
}

export default VaultRoute;
