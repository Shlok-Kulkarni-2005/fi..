"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

/**
 * Wrap the searchParams hook usage in a Suspense boundary
 * to satisfy Next.js 15's requirement and avoid build errors.
 */
export default function PaymentPage() {
  return (
    <Suspense fallback={<LoadingMessage />}>
      <PaymentPageContent />
    </Suspense>
  );
}

function PaymentPageContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("sessionId");
  const [message, setMessage] = useState("Processing payment...");

  useEffect(() => {
    if (sessionId) {
      setMessage("Payment successful! Thank you for your order.");
    } else {
      setMessage("Invalid payment session.");
    }
  }, [sessionId]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-500 to-blue-500 text-white">
      <div className="bg-white/20 p-6 rounded-lg shadow-lg backdrop-blur-md text-center">
        <h1 className="text-2xl font-bold">{message}</h1>
      </div>
    </div>
  );
}

function LoadingMessage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-500 to-blue-500 text-white">
      <div className="bg-white/20 p-6 rounded-lg shadow-lg backdrop-blur-md text-center">
        <h1 className="text-2xl font-bold">Loading payment status...</h1>
      </div>
    </div>
  );
}
