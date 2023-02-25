import { Entry } from '@/interfaces/entry'
import { createContext } from 'react'

export interface ContextProps {
  entries: Entry[]
  addNewEntry: (description: string) => void
  updateEntry: (entry: Entry, showSnackbar?: boolean) => void
  deleteEntry: (id: string) => void
}

export const EntriesContext = createContext({} as ContextProps)
