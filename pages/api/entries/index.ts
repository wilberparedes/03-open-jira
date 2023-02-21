import { db } from '@/database'
import type { NextApiRequest, NextApiResponse } from 'next'
import { EntryModel, IEntry } from '../../../models/'

type Data =
  | {
      message: string
    }
  | IEntry[]
  | IEntry

export default function entries(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case 'GET':
      return getEntries(res)
    case 'POST':
      return postEntry(req, res)
    default:
      return res.status(400).json({ message: 'Endpoint no existe' })
  }
}

const getEntries = async (res: NextApiResponse<Data>) => {
  await db.connect()

  const entries = await EntryModel.find().sort({ createdAt: 'desc' })

  await db.disconnect()

  res.status(200).json(entries)
}

const postEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { description = '' } = req.body

  const newEntry = new EntryModel({
    description,
    createdAt: Date.now(),
  })

  try {
    await db.connect()
    await newEntry.save()

    return res.status(201).json(newEntry)
  } catch (error) {
    await db.disconnect()
    console.log(`Error In: [postEntry] ${error}`)
    return res
      .status(500)
      .json({ message: 'Algo salió mal, revisar consola del servidor' })
  }
}
