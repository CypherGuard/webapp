import NavbarLayout from '../layout/NavbarLayout.tsx';
import HeaderLayout from '../layout/HeaderLayout.tsx';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { getAllLoginRequest } from '../api/login/getAllRequest.ts';
import { SetStateAction, useEffect, useState } from 'react';
import VaultLayout from '../layout/VaultLayout.tsx';
import VaultElementList from '../components/vault/VaultElementList';

function VaultRoute() {
  let { id } = useParams();
  const logins = useQuery(['vault_list', id], () => getAllLoginRequest(id || ''), {
    enabled: !!id,
    onSuccess: (data) => {
      setSelected(data.data.map((login: any) => {
        return {
          ...login,
          type: 'login',
        };
      })[0]);
    },
  });
  const [allObject, setAllObject] = useState<any[]>([]);
  
  useEffect(() => {
    logins.refetch();
  }, [id]);
  
  useEffect(() => {
    let temp: SetStateAction<any[]> = []
    if (logins?.data?.data) {
      let loginsData = logins.data.data.map((login: any) => {
        return {
          ...login,
          type: 'login'
        }
      });
      temp = [...temp, ...loginsData];
    }
    setAllObject(temp);
  }, [logins]);
  
  const [selected, setSelected] = useState<any | undefined>(undefined);
  
  return (
    <NavbarLayout>
      <HeaderLayout>
        <VaultLayout selectedElement={selected}>
          {
            logins?.data?.data && <VaultElementList onClick={setSelected} element={allObject} />
          }
        </VaultLayout>
      </HeaderLayout>
    </NavbarLayout>
  );
}

export default VaultRoute;
