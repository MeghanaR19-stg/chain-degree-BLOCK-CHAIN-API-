export default function QRModal({ qr }) {
  return (
    <div className="mt-6 p-4 border rounded-md bg-white shadow">
      <h3 className="font-bold mb-2">Scan this QR to verify</h3>
      <img src={`data:image/png;base64,${qr}`} className="w-48 mx-auto" />
    </div>
  );
}
