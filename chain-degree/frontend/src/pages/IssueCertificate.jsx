import { useState } from "react";

function IssueCertificatePage() {
  const [student, setStudent] = useState("");
  const [course, setCourse] = useState("");
  const [institution, setInstitution] = useState("");

  const [result, setResult] = useState(null);

  const handleSubmit = async () => {
    const response = await fetch("http://127.0.0.1:8000/certificate/issue", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        student,
        course,
        institution,
      }),
    });

    const data = await response.json();
    setResult(data);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1 style={{ marginBottom: "20px" }}>Issue Certificate</h1>

      {/* FORM */}
      <input
        type="text"
        placeholder="Student Name"
        value={student}
        onChange={(e) => setStudent(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
          border: "1px solid gray",
        }}
      />

      <input
        type="text"
        placeholder="Course"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
          border: "1px solid gray",
        }}
      />

      <input
        type="text"
        placeholder="Institution"
        value={institution}
        onChange={(e) => setInstitution(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
          border: "1px solid gray",
        }}
      />

      <button
        onClick={handleSubmit}
        style={{
          width: "100%",
          padding: "12px",
          backgroundColor: "black",
          color: "white",
          border: "none",
          marginTop: "10px",
          cursor: "pointer",
        }}
      >
        Issue Certificate
      </button>

      {/* RESULT SECTION */}
      {result && (
        <div
          style={{
            marginTop: "30px",
            padding: "20px",
            border: "1px solid #ccc",
            backgroundColor: "#f9f9f9",
          }}
        >
          <h2>Certificate Issued!</h2>

          <p>
            <strong>Hash:</strong> {result.hash}
          </p>

          <p><strong>QR Code:</strong></p>

          {/* FIXED QR CODE DISPLAY */}
          <img
            src={`data:image/png;base64,${result.qr_code}`}
            alt="QR Code"
            style={{ width: "150px", height: "150px", border: "1px solid #ddd" }}
          />

          <p style={{ marginTop: "20px" }}>
            <strong>AI Description:</strong>
            <br />
            {result.ai_text}
          </p>
        </div>
      )}
    </div>
  );
}

export default IssueCertificatePage;
