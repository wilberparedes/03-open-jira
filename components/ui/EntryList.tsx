import { DragEvent, FC, useContext, useMemo } from 'react'

import { List } from '@mui/material'

import { EntryStatus } from '@/interfaces'
import { EntriesContext, UIContext } from '@/context'

import { EntryCard } from './'

import styles from './EntryList.module.css'

interface Props {
  status: EntryStatus
}

export const EntryList: FC<Props> = ({ status }) => {
  const { entries, updateEntry } = useContext(EntriesContext)
  const { isDragging, endDragging } = useContext(UIContext)

  const entriesByStatus = useMemo(
    () => entries.filter((entry) => entry.status === status),
    [entries]
  ) //TODO: ayuda a que react no esté haciendo muchas renderizaciones

  const allowDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault()
  }

  const onDropEntry = (event: DragEvent<HTMLDivElement>) => {
    const id = event.dataTransfer.getData('text')
    const entry = entries.find((entry) => entry._id === id)!
    updateEntry({ ...entry, status })
    endDragging()
  }
  return (
    <div
      onDrop={onDropEntry}
      onDragOver={allowDrop}
      className={isDragging ? styles.dragging : ''}
      style={{ height: '100%', display: 'block', padding: '3px 5px' }}
    >
      <List sx={{ opacity: isDragging ? 0.2 : 1, transition: 'all .3' }}>
        {entriesByStatus.map((entry) => (
          <EntryCard key={entry._id} entry={entry} />
        ))}
      </List>
    </div>
  )
}
