import Image from 'next/image'
import { Inter } from '@next/font/google'
import { Typography } from '@mui/material'

const inter = Inter({ subsets: ['latin'] })

const HomePage = () => {
  return (
    <>
      <Typography variant='h1' color={'primary'}>
        Hola Mundo
      </Typography>
    </>
  )
}

export default HomePage
