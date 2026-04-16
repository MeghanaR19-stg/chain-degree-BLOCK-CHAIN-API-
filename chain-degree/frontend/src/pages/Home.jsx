import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="space-y-6 text-center">
      <h1 className="text-3xl font-bold">Welcome to Chain-Degree</h1>
      <p className="text-gray-600">
        Blockchain + AI powered certificate verification system
      </p>

      <div className="space-x-4">
        <Link to="/issue">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md">
            Issue Certificate
          </button>
        </Link>

        <Link to="/verify/enter-cert-hash">
          <button className="px-4 py-2 bg-green-600 text-white rounded-md">
            Verify Certificate
          </button>
        </Link>
      </div>
    </div>
  );
}
