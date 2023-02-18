import Image from 'next/image'
import { Inter } from '@next/font/google'
import { Typography } from '@mui/material'
import { Layout } from '@/components/layouts'

const inter = Inter({ subsets: ['latin'] })

const HomePage = () => {
  return (
    <Layout title='Home Page'>
      <Typography variant='h1' color={'primary'}>
        Hola Mundo
      </Typography>
    </Layout>
  )
}

export default HomePage
