/*export async function POST() {
    return Response.json({test: 'test'});
}*/

import type {NextApiRequest, NextApiResponse} from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        res.json({test: 'test'})
    }
}