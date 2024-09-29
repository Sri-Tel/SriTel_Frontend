"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import Image from "next/image";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  billId: string;
  amount: number;
}

function Payment({ isOpen, onClose, billId, amount }: PaymentModalProps) {
  const [cardDetails, setCardDetails] = useState({
    fullName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCardDetails({ ...cardDetails, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsConfirmationOpen(true);
  };

  const handleConfirmPayment = async () => {
    setIsSubmitting(true);
    const paidDate = new Date().toISOString();

    try {
      const response = await fetch(
        "http://localhost:8222/api/v1/payment/markpaid",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            billId,
            amount,
            paidDate,
          }),
        }
      );

      if (response.ok) {
        console.log("Payment successful!");
        setIsConfirmationOpen(false);
        onClose();
      } else {
        console.error("Failed to process payment", response.status);
      }
    } catch (error) {
      console.error("Error during payment request", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6">Checkout</h2>
        {/* Display the amount in the modal */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Amount to Pay: ${amount}</h3>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-3 gap-4 mb-6">
            <button
              type="button"
              className="py-2 border bg-white rounded-lg flex items-center justify-center"
            >
              <Image
                src="/img/PayPal.png"
                alt="PayPal"
                width={250}
                height={150}
              />
            </button>
            <button
              type="button"
              className="py-2 border bg-white rounded-lg flex items-center justify-center"
            >
              <Image
                src="/img/ApplePay.png"
                alt="Apple Pay"
                width={250}
                height={150}
              />
            </button>
            <button
              type="button"
              className="py-2 border bg-white rounded-lg flex items-center justify-center"
            >
              <Image
                src="/img/GooglePay.png"
                alt="Google Pay"
                width={250}
                height={150}
              />
            </button>
          </div>

          <div className="text-center mb-4 text-gray-500">
            or pay using credit/debit card
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Card holder full name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              value={cardDetails.fullName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-600 bg-gray-300 rounded-lg"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Card Number</label>
            <input
              type="text"
              name="cardNumber"
              placeholder="0000 0000 0000 0000"
              value={cardDetails.cardNumber}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-600 bg-gray-300 rounded-lg"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-gray-700">Expiry Date</label>
              <input
                type="text"
                name="expiry"
                placeholder="MM/YY"
                value={cardDetails.expiry}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-600 bg-gray-300 rounded-lg"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700">CVV</label>
              <input
                type="text"
                name="cvv"
                placeholder="CVV"
                value={cardDetails.cvv}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-600 bg-gray-300 rounded-lg"
                required
              />
            </div>
          </div>

          <div className="flex justify-between">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="mr-4"
            >
              Cancel
            </Button>
            <Button type="submit" className="bg-black text-white">
              Checkout
            </Button>
          </div>
        </form>
        {/* Confirmation Modal */}
        {isConfirmationOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-4 rounded-lg shadow-lg max-w-sm">
              <h3 className="text-lg font-semibold mb-4">Confirm Payment</h3>
              <p className="mb-4">
                Payment is irreversible. Do you want to proceed?
              </p>
              <div className="flex justify-end gap-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsConfirmationOpen(false)} // Close modal on cancel
                >
                  Cancel
                </Button>
                <Button
                  type="button"
                  className="bg-black text-white"
                  onClick={handleConfirmPayment} // Handle the payment on confirmation
                >
                  Yes, Proceed
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Payment;
