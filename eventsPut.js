const BIN_ID = '6930d5c4d0ea881f40114790';    
const MASTER_KEY = '$2a$10$3GkubE3so9dWq1EnioJj8O2TKP5.w.tsIKeYrvUM2v9fXb0SFJ38m';

export async function putEvents(array) {
  if (!Array.isArray(array)) throw new Error('putEvents expects an array');

  const res = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}`, {
    method: 'PUT',
    headers: {
      'X-Master-Key': MASTER_KEY,
      'Content-Type': 'application/json',
      'X-Bin-Versioning': 'false'
    },
    body: JSON.stringify({ events: array })   
  });

  if (!res.ok) throw new Error(`PUT events ${res.status}: ${await res.text()}`);
  return (await res.json()).record;
}
