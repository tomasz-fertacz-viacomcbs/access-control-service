import {NextApiRequest, NextApiResponse} from "next";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
    const ok = res.json({test: 'test'});
    res.json({test: 'test'});
}
