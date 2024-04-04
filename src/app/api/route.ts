export async function POST() {
    const ok = new Response()
    return Response.json({test: Math.random()});
}