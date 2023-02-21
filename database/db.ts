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
    console.log('Ya estámos conectados')
    return
  }

  if (mongoose.connections.length) {
    mongoConnection.isConnected = mongoose.connections[0].readyState
    if (mongoConnection.isConnected === 1) {
      console.log('Usando conexión anterior')
      return
    }
    await mongoose.disconnect()
  }
  await mongoose.connect('...')
  mongoConnection.isConnected = 1
  console.log('Conectado a MongoDB: ', '..')
}

export const disconnect = async () => {
  if (!mongoConnection.isConnected) {
    return
  }
  await mongoose.disconnect()
  console.log('Desconectado de MongoDB')
}
