import { DragEvent, FC, useContext } from 'react'

import { useRouter } from 'next/router'

import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material'
import { grey } from '@mui/material/colors'

import { Entry } from '@/interfaces'
import { UIContext } from '@/context'
import { dateFunctions } from '@/utils'

interface Props {
  entry: Entry
}

export const EntryCard: FC<Props> = ({ entry }) => {
  const router = useRouter()
  const { startDragging, endDragging } = useContext(UIContext)

  const onDragStart = (event: DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData('text', entry._id)
    startDragging()
  }

  const onDragEnd = () => {
    //TODO: cancelar on drag
    endDragging()
  }

  const onClick = () => {
    router.push(`/entries/${entry._id}`)
  }

  return (
    <Card
      onClick={onClick}
      sx={{
        marginBottom: 1,
        borderWidth: '0.1px',
        borderStyle: 'solid',
        borderColor: grey[100],
        borderRadius: 2,
      }}
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: 'pre-line', color: 'text.secondary' }}>
            {entry.description}
          </Typography>
        </CardContent>
        <CardActions
          sx={{ display: 'flex', justifyContent: 'end', paddingRight: 2 }}
        >
          <Typography variant='body2'>
            {dateFunctions.getFormatDistanceToNow(entry.createdAt)}
          </Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  )
}
