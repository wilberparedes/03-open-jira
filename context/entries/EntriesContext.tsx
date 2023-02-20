import { Entry } from '@/interfaces/entry'
import { createContext } from 'react'

export interface ContextProps {
  entries: Entry[]
}

export const EntriesContext = createContext({} as ContextProps)
