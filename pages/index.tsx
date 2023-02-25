import { NextPage } from 'next'

import { Card, CardHeader, Grid } from '@mui/material'
import { blue } from '@mui/material/colors'

import { Layout } from '@/components/layouts'
import { NewEntry, EntryList } from '@/components/ui'

const HomePage: NextPage = () => {
  return (
    <Layout title='Home - OpenJira'>
      <Grid
        container
        spacing={2}
        padding={1}
        sx={{ maxHeight: 'calc(100vh - 50px)', overflowY: 'auto' }}
      >
        <Grid item xs={12} sm={4}>
          <Card
            sx={{
              height: '100%',
              padding: 1,
              backgroundColor: blue[50],
              borderWidth: 0.1,
              borderColor: blue[50],
              borderStyle: 'solid',
              borderRadius: 2,
              minHeight: 'calc(100vh - 100px)',
            }}
          >
            <CardHeader title='Pendientes' />
            {/* Agregar una nueva entra */}
            <NewEntry />
            {/* Listado de las entradas */}
            <EntryList status='pending' />
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
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
            <CardHeader title='En Progreso' />
            <EntryList status='in-progress' />
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
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
            <CardHeader title='Completadas' />
            <EntryList status='finished' />
          </Card>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default HomePage
