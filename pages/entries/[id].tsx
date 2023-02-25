import { useState, ChangeEvent, useMemo, FC, useContext } from 'react'

import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'

import { blue } from '@mui/material/colors'
import {
  Grid,
  Card,
  CardHeader,
  TextField,
  CardContent,
  CardActions,
  Button,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  capitalize,
  IconButton,
} from '@mui/material'
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'

import { Layout } from '@/components/layouts'
import { Entry, EntryStatus } from '@/interfaces'
import { dbEntries } from '@/database'
import { EntriesContext } from '@/context/'
import { dateFunctions } from '@/utils'

const validStatus: EntryStatus[] = ['pending', 'in-progress', 'finished']

interface Props {
  entry: Entry
}

export const EntryPage: FC<Props> = ({ entry }) => {
  const router = useRouter()
  const { updateEntry, deleteEntry } = useContext(EntriesContext)
  const [inputValue, setInputValue] = useState<string>(entry.description)
  const [status, setStatus] = useState<EntryStatus>(entry.status)
  const [touched, setTouched] = useState(false)

  const isNotValid = useMemo(
    () => !inputValue.length && touched,
    [inputValue, touched]
  )

  const onTextFieldChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const onStatusChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setStatus(event.target.value as EntryStatus)
  }

  const onSave = () => {
    if (!inputValue.trim().length) {
      return
    }
    const updatedEntry: Entry = {
      ...entry,
      status,
      description: inputValue,
    }
    updateEntry(updatedEntry, true)
  }

  const onDelete = () => {
    deleteEntry(entry._id)
    router.push('/')
  }

  return (
    <Layout title={`${inputValue.substring(0, 20)}...`}>
      <Grid container justifyContent={'center'} sx={{ marginTop: 2 }}>
        <Grid item xs={12} sm={8} md={6}>
          <Card
            sx={{
              height: '100%',
              padding: 1,
              backgroundColor: blue[50],
              borderWidth: 0.1,
              borderColor: blue[50],
              borderStyle: 'solid',
              borderRadius: 2,
            }}
          >
            <CardHeader
              title={`Entrada:`}
              subheader={`Creada ${dateFunctions.getFormatDistanceToNow(
                entry.createdAt
              )}`}
            />
            <CardContent>
              <TextField
                sx={{ marginTop: 2, marginBottom: 1 }}
                fullWidth
                placeholder='Nueva entrada'
                autoFocus
                multiline
                label='Nueva entrada'
                value={inputValue}
                onBlur={() => setTouched(true)}
                onChange={onTextFieldChanged}
                helperText={isNotValid && 'Ingrese un valor'}
                error={isNotValid}
              />
              {/* RADIO */}
              <FormControl>
                <FormLabel>Estado:</FormLabel>
                <RadioGroup row value={status} onChange={onStatusChanged}>
                  {validStatus.map((option) => (
                    <FormControlLabel
                      key={option}
                      value={option}
                      control={<Radio />}
                      label={capitalize(option)}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </CardContent>
            <CardActions>
              <Button
                startIcon={<SaveOutlinedIcon />}
                variant='contained'
                fullWidth
                onClick={onSave}
                disabled={!inputValue.length}
              >
                Guardar
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>

      <IconButton
        sx={{
          position: 'fixed',
          bottom: 30,
          right: 30,
          backgroundColor: 'error.dark',
        }}
        onClick={onDelete}
      >
        <DeleteOutlineOutlinedIcon />
      </IconButton>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params as { id: string }

  const entry = await dbEntries.getEntryById(id)

  if (!entry) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: { entry: { ...entry, _id: entry._id.toString() } },
  }
}

export default EntryPage
