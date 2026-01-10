import React from 'react';
import { Plus, Heart } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onProductClick: (product: Product) => void;
  isFavorite: boolean;
  onToggleFavorite: (e: React.MouseEvent, productId: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  onAddToCart, 
  onProductClick,
  isFavorite,
  onToggleFavorite
}) => {
  return (
    <div 
      className="group relative flex flex-col cursor-pointer"
      onClick={() => onProductClick(product)}
    >
      <div className="relative w-full aspect-[2/3] overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-center object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
          loading="lazy"
        />
        
        {/* Discount Badge */}
        {product.discountPercentage && (
          <div className="absolute top-2 left-2 bg-sale text-white text-[10px] font-bold px-2 py-1">
            -{product.discountPercentage}%
          </div>
        )}

        {/* Favorite Button */}
        <button
          onClick={(e) => onToggleFavorite(e, product.id)}
          className="absolute top-2 right-2 p-2 bg-white rounded-full text-gray-400 hover:text-accent hover:bg-gray-50 transition-all duration-200 z-10 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0"
        >
          <Heart className={`h-4 w-4 ${isFavorite ? 'fill-accent text-accent' : ''}`} />
        </button>

        {/* Quick Add Button */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(product);
            }}
            className="bg-white text-primary text-xs font-bold uppercase tracking-widest px-6 py-3 hover:bg-primary hover:text-white transition-colors shadow-md"
          >
            Add to cart
          </button>
        </div>
      </div>
      
      <div className="pt-4 text-center">
        <h3 className="text-xs text-primary font-normal tracking-wide mb-1 truncate">
          {product.name}
        </h3>
        <div className="flex items-center justify-center space-x-2">
          {product.originalPrice && (
            <span className="text-xs text-secondary line-through font-normal">
              {product.currency}.{product.originalPrice.toLocaleString()}
            </span>
          )}
          <span className="text-xs font-bold text-sale">
            {product.currency}.{product.price.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
