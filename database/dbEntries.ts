import { isValidObjectId } from 'mongoose'

import { EntryModel, IEntry } from '@/models'
import { db } from '.'

export const getEntryById = async (id: string): Promise<IEntry | null> => {
  if (!isValidObjectId(id)) return null

  await db.connect()
  const entry = await EntryModel.findById(id).lean() //el lean trae la minima información para poder trabajar, es usado cuando se sabe que el volumen de datos es bajo
  await db.disconnect()

  return entry
}
