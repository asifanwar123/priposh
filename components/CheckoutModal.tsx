
import React, { useState, useEffect } from 'react';
import { X, CreditCard, Loader2, CheckCircle, Truck, ShieldCheck, Banknote, Smartphone, Building2 } from 'lucide-react';
import { PaymentMethod, User } from '../types';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  total: number;
  onSuccess: () => void;
  user: User | null;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose, total, onSuccess, user }) => {
  const [step, setStep] = useState<1 | 2 | 3>(1); // 1: Shipping, 2: Payment, 3: Success
  const [loading, setLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('COD');
  
  // Shipping State
  const [shippingDetails, setShippingDetails] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    postalCode: '',
    phone: ''
  });

  useEffect(() => {
    if (isOpen) {
      setStep(1);
      // Pre-fill phone if user is logged in
      if (user) {
        setShippingDetails(prev => ({ ...prev, phone: user.phoneNumber }));
      }
    }
  }, [isOpen, user]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setShippingDetails(prev => ({ ...prev, [name]: value }));
  };

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
      }, 4000);
    }, 2000);
  };

  if (!isOpen) return null;

  const renderPaymentFields = () => {
    switch (paymentMethod) {
      case 'CARD':
        return (
          <div className="space-y-4 animate-fade-in-down">
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
          </div>
        );
      case 'JAZZCASH':
      case 'EASYPAISA':
      case 'SADAPAY':
        return (
          <div className="space-y-4 animate-fade-in-down bg-gray-50 p-4 rounded-md border border-gray-200">
             <div className="flex items-center mb-4">
                <Smartphone className="h-5 w-5 text-gray-500 mr-2" />
                <span className="text-sm font-medium text-gray-700">{paymentMethod === 'JAZZCASH' ? 'JazzCash' : paymentMethod === 'EASYPAISA' ? 'EasyPaisa' : 'SadaPay'} Mobile Account</span>
             </div>
             <div>
                <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
                <input type="tel" required placeholder="0300 1234567" defaultValue={shippingDetails.phone} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm" />
                <p className="text-xs text-gray-500 mt-2">You will receive a prompt on your mobile to authorize the payment.</p>
             </div>
          </div>
        );
      case 'MEEZAN':
        return (
          <div className="space-y-4 animate-fade-in-down bg-gray-50 p-4 rounded-md border border-gray-200">
             <div className="flex items-center mb-2">
                <Building2 className="h-5 w-5 text-gray-500 mr-2" />
                <span className="text-sm font-medium text-gray-700">Meezan Bank Transfer</span>
             </div>
             <div className="text-sm text-gray-600 bg-white p-3 rounded border border-gray-200">
                <p className="font-bold">Account Title: Pari Posh Apparel</p>
                <p>Account No: 0101-0101234567</p>
                <p>IBAN: PK00MEZN0001010101234567</p>
             </div>
             <div>
                <label className="block text-sm font-medium text-gray-700">Transaction ID (Reference)</label>
                <input type="text" required placeholder="Enter Transaction ID after transfer" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm" />
             </div>
          </div>
        );
      case 'COD':
        return (
          <div className="space-y-4 animate-fade-in-down bg-amber-50 p-4 rounded-md border border-amber-200">
             <div className="flex items-start">
                <Banknote className="h-5 w-5 text-amber-600 mr-2 mt-0.5" />
                <div>
                   <span className="text-sm font-bold text-gray-900">Cash on Delivery</span>
                   <p className="text-xs text-gray-600 mt-1">Pay in cash when our courier delivers your order to your doorstep. Please ensure you have the exact amount ready.</p>
                </div>
             </div>
          </div>
        );
    }
  };

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
                      {step === 1 ? 'Shipping Details' : 'Select Payment Method'}
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
                        <input name="firstName" value={shippingDetails.firstName} onChange={handleInputChange} type="text" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Last Name</label>
                        <input name="lastName" value={shippingDetails.lastName} onChange={handleInputChange} type="text" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Phone</label>
                      <input name="phone" value={shippingDetails.phone} onChange={handleInputChange} type="tel" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Address</label>
                      <input name="address" value={shippingDetails.address} onChange={handleInputChange} type="text" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">City</label>
                        <input name="city" value={shippingDetails.city} onChange={handleInputChange} type="text" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Postal Code</label>
                        <input name="postalCode" value={shippingDetails.postalCode} onChange={handleInputChange} type="text" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm" />
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

                    {/* Payment Method Selector */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                       <button type="button" onClick={() => setPaymentMethod('COD')} className={`p-2 border rounded-md flex flex-col items-center justify-center text-xs font-medium h-20 transition-all ${paymentMethod === 'COD' ? 'border-amber-500 bg-amber-50 text-amber-700 ring-1 ring-amber-500' : 'border-gray-200 hover:bg-gray-50 text-gray-600'}`}>
                          <Banknote className="h-6 w-6 mb-1" /> Cash on Delivery
                       </button>
                       <button type="button" onClick={() => setPaymentMethod('JAZZCASH')} className={`p-2 border rounded-md flex flex-col items-center justify-center text-xs font-medium h-20 transition-all ${paymentMethod === 'JAZZCASH' ? 'border-red-500 bg-red-50 text-red-700 ring-1 ring-red-500' : 'border-gray-200 hover:bg-gray-50 text-gray-600'}`}>
                          <span className="text-lg font-bold font-sans">Jazz</span>Cash
                       </button>
                       <button type="button" onClick={() => setPaymentMethod('EASYPAISA')} className={`p-2 border rounded-md flex flex-col items-center justify-center text-xs font-medium h-20 transition-all ${paymentMethod === 'EASYPAISA' ? 'border-green-500 bg-green-50 text-green-700 ring-1 ring-green-500' : 'border-gray-200 hover:bg-gray-50 text-gray-600'}`}>
                          <span className="text-lg font-bold font-sans italic">easy</span>paisa
                       </button>
                       <button type="button" onClick={() => setPaymentMethod('SADAPAY')} className={`p-2 border rounded-md flex flex-col items-center justify-center text-xs font-medium h-20 transition-all ${paymentMethod === 'SADAPAY' ? 'border-teal-500 bg-teal-50 text-teal-700 ring-1 ring-teal-500' : 'border-gray-200 hover:bg-gray-50 text-gray-600'}`}>
                          <span className="text-sm font-bold font-sans">Sada</span>Pay
                       </button>
                       <button type="button" onClick={() => setPaymentMethod('MEEZAN')} className={`p-2 border rounded-md flex flex-col items-center justify-center text-xs font-medium h-20 transition-all ${paymentMethod === 'MEEZAN' ? 'border-purple-500 bg-purple-50 text-purple-700 ring-1 ring-purple-500' : 'border-gray-200 hover:bg-gray-50 text-gray-600'}`}>
                          <Building2 className="h-5 w-5 mb-1" /> Meezan Bank
                       </button>
                       <button type="button" onClick={() => setPaymentMethod('CARD')} className={`p-2 border rounded-md flex flex-col items-center justify-center text-xs font-medium h-20 transition-all ${paymentMethod === 'CARD' ? 'border-blue-500 bg-blue-50 text-blue-700 ring-1 ring-blue-500' : 'border-gray-200 hover:bg-gray-50 text-gray-600'}`}>
                          <CreditCard className="h-6 w-6 mb-1" /> Card
                       </button>
                    </div>

                    {renderPaymentFields()}

                    <button 
                        type="submit" 
                        disabled={loading}
                        className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 mt-4 disabled:opacity-50"
                    >
                      {loading ? <Loader2 className="animate-spin h-5 w-5" /> : `Complete Order`}
                    </button>
                    
                    <button type="button" onClick={() => setStep(1)} className="w-full text-center text-sm text-gray-500 mt-2 hover:text-gray-900">Back to Shipping</button>
                  </form>
                )}

                {step === 3 && (
                  <div className="text-center py-10">
                    <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="mt-4 text-2xl font-medium text-gray-900 font-serif">Order Confirmed!</h3>
                    <p className="mt-2 text-sm text-gray-500">
                      Thank you for your purchase. You will receive an SMS confirmation on {shippingDetails.phone} shortly.
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
