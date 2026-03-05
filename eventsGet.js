const BIN_ID = '6930d5c4d0ea881f40114790';   
const MASTER_KEY = '$2a$10$3GkubE3so9dWq1EnioJj8O2TKP5.w.tsIKeYrvUM2v9fXb0SFJ38m';

export async function getEventsJSON() {
  const res = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}/latest?meta=false`, {
    headers: {
      'X-Master-Key': MASTER_KEY,
      'Content-Type': 'application/json'
    }
  });
  if (!res.ok) throw new Error(`GET events ${res.status}: ${await res.text()}`);
  const obj = await res.json();

  // ERROR HANDLING
  const arr = Array.isArray(obj?.events) ? obj.events : [];
  return JSON.stringify(arr);
}
