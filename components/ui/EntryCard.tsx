import { DragEvent, FC, useContext } from 'react'

import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material'

import { Entry } from '@/interfaces'
import { UIContext } from '@/context'

interface Props {
  entry: Entry
}

export const EntryCard: FC<Props> = ({ entry }) => {
  const { startDragging, endDragging } = useContext(UIContext)

  const onDragStart = (event: DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData('text', entry._id)
    startDragging()
  }

  const onDragEnd = () => {
    //TODO: cancelar on drag
    endDragging()
  }

  return (
    <Card
      sx={{ marginBottom: 1 }}
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: 'pre-line' }}>
            {entry.description}
          </Typography>
        </CardContent>
        <CardActions
          sx={{ display: 'flex', justifyContent: 'end', paddingRight: 2 }}
        >
          <Typography variant='body2'>hace 30 minutos</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  )
}
