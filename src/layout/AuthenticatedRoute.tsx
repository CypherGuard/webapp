import { useAuth } from '../utils/context/auth.tsx';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { JSX } from 'react/jsx-runtime';
import { useStore } from '@nanostores/react';
import { privateUserPgpKey, publicUserPgpKey } from '../stores/userPgpKey.ts';
import { generateKey } from 'openpgp';
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay, Text,
} from '@chakra-ui/react';
import { createAdapter, EncryptionAlgorithm } from 'iocane';

interface AuthenticatedRouteProps {
  element: JSX.Element;
}

export function AuthenticatedRoute(props: AuthenticatedRouteProps) {
  const auth = useAuth();
  const navigate = useNavigate();
  const publicKey = useStore(publicUserPgpKey)
  const privateKey = useStore(privateUserPgpKey)
  const [wantHash, setWantHash] = useState<boolean>(false)
  const [unHashedPublicKey, setUnHashedPublicKey] = useState<string>('')
  const [unHashedPrivateKey, setUnHashedPrivateKey] = useState<string>('')
  const [hashKey, setHashKey] = useState<string>('')
  
  
  const generateKeyPair = async () => {
    const { privateKey, publicKey } = await generateKey({
      type: 'ecc', // Type of the key, defaults to ECC
      curve: 'curve25519', // ECC curve name, defaults to curve25519
      userIDs: [{ name: 'Jon Smith', email: 'jon@example.com' }], // you can pass multiple user IDs
      passphrase: 'super long and hard to guess secret', // protects the private key
      format: 'armored' // output key format, defaults to 'armored' (other options: 'binary' or 'object')
    });
    
    return { privateKey, publicKey }
  }
  
  useEffect(() => {
    if (!auth.token) {
      auth.redirect(navigate);
    }
  }, [auth.token]);
  
  useEffect(() => {
    if (!publicKey || !privateKey) {
      generateKeyPair().then(({ privateKey, publicKey }) => {
        setUnHashedPublicKey(publicKey)
        setUnHashedPrivateKey(privateKey)
        setWantHash(true)
      })
    } else {
      setWantHash(false)
    }
  }, [publicKey, privateKey]);
  
  const encrypt = async (text: string) => {
    return await createAdapter()
      .setAlgorithm(EncryptionAlgorithm.GCM)
      .setDerivationRounds(300000)
      .encrypt(text, hashKey)
  }
  
  const hashPgpKey = () => {
    if (!hashKey || hashKey.length < 8) {
      return;
    }
    
    encrypt(unHashedPublicKey).then((encrypt) => {
      if (typeof encrypt === 'string') {
        publicUserPgpKey.set(encrypt);
      }
    })
    
    encrypt(unHashedPrivateKey).then((encrypt) => {
      if (typeof encrypt === 'string') {
        privateUserPgpKey.set(encrypt);
      }
    })
  }
  
  if (wantHash) {
    return (
      <Modal isOpen={true} onClose={() => {}} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>New KeyPair generation</ModalHeader>
          <ModalBody>
            <Text mb={4}>A new pair a key have been generated we need to protect them with a password</Text>
            <Input placeholder={'Enter a password'} variant={'filled'} value={hashKey} onChange={(e) => setHashKey(e.target.value)} />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme={'red'} onClick={() => hashPgpKey()}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    )
  }

  return auth.token ? props.element : null;
}