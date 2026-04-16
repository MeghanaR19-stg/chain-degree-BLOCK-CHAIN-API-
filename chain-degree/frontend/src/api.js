const API_BASE = "http://127.0.0.1:8000";

export async function generateCertificate(data) {
  const res = await fetch(`${API_BASE}/certificate/issue`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function verifyCertificate(hash) {
  const res = await fetch(`${API_BASE}/verify/${hash}`);
  return res.json();
}

export async function fetchAIText(student, course, institution) {
  const res = await fetch(
    `${API_BASE}/ai/text?student=${student}&course=${course}&institution=${institution}`
  );
  return res.json();
}
