const BIN_ID = '68f068a543b1c97be96a7d65';
const MASTER_KEY = '$2a$10$3GkubE3so9dWq1EnioJj8O2TKP5.w.tsIKeYrvUM2v9fXb0SFJ38m';
export async function putJSONData(arr) {
  if (!Array.isArray(arr)) throw new Error('putJSONData expects an array');
  const url = `https://api.jsonbin.io/v3/b/${BIN_ID}`;
  console.log('[putJSONData] PUT URL =', url);
  const res = await fetch(url, {
    method: 'PUT',
    headers: {
      'X-Master-Key': MASTER_KEY,
      'Content-Type': 'application/json',
      'X-Bin-Versioning': 'false'
    },
    body: JSON.stringify({ users: arr })  
  });
  if (!res.ok) throw new Error(`PUT ${res.status}: ${await res.text()}`);
  return (await res.json()).record;
}
