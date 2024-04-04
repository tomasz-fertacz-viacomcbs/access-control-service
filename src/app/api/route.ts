import {NextApiRequest, NextApiResponse} from "next";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
    return {test: 'test'};
    return Response.json({test: 'test'});
}
