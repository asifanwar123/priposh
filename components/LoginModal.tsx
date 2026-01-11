
import React, { useState } from 'react';
import { X, Smartphone, ArrowRight, CheckCircle, Loader2 } from 'lucide-react';
import { User } from '../types';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (user: User) => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, onLoginSuccess }) => {
  const [step, setStep] = useState<'PHONE' | 'OTP'>('PHONE');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handlePhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (phoneNumber.length < 10) {
      setError('Please enter a valid phone number');
      return;
    }

    setLoading(true);
    // Simulate API call to send OTP
    setTimeout(() => {
      setLoading(false);
      setStep('OTP');
    }, 1500);
  };

  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Simulate OTP verification (accept any 4 digit code for demo)
    setTimeout(() => {
      setLoading(false);
      if (otp.length === 4) {
        onLoginSuccess({
          phoneNumber,
          name: 'Valued Customer',
          isLoggedIn: true
        });
        onClose();
        // Reset state
        setStep('PHONE');
        setPhoneNumber('');
        setOtp('');
      } else {
        setError('Invalid OTP. Please enter 4 digits.');
      }
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[200] overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true" onClick={onClose}>
          <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
        </div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-md w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 relative">
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-500"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="text-center mb-6">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-amber-100 mb-4">
                <Smartphone className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-gray-900">
                {step === 'PHONE' ? 'Welcome Back' : 'Verify Phone'}
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                {step === 'PHONE' 
                  ? 'Enter your mobile number to login or sign up.' 
                  : `Enter the 4-digit code sent to ${phoneNumber}`
                }
              </p>
            </div>

            {step === 'PHONE' ? (
              <form onSubmit={handlePhoneSubmit}>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                  <div className="relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500 sm:text-sm">+92</span>
                    </div>
                    <input
                      type="tel"
                      className="focus:ring-amber-500 focus:border-amber-500 block w-full pl-12 sm:text-sm border-gray-300 rounded-md py-3 border"
                      placeholder="300 1234567"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      autoFocus
                    />
                  </div>
                </div>
                
                {error && <p className="text-red-500 text-xs mb-4">{error}</p>}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 disabled:opacity-50"
                >
                  {loading ? <Loader2 className="animate-spin h-5 w-5" /> : (
                    <>
                      Send OTP <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            ) : (
              <form onSubmit={handleOtpSubmit}>
                <div className="mb-6 flex justify-center space-x-2">
                  <input
                    type="text"
                    maxLength={4}
                    className="block w-32 text-center text-2xl tracking-widest border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500 border py-2"
                    placeholder="0000"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    autoFocus
                  />
                </div>

                {error && <p className="text-red-500 text-xs mb-4 text-center">{error}</p>}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 disabled:opacity-50"
                >
                  {loading ? <Loader2 className="animate-spin h-5 w-5" /> : (
                    <>
                      Verify & Login <CheckCircle className="ml-2 h-4 w-4" />
                    </>
                  )}
                </button>
                
                <button 
                  type="button"
                  onClick={() => setStep('PHONE')}
                  className="mt-4 w-full text-center text-xs text-gray-500 hover:text-gray-900 underline"
                >
                  Change Phone Number
                </button>
              </form>
            )}
            
            <p className="text-xs text-center text-gray-400 mt-6">
              By continuing, you agree to Pari Posh's Terms of Use and Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
