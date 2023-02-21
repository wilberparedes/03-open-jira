import { FC, useContext, useMemo } from 'react'

import { List, Paper } from '@mui/material'

import { EntryStatus } from '@/interfaces'
import { EntriesContext } from '@/context'

import { EntryCard } from './'

interface Props {
  status: EntryStatus
}

export const EntryList: FC<Props> = ({ status }) => {
  const { entries } = useContext(EntriesContext)

  const entriesByStatus = useMemo(
    () => entries.filter((entry) => entry.status === status),
    [entries]
  ) //TODO: ayuda a que react no esté haciendo muchas renderizaciones

  return (
    //TODO: aqui haremos drop
    <div>
      <Paper
        sx={{
          overflowY: 'auto',
          backgroundColor: 'transparent',
          padding: '3px 5px',
        }}
      >
        {/* TODO: cambiará dependiendo si estoy haciendo drag o no */}
        <List sx={{ opacity: 1 }}>
          {entriesByStatus.map((entry) => (
            <EntryCard key={entry._id} entry={entry} />
          ))}
        </List>
      </Paper>
    </div>
  )
}
