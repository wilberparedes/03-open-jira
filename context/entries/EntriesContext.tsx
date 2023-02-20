import { createContext } from 'react'

export interface ContextProps {
  entries: boolean[] //TODO: falta el tipo de dato del arreglo
}

export const EntriesContext = createContext({} as ContextProps)
