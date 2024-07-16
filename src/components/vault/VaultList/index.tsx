import Vault from '../Vault';
import { Box, VStack } from '@chakra-ui/react';
import VaultAddButton from '../VaultAddButton';
import { useQuery, useQueryClient } from 'react-query';
import { getAllVaultRequest } from '../../../api/vault/getAllRequest.ts';
import { useEffect, useState } from 'react';


function VaultList() {
  const vaults = useQuery('vault_list_request', getAllVaultRequest)
  const [data, setData] = useState<any[]>()
  const queryClient = useQueryClient()
  
  useEffect(() => {
    if (!vaults?.data?.data) return
    
    setData(vaults.data.data)
  }, [vaults]);
  
  const onAdd = () => {
    queryClient.invalidateQueries('vault_list_request')
  }
  
  return (
    <Box p={4}>
      <VaultAddButton onAdd={onAdd} />
      <VStack>
        {
          data && data.map((item) => (
            <Vault vault={item} />
          ))
        }
      </VStack>
    </Box>
  )
}

export default VaultList;