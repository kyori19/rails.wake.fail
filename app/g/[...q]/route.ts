import { SITE_URL } from "@/app/consts";

export function GET(_: unknown, { params: { q } }: { params: { q: string[] } }): Response {
    const query = encodeURIComponent(`${q.join('/')} site:${SITE_URL}`);
    return Response.redirect(`https://www.google.com/search?q=${query}`);
}
