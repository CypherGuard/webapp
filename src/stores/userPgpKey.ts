import { persistentAtom } from '@nanostores/persistent';

export const publicUserPgpKey = persistentAtom<string | undefined>('publicUserPgpKey', '')

export const privateUserPgpKey = persistentAtom<string | undefined>('privateUserPgpKey', '')