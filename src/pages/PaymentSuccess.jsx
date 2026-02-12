import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

export default function PaymentSuccess() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white flex items-center justify-center px-6">
      <div className="text-center max-w-md">

        <CheckCircle size={72} className="text-green-500 mx-auto mb-6" />

        <h1 className="text-3xl font-semibold mb-4">
          Payment Successful 🎉
        </h1>

        <p className="text-gray-400 mb-8">
          You are now enrolled in the course.
        </p>

        <Link to="/">
          <button className="bg-purple-600 px-8 py-3 rounded-full hover:scale-105 transition">
            Go to Home
          </button>
        </Link>
      </div>
    </div>
  );
}
