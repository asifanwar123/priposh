import React, { useState, useEffect } from 'react';
import { X, CreditCard, Loader2, CheckCircle, Truck, ShieldCheck } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  total: number;
  onSuccess: () => void;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose, total, onSuccess }) => {
  const [step, setStep] = useState<1 | 2 | 3>(1); // 1: Shipping, 2: Payment, 3: Success
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen) setStep(1);
  }, [isOpen]);

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setStep(3);
      setTimeout(() => {
        onSuccess();
        onClose();
      }, 3000);
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true" onClick={onClose}>
          <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
        </div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start w-full">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                
                {step !== 3 && (
                  <div className="flex justify-between items-center mb-5">
                    <h3 className="text-lg leading-6 font-serif font-medium text-gray-900" id="modal-title">
                      {step === 1 ? 'Shipping Details' : 'Payment Secure'}
                    </h3>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
                      <X className="h-6 w-6" />
                    </button>
                  </div>
                )}

                {/* Progress Bar */}
                {step !== 3 && (
                   <div className="w-full bg-gray-200 h-1 mb-6 rounded-full overflow-hidden">
                     <div className={`h-full bg-amber-500 transition-all duration-500 ${step === 1 ? 'w-1/2' : 'w-full'}`}></div>
                   </div>
                )}

                {step === 1 && (
                  <form onSubmit={handleShippingSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">First Name</label>
                        <input type="text" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Last Name</label>
                        <input type="text" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Address</label>
                      <input type="text" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">City</label>
                        <input type="text" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Postal Code</label>
                        <input type="text" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm" />
                      </div>
                    </div>
                    <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 mt-4">
                      Continue to Payment
                    </button>
                  </form>
                )}

                {step === 2 && (
                  <form onSubmit={handlePaymentSubmit} className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-md mb-4 border border-gray-200">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium text-gray-500">Total Amount</span>
                            <span className="text-lg font-bold text-gray-900">PKR {total.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center text-xs text-green-600">
                             <ShieldCheck className="w-4 h-4 mr-1" />
                             Secure 256-bit SSL Encrypted
                        </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">Card Number</label>
                      <div className="mt-1 relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <CreditCard className="h-5 w-5 text-gray-400" />
                        </div>
                        <input type="text" required placeholder="0000 0000 0000 0000" className="focus:ring-amber-500 focus:border-amber-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md py-2 px-3 border" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Expiry Date</label>
                        <input type="text" required placeholder="MM/YY" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">CVC</label>
                        <input type="text" required placeholder="123" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm" />
                      </div>
                    </div>

                    <button 
                        type="submit" 
                        disabled={loading}
                        className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 mt-4 disabled:opacity-50"
                    >
                      {loading ? <Loader2 className="animate-spin h-5 w-5" /> : `Pay PKR ${total.toLocaleString()}`}
                    </button>
                  </form>
                )}

                {step === 3 && (
                  <div className="text-center py-10">
                    <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="mt-4 text-2xl font-medium text-gray-900 font-serif">Order Confirmed!</h3>
                    <p className="mt-2 text-sm text-gray-500">
                      Thank you for your purchase. Your order has been received and is being processed.
                    </p>
                    <div className="mt-6 flex justify-center text-amber-600">
                        <Truck className="w-5 h-5 mr-2" />
                        <span className="text-sm font-medium">Estimated Delivery: 3-5 Days</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;
