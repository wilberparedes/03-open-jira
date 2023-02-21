import { FC, PropsWithChildren, useReducer } from 'react'

import { v4 as uuidv4 } from 'uuid'

import { Entry } from '@/interfaces/entry'
import { EntriesContext, entriesReducer } from './'

export interface EntriesState {
  entries: Entry[]
}

const ENTRIES_INITIAL_STATE: EntriesState = {
  entries: [
    {
      _id: uuidv4(),
      description:
        'Pendiente: Duis eu dolore est magna deserunt magna nulla aliquip ea non aute ut.',
      status: 'pending',
      createAt: Date.now(),
    },
    {
      _id: uuidv4(),
      description:
        'En Progreso: Voluptate labore elit est adipisicing sint cupidatat est velit aliqua deserunt.',
      status: 'in-progress',
      createAt: Date.now() - 1000000,
    },
    {
      _id: uuidv4(),
      description:
        'Terminada: Dolore irure est irure occaecat nostrud deserunt fugiat enim amet eiusmod magna.',
      status: 'finished',
      createAt: Date.now() - 100000,
    },
  ],
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
