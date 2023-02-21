import { DragEvent, FC, useContext, useMemo } from 'react'

import { List, Paper } from '@mui/material'

import { EntryStatus } from '@/interfaces'
import { EntriesContext, UIContext } from '@/context'

import { EntryCard } from './'
import styles from './EntryList.module.css'

interface Props {
  status: EntryStatus
}

export const EntryList: FC<Props> = ({ status }) => {
  const { entries } = useContext(EntriesContext)
  const { isDragging } = useContext(UIContext)

  const entriesByStatus = useMemo(
    () => entries.filter((entry) => entry.status === status),
    [entries]
  ) //TODO: ayuda a que react no esté haciendo muchas renderizaciones

  const allowDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault()
  }

  const onDropEntry = (event: DragEvent<HTMLDivElement>) => {
    const id = event.dataTransfer.getData('text')
    console.log('id', id)
  }
  return (
    //TODO: aqui haremos drop
    <div
      onDrop={onDropEntry}
      onDragOver={allowDrop}
      className={isDragging ? styles.dragging : ''}
    >
      <Paper
        sx={{
          height: 'calc(100vh - 210px)',
          overflowY: 'auto',
          backgroundColor: 'transparent',
          padding: '3px 5px',
        }}
      >
        {/* TODO: cambiará dependiendo si estoy haciendo drag o no */}
        <List sx={{ opacity: isDragging ? 0.2 : 1, transition: 'all .3' }}>
          {entriesByStatus.map((entry) => (
            <EntryCard key={entry._id} entry={entry} />
          ))}
        </List>
      </Paper>
    </div>
  )
}
