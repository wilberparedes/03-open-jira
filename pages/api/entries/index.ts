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
    default:
      return res.status(400).json({ message: 'Endpoint no existe' })
  }
}

const getEntries = async (res: NextApiResponse<Data>) => {
  await db.connect()

  const entries = await EntryModel.find().sort({ createAt: 'desc' })

  await db.disconnect()

  res.status(200).json(entries)
}
