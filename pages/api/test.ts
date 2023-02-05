// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import s3 from '../../lib/s3'
import { ListBucketsCommand } from '@aws-sdk/client-s3'

type Data = {
  status: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  ;(async () => {
    const response = await s3.send(new ListBucketsCommand({}))
    console.log(response)
  })()
  res.status(200).json({ status: 'success' })
}
