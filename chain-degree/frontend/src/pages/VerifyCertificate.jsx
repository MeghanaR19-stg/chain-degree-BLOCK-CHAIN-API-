import { useState } from "react";
import { verifyCertificate } from "../api";

export default function VerifyCertificate() {
  const [hash, setHash] = useState("");
  const [result, setResult] = useState(null);

  async function handleVerify() {
    const data = await verifyCertificate(hash);
    setResult(data);
  }

  return (
    <div className="max-w-xl mx-auto mt-12 p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Verify Certificate</h2>

      <input
        className="p-2 border w-full rounded"
        placeholder="Enter Certificate Hash"
        value={hash}
        onChange={(e) => setHash(e.target.value)}
      />

      <button
        onClick={handleVerify}
        className="bg-green-600 text-white py-2 w-full mt-4 rounded hover:bg-green-700"
      >
        Verify
      </button>

      {result && (
        <div className="mt-6 p-4 border rounded bg-gray-50">
          {result.is_valid ? (
            <>
              <h4 className="text-green-700 font-bold">Valid Certificate ✔️</h4>
              <p><strong>Student:</strong> {result.student}</p>
              <p><strong>Course:</strong> {result.course}</p>
              <p><strong>Institution:</strong> {result.institution}</p>
            </>
          ) : (
            <h4 className="text-red-700 font-bold">Invalid Certificate ❌</h4>
          )}
        </div>
      )}
    </div>
  );
}
