export async function GET(req: Request) {
  try {
    const res = await fetch('https://api.github.com/repos/jawahar-singamsetty', {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
    });

    if (!res.ok) {
      return Response.json({ stars: 0 });
    }

    const data = await res.json();
    return Response.json({ stars: data.stargazers_count ?? 0 });
  } catch {
    return Response.json({ stars: 0 });
  }
}