const BIN_ID = '68dddd18ae596e708f0307d8';   
const MASTER_KEY = '$2a$10$3GkubE3so9dWq1EnioJj8O2TKP5.w.tsIKeYrvUM2v9fXb0SFJ38m';

export async function getHabitsJSON() {
  const res = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}/latest?meta=false`, {
    headers: { 'X-Master-Key': MASTER_KEY, 'Content-Type': 'application/json' }
  });
  if (!res.ok) throw new Error(`GET habits ${res.status}: ${await res.text()}`);
  const obj = await res.json();
  const arr = Array.isArray(obj?.habits) ? obj.habits : [];
  return JSON.stringify(arr);
}
