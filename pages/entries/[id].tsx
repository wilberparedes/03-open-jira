import { GetServerSideProps } from 'next'

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
} from '@mui/material'
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined'

import { Layout } from '@/components/layouts'
import { EntryStatus } from '@/interfaces'
import { useState, ChangeEvent, useMemo, FC } from 'react'
import { isValidObjectId } from 'mongoose'

const validStatus: EntryStatus[] = ['pending', 'in-progress', 'finished']

export const EntryPage: FC = (props) => {
  console.log({ props })
  const [inputValue, setInputValue] = useState('')
  const [status, setStatus] = useState<EntryStatus>('pending')
  const [touched, setTouched] = useState(false)

  const isNotValid = useMemo(
    () => !inputValue.length && touched,
    [inputValue, touched]
  )

  const onTextFieldChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const onStatusChanged = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)
    setStatus(event.target.value as EntryStatus)
  }

  const onSave = () => {}

  return (
    <Layout>
      <Grid container justifyContent={'center'} sx={{ marginTop: 2 }}>
        <Grid item xs={12} sm={8} md={6}>
          <Card>
            <CardHeader
              title={`Entrada: ${inputValue}`}
              subheader={`Creada hace: ... minutos`}
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
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params as { id: string }

  if (!isValidObjectId(id)) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: { id },
  }
}

export default EntryPage
