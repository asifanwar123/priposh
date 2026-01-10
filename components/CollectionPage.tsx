import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '../types';

interface CollectionPageProps {
  title: string;
  products: Product[];
  onAddToCart: (product: Product) => void;
  onProductClick: (product: Product) => void;
  favorites: Set<string>;
  onToggleFavorite: (e: React.MouseEvent | string, productId?: string) => void;
}

const CollectionPage: React.FC<CollectionPageProps> = ({
  title,
  products,
  onAddToCart,
  onProductClick,
  favorites,
  onToggleFavorite
}) => {
  return (
    <div className="max-w-[1770px] mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-fade-in-up min-h-[60vh]">
      <div className="text-center mb-12 border-b border-primary pb-4 max-w-sm mx-auto">
        <h1 className="text-3xl font-heading font-bold text-primary uppercase tracking-wider">{title}</h1>
        <p className="text-gray-500 mt-2 text-sm">{products.length} Products Found</p>
      </div>

      {products.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-500 text-lg">No products found in this collection.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-2 gap-y-8 md:gap-x-4">
          {products.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={(p) => onAddToCart(p)} 
              onProductClick={onProductClick}
              isFavorite={favorites.has(product.id)}
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CollectionPage;
