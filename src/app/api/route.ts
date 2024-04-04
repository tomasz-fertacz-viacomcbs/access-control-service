import {NextApiRequest, NextApiResponse} from "next";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
    const ok = res.json({test: 'test'});
    res.json({test: 'test'});
}
