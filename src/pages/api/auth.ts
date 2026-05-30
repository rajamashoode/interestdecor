export const prerender = false;
import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ request }) => {
  const url = new URL(request.url);
  const provider = url.searchParams.get('provider');

  if (provider === 'github') {
    const params = new URLSearchParams({
      client_id: import.meta.env.GITHUB_CLIENT_ID,
      scope: 'repo,user',
      redirect_uri: `${url.origin}/api/callback`,
    });
    return Response.redirect(
      `https://github.com/login/oauth/authorize?${params}`,
      302
    );
  }

  return new Response('Bad Request', { status: 400 });
};