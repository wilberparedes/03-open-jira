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

const validStatus: EntryStatus[] = ['pending', 'in-progress', 'finished']

export const EntryPage = () => {
  return (
    <Layout>
      <Grid container justifyContent={'center'} sx={{ marginTop: 2 }}>
        <Grid item xs={12} sm={8} md={6}>
          <Card>
            <CardHeader
              title='Entrada:'
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
              />
              {/* RADIO */}
              <FormControl>
                <FormLabel>Estado:</FormLabel>
                <RadioGroup row>
                  {validStatus.map((status) => (
                    <FormControlLabel
                      key={status}
                      value={status}
                      control={<Radio />}
                      label={capitalize(status)}
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

export default EntryPage
