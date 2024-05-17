import { VercelRequest, VercelResponse } from '@vercel/node';
import { ai } from '../../utils/ai';
import { dataWrangler } from '../../utils/dataWrangler';

export default async (req: VercelRequest, res: VercelResponse) => {
  const { method } = req;

  switch (method) {
    case 'POST':
      try {
        const { message } = req.body;
        const response = await ai.processMessage(message);
        const wrangledData = dataWrangler(response.data);
        res.status(200).json({ response, wrangledData });
      } catch (error) {
        res.status(500).json({ error: 'Error processing message' });
      }
      break;
    default:
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};