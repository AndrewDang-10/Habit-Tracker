const BIN_ID = '68dddd18ae596e708f0307d8';   
const MASTER_KEY = '$2a$10$3GkubE3so9dWq1EnioJj8O2TKP5.w.tsIKeYrvUM2v9fXb0SFJ38m';

export async function putHabits(array) {
  if (!Array.isArray(array)) throw new Error('putHabits expects an array');
  const res = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}`, {
    method: 'PUT',
    headers: {
      'X-Master-Key': MASTER_KEY,
      'Content-Type': 'application/json',
      'X-Bin-Versioning': 'false'
    },
    body: JSON.stringify({ habits: array })
  });
  if (!res.ok) throw new Error(`PUT habits ${res.status}: ${await res.text()}`);
  return (await res.json()).record;
}

