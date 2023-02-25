import mongoose from 'mongoose'

/**
 * 0 = disconnected
 * 1 = connected
 * 2 = connecting
 * 3 = disconnecting
 */

const mongoConnection = {
  isConnected: 0,
}

export const connect = async () => {
  if (mongoConnection.isConnected) {
    // eslint-disable-next-line no-console
    console.log('Ya estabamos conectados')
    return
  }

  if (mongoose.connections.length) {
    mongoConnection.isConnected = mongoose.connections[0].readyState
    if (mongoConnection.isConnected === 1) {
      // eslint-disable-next-line no-console
      console.log('Usando conexión anterior')
      return
    }
    await mongoose.disconnect()
  }
  mongoose.set('strictQuery', false)
  await mongoose.connect(process.env.MONGO_URL || '')
  mongoConnection.isConnected = 1
  // eslint-disable-next-line no-console
  console.log('Conectado a MongoDB: ', process.env.MONGO_URL)
}

export const disconnect = async () => {
  if (process.env.NODE_ENV === 'development') {
    return
  }

  if (!mongoConnection.isConnected) {
    return
  }
  await mongoose.disconnect()
  mongoConnection.isConnected = 0

  // eslint-disable-next-line no-console
  console.log('Desconectado de MongoDB')
}
