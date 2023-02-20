import { FC, PropsWithChildren, useReducer } from 'react'
import { EntriesContext, entriesReducer } from './'

export interface EntriesState {
  entries: [] //TODO: cambiar tipo de dato
}

const ENTRIES_INITIAL_STATE: EntriesState = {
  entries: [],
}

export const EntriesProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE)
  return (
    <EntriesContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </EntriesContext.Provider>
  )
}
