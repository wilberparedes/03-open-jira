import { NextPage } from 'next'

import { Card, CardContent, CardHeader, Grid } from '@mui/material'

import { Layout } from '@/components/layouts'

const HomePage: NextPage = () => {
  return (
    <Layout title='Home - OpenJira'>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 64px)' }}>
            <CardHeader title='Pendientes' />
            <CardContent>
              {/* Agregar una nueva entra */}
              {/* Listado de las entradas */}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 64px)' }}>
            <CardHeader title='En Progreso' />
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 64px)' }}>
            <CardHeader title='Completadas' />
          </Card>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default HomePage
