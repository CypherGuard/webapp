import { atom, onMount } from 'nanostores';
import { generateKey } from 'openpgp';

interface UserPgpKeyProps {
  publicKey: string;
  privateKey: string;
}

export const UserPgpKey = atom<UserPgpKeyProps | undefined>(undefined)

onMount(UserPgpKey,() => {
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
  
  generateKeyPair().then(({ privateKey, publicKey }) => {
    UserPgpKey.set({ privateKey, publicKey })
  })
})