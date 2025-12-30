import { useNavigate } from "react-router-dom";

export default function PaymentPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-neutral-950 text-white flex items-center justify-center px-6">
      <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 max-w-md w-full">

        <h2 className="text-2xl font-semibold mb-6 text-center">
          Complete Payment
        </h2>

        {/* COURSE INFO */}
        <div className="bg-neutral-800 rounded-xl p-4 mb-6">
          <p className="font-medium">Web Development Bootcamp</p>
          <p className="text-sm text-gray-400">Lifetime Access</p>
          <div className="flex justify-between mt-4">
            <span>Total</span>
            <span className="font-semibold">$89.99</span>
          </div>
        </div>

        {/* CARD FORM */}
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Card Holder Name"
            className="w-full bg-neutral-800 p-3 rounded-lg outline-none"
          />

          <input
            type="text"
            placeholder="Card Number"
            className="w-full bg-neutral-800 p-3 rounded-lg outline-none"
          />

          <div className="flex gap-4">
            <input
              type="text"
              placeholder="MM / YY"
              className="w-1/2 bg-neutral-800 p-3 rounded-lg outline-none"
            />
            <input
              type="text"
              placeholder="CVV"
              className="w-1/2 bg-neutral-800 p-3 rounded-lg outline-none"
            />
          </div>
        </div>

        {/* PAY */}
        <button
          onClick={() => navigate("/success")}
          className="w-full mt-6 bg-gradient-to-r from-purple-600 to-indigo-600 py-3 rounded-full font-medium hover:scale-105 transition"
        >
          <a href="succes">Pay $89.99</a>
        </button>

        <p className="text-xs text-gray-400 text-center mt-4">
          Demo payment page. No real transaction.
        </p>
      </div>
    </div>
  );
}
