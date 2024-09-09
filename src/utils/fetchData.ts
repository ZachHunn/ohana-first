export async function fetchData(admin_url: string, api_uri: string) {
  const data = await fetch(admin_url + api_uri);
  const results = await data.json();

  return results.data;
}
