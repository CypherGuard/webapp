import { persistentAtom } from '@nanostores/persistent';

export const publicUserPgpKey = persistentAtom<string>('publicUserPgpKey', '')

export const privateUserPgpKey = persistentAtom<string>('privateUserPgpKey', '')