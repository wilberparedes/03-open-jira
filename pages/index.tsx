import { NextPage } from 'next'

import { Card, CardContent, CardHeader, Grid } from '@mui/material'

import { Layout } from '@/components/layouts'
import { EntryList } from '../components/ui/EntryList'

const HomePage: NextPage = () => {
  return (
    <Layout title='Home - OpenJira'>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 64px)' }}>
            <CardHeader title='Pendientes' />
            {/* Agregar una nueva entra */}
            {/* Listado de las entradas */}
            <EntryList />
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 64px)' }}>
            <CardHeader title='En Progreso' /> <EntryList />
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 64px)' }}>
            <CardHeader title='Completadas' /> <EntryList />
          </Card>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default HomePage
