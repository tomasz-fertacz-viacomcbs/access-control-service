export async function GET() {
    const ok = new Response()
    return Response.json({test: Math.random()});
}