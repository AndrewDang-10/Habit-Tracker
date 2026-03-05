const BIN_ID = '68f068a543b1c97be96a7d65';
const MASTER_KEY = '$2a$10$3GkubE3so9dWq1EnioJj8O2TKP5.w.tsIKeYrvUM2v9fXb0SFJ38m';
export async function getJSONData() {
  console.log('[getJSONData] LOGIN BIN_ID =', BIN_ID);
  const res = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}/latest?meta=false`, {
    headers: { 'X-Master-Key': MASTER_KEY, 'Content-Type': 'application/json' }
  });
  if (!res.ok) throw new Error(`GET ${res.status}: ${await res.text()}`);
  const obj = await res.json();
  return JSON.stringify(Array.isArray(obj?.users) ? obj.users : []);
}
