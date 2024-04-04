import {NextRequest, NextResponse} from "next/server";

export async function POST(req: NextRequest) {
    console.log('req', req.body);
    return NextResponse.json({test: req.body});
}