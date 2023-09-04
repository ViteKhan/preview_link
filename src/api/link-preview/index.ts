import mql from '@microlink/mql';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { url } = req.query;
    const { data } = await mql(url as string);
    res.status(200).json({ ...data });
  } catch (error) {
    res.status(500).json({ error: JSON.stringify(error) });
  }
}
