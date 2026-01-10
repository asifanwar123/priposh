import React, { useState } from 'react';
import { ArrowLeft, Star, Heart, Truck, ShieldCheck, Share2 } from 'lucide-react';
import { Product } from '../types';

interface ProductDetailsProps {
  product: Product;
  onBack: () => void;
  onAddToCart: (product: Product, quantity: number, size: string) => void;
  onBuyNow: (product: Product, quantity: number, size: string) => void;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ 
  product, 
  onBack, 
  onAddToCart, 
  onBuyNow,
  isFavorite,
  onToggleFavorite 
}) => {
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes?.[1] || 'M');
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="min-h-screen bg-white animate-fade-in-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb / Back */}
        <button 
          onClick={onBack}
          className="flex items-center text-sm text-gray-500 hover:text-gray-900 mb-8 group"
        >
          <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Collection
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {/* Image Section */}
          <div className="space-y-4">
            <div className="aspect-w-3 aspect-h-4 bg-gray-100 overflow-hidden rounded-lg">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-center object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Thumbnails simulated */}
            <div className="grid grid-cols-4 gap-4">
               {[1, 2, 3, 4].map((i) => (
                 <div key={i} className={`aspect-w-1 aspect-h-1 bg-gray-100 rounded-md overflow-hidden cursor-pointer ${i === 1 ? 'ring-2 ring-amber-500' : 'opacity-70 hover:opacity-100'}`}>
                    <img src={product.image} className="w-full h-full object-cover" alt="thumbnail" />
                 </div>
               ))}
            </div>
          </div>

          {/* Details Section */}
          <div className="flex flex-col">
             <div className="border-b border-gray-200 pb-6">
                <p className="text-sm text-amber-600 font-bold tracking-wide uppercase mb-2">{product.category}</p>
                <h1 className="text-3xl font-serif font-bold text-gray-900 sm:text-4xl mb-2">{product.name}</h1>
                
                <div className="flex items-center mb-4">
                   <div className="flex text-amber-400">
                     {[...Array(5)].map((_, i) => (
                       <Star key={i} className="h-4 w-4 fill-current" />
                     ))}
                   </div>
                   <span className="ml-2 text-sm text-gray-500">(4.9/5 based on 24 reviews)</span>
                </div>

                <p className="text-3xl font-medium text-gray-900">{product.currency} {product.price.toLocaleString()}</p>
             </div>

             <div className="py-6 space-y-6">
                <p className="text-base text-gray-600 leading-relaxed">
                  {product.description} Crafted with meticulous attention to detail, this piece embodies the rich heritage of Bahzad while offering modern comfort.
                </p>

                {/* Sizes */}
                {product.sizes && (
                  <div>
                    <div className="flex justify-between items-center mb-2">
                       <label className="text-sm font-medium text-gray-900">Select Size</label>
                       <a href="#" className="text-sm text-amber-600 hover:text-amber-500 underline">Size Guide</a>
                    </div>
                    <div className="grid grid-cols-4 gap-3">
                      {product.sizes.map((size) => (
                        <button
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          className={`
                            flex items-center justify-center py-3 border text-sm font-medium uppercase sm:flex-1 cursor-pointer focus:outline-none
                            ${selectedSize === size 
                              ? 'bg-gray-900 text-white border-transparent ring-2 ring-gray-900 ring-offset-2' 
                              : 'bg-white text-gray-900 border-gray-200 hover:bg-gray-50'}
                          `}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Quantity */}
                <div>
                   <label className="block text-sm font-medium text-gray-900 mb-2">Quantity</label>
                   <div className="flex items-center border border-gray-300 rounded-md w-32">
                      <button 
                        className="p-3 text-gray-600 hover:bg-gray-100 flex-1"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      >
                        -
                      </button>
                      <span className="text-center font-medium w-8">{quantity}</span>
                      <button 
                        className="p-3 text-gray-600 hover:bg-gray-100 flex-1"
                        onClick={() => setQuantity(quantity + 1)}
                      >
                        +
                      </button>
                   </div>
                </div>
             </div>

             <div className="flex flex-col gap-4 mt-auto pt-6 border-t border-gray-200">
                <div className="flex gap-4">
                  <button
                    onClick={() => onAddToCart(product, quantity, selectedSize)}
                    className="flex-1 bg-white border border-gray-900 text-gray-900 py-4 px-8 font-medium hover:bg-gray-50 transition-colors uppercase tracking-wide"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => onBuyNow(product, quantity, selectedSize)}
                    className="flex-1 bg-amber-600 border border-transparent text-white py-4 px-8 font-medium hover:bg-amber-700 transition-colors uppercase tracking-wide shadow-md hover:shadow-lg"
                  >
                    Buy It Now
                  </button>
                  <button 
                    onClick={() => onToggleFavorite(product.id)}
                    className={`p-4 border rounded-none transition-colors ${isFavorite ? 'border-red-200 bg-red-50 text-red-500' : 'border-gray-200 hover:bg-gray-50 text-gray-400'}`}
                  >
                    <Heart className={`h-6 w-6 ${isFavorite ? 'fill-current' : ''}`} />
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-6 text-xs text-gray-500">
                   <div className="flex items-center">
                      <Truck className="h-4 w-4 mr-2" />
                      <span>Free shipping over PKR 10,000</span>
                   </div>
                   <div className="flex items-center">
                      <ShieldCheck className="h-4 w-4 mr-2" />
                      <span>Authenticity Guaranteed</span>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
