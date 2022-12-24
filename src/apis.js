export async function getPatients() {
  const url = 'https://random-data-api.com/api/v2/users?size=10&is_json=true';
  const res = await fetch(url);

  if (!res.ok) {
    const error = new Error('Failed to fetch patients');
    error.statusText = res.statusText;
    error.status = res.status;
    throw error;
  }
  const data = await res.json();
  return data;
}
