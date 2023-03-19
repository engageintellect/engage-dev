export async function GET(request: Request) {
  const res = await fetch(
    "https://api.github.com/repos/engageintellect/engage-homepage"
  );
  const json = await res.json();

  const stars = json.stargazers_count;
  return new Response(JSON.stringify(stars));
}
