import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { CartItem } from '../types';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onCheckout: () => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ 
  isOpen, 
  onClose, 
  cartItems, 
  onUpdateQuantity, 
  onRemoveItem,
  onCheckout
}) => {
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const currency = cartItems.length > 0 ? cartItems[0].currency : 'PKR';

  return (
    <div className={`fixed inset-0 z-[100] overflow-hidden ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
      <div className={`absolute inset-0 bg-gray-900 bg-opacity-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`} onClick={onClose} />
      
      <div className={`absolute inset-y-0 right-0 max-w-md w-full flex transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="h-full flex flex-col bg-white shadow-xl">
          <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
            <div className="flex items-start justify-between">
              <h2 className="text-lg font-medium text-gray-900 font-serif">Shopping Bag</h2>
              <button
                type="button"
                className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                onClick={onClose}
              >
                <span className="sr-only">Close panel</span>
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="mt-8">
              {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-64 text-center">
                  <ShoppingBag className="h-12 w-12 text-gray-300 mb-4" />
                  <p className="text-gray-500">Your bag is empty.</p>
                  <button onClick={onClose} className="mt-4 text-amber-600 hover:text-amber-500 font-medium">Continue Shopping</button>
                </div>
              ) : (
                <div className="flow-root">
                  <ul role="list" className="-my-6 divide-y divide-gray-200">
                    {cartItems.map((product) => (
                      <li key={product.id} className="py-6 flex">
                        <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-center object-cover"
                          />
                        </div>

                        <div className="ml-4 flex-1 flex flex-col">
                          <div>
                            <div className="flex justify-between text-base font-medium text-gray-900">
                              <h3>{product.name}</h3>
                              <p className="ml-4">{product.currency} {product.price.toLocaleString()}</p>
                            </div>
                            <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                          </div>
                          <div className="flex-1 flex items-end justify-between text-sm">
                            <div className="flex items-center border border-gray-200 rounded">
                              <button 
                                className="p-1 hover:bg-gray-100"
                                onClick={() => onUpdateQuantity(product.id, -1)}
                              >
                                <Minus className="h-4 w-4 text-gray-600" />
                              </button>
                              <span className="px-2 text-gray-900 font-medium">{product.quantity}</span>
                              <button 
                                className="p-1 hover:bg-gray-100"
                                onClick={() => onUpdateQuantity(product.id, 1)}
                              >
                                <Plus className="h-4 w-4 text-gray-600" />
                              </button>
                            </div>

                            <button
                              type="button"
                              className="font-medium text-red-500 hover:text-red-400"
                              onClick={() => onRemoveItem(product.id)}
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {cartItems.length > 0 && (
            <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
              <div className="flex justify-between text-base font-medium text-gray-900 mb-4">
                <p>Subtotal</p>
                <p>{currency} {subtotal.toLocaleString()}</p>
              </div>
              <p className="mt-0.5 text-sm text-gray-500 mb-4">
                Shipping and taxes calculated at checkout.
              </p>
              <div className="mt-6">
                <button
                  onClick={onCheckout}
                  className="w-full flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gray-900 hover:bg-gray-800 transition-colors"
                >
                  Checkout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;
