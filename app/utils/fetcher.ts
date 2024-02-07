export async function fetcher(url: URL | RequestInfo) {
  const res = await fetch(url);

  if (!res.ok) {
    const info = await res.json();
    const { status } = res;
    console.error(info, status);

    throw new Error('Something went wrong!');
  }

  return res.json();
}
