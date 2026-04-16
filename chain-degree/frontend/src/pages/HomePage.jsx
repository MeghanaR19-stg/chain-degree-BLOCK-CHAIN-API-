import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 mt-20">
      <h1 className="text-3xl font-bold">Chain-Degree</h1>
      <p className="text-gray-600">Blockchain + QR + AI Certificate System</p>

      <div className="flex gap-4 mt-8">
        <Link
          to="/issue"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700"
        >
          Issue Certificate
        </Link>

        <Link
          to="/verify"
          className="bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700"
        >
          Verify Certificate
        </Link>
      </div>
    </div>
  );
}
