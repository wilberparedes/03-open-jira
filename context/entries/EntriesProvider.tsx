import { FC, PropsWithChildren, useEffect, useReducer } from 'react'

import { useSnackbar } from 'notistack'

import { Entry } from '@/interfaces'
import { entriesApi } from '@/apis'

import { EntriesContext, entriesReducer } from './'

export interface EntriesState {
  entries: Entry[]
}

const ENTRIES_INITIAL_STATE: EntriesState = {
  entries: [],
}

export const EntriesProvider: FC<PropsWithChildren> = ({ children }) => {
  const { enqueueSnackbar } = useSnackbar()
  const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE)

  const refreshEntries = async () => {
    const { data } = await entriesApi.get<Entry[]>('/entries')
    dispatch({ type: '[Entry] Refresh-Data', payload: data })
  }

  useEffect(() => {
    refreshEntries()
  }, [])

  const addNewEntry = async (description: string) => {
    try {
      const { data } = await entriesApi.post<Entry>('/entries', {
        description,
      })
      dispatch({ type: '[Entry] Add-Entry', payload: data })
    } catch (error) {}
  }

  const updateEntry = async (
    { _id, description, status }: Entry,
    showSnackbar = false
  ) => {
    try {
      const { data } = await entriesApi.put<Entry>(`/entries/${_id}`, {
        description,
        status,
      })
      dispatch({ type: '[Entry] Entry-Updated', payload: data })

      //TODO: mostrat snackbar
      if (showSnackbar) {
        enqueueSnackbar('Entrada actualizada', {
          variant: 'success',
          autoHideDuration: 1500,
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right',
          },
        })
      }
    } catch (error) {
      console.log({ error })
    }
  }

  const deleteEntry = async (id: string) => {
    try {
      const { data } = await entriesApi.delete<Entry>(`/entries/${id}`)
      dispatch({ type: '[Entry] Entry-Delete', payload: data._id })
      enqueueSnackbar('Entrada eliminada', {
        variant: 'success',
        autoHideDuration: 1500,
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right',
        },
      })
    } catch (error) {
      console.log({ error })
    }
  }

  return (
    <EntriesContext.Provider
      value={{
        ...state,
        addNewEntry,
        updateEntry,
        deleteEntry,
      }}
    >
      {children}
    </EntriesContext.Provider>
  )
}
