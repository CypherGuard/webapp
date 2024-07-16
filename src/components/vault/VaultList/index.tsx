import Vault from '../Vault';
import { Box, Divider, VStack } from '@chakra-ui/react';
import VaultAddButton from '../VaultAddButton';
import { useQuery, useQueryClient } from 'react-query';
import { getAllVaultRequest } from '../../../api/vault/getAllRequest.ts';
import { Key } from 'react';


function VaultList() {
  const vaults = useQuery('vault_list_request', getAllVaultRequest);
  const queryClient = useQueryClient();
  
  const onAdd = () => {
    queryClient.invalidateQueries('vault_list_request');
  };
  
  return (
    <Box w={'100%'} display={'flex'} flexDirection={'column'} gap={2}>
      <VaultAddButton onAdd={onAdd} />
      <Divider orientation={'horizontal'} />
      <VStack>
        {
          vaults?.data?.data && vaults.data.data.map((item: any, index: Key) => (
            <Vault vault={item} key={index} />
          ))
        }
      </VStack>
    </Box>
  )
}

export default VaultList;