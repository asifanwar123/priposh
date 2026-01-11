
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategorySpotlight from './components/CategorySpotlight';
import ProductCard from './components/ProductCard';
import ProductDetails from './components/ProductDetails';
import CollectionPage from './components/CollectionPage';
import StaticPage from './components/StaticPage';
import CartSidebar from './components/CartSidebar';
import CheckoutModal from './components/CheckoutModal';
import LoginModal from './components/LoginModal';
import Footer from './components/Footer';
import AiStylist from './components/AiStylist';
import { PRODUCTS, STATIC_PAGES_CONTENT } from './constants';
import { Product, CartItem, ViewType, User } from './types';

const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  
  // Authentication State
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  // Navigation States
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [view, setView] = useState<ViewType>('HOME');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeStaticPage, setActiveStaticPage] = useState<string>('');

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleAddToCart = (product: Product, quantity = 1, size = 'M') => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id && item.selectedSize === size);
      if (existing) {
        return prev.map(item => 
          (item.id === product.id && item.selectedSize === size) ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prev, { ...product, quantity, selectedSize: size }];
    });
    setIsCartOpen(true);
  };

  const handleBuyNow = (product: Product, quantity: number, size: string) => {
    handleAddToCart(product, quantity, size);
    setIsCartOpen(false);
    setTimeout(() => setIsCheckoutOpen(true), 100);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(0, item.quantity + delta);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const handleRemoveItem = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleCheckoutSuccess = () => {
    setCartItems([]);
  };

  const handleToggleFavorite = (e: React.MouseEvent | string, productId?: string) => {
    const id = typeof e === 'string' ? e : productId!;
    if (typeof e !== 'string') e.stopPropagation();

    setFavorites(prev => {
      const newFavs = new Set(prev);
      if (newFavs.has(id)) {
        newFavs.delete(id);
      } else {
        newFavs.add(id);
      }
      return newFavs;
    });
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setView('DETAILS');
    window.scrollTo(0, 0);
  };

  const navigateHome = () => {
    setView('HOME');
    setSelectedProduct(null);
    window.scrollTo(0, 0);
  };

  const navigateFavorites = () => {
    setView('FAVORITES');
    setSelectedProduct(null);
    window.scrollTo(0, 0);
  };

  const navigateCollection = (category: string) => {
    if (category === 'Home') {
      navigateHome();
      return;
    }
    setActiveCategory(category);
    setView('COLLECTION');
    setSelectedProduct(null);
    window.scrollTo(0, 0);
  };

  const navigateStaticPage = (pageName: string) => {
    if (STATIC_PAGES_CONTENT[pageName]) {
      setActiveStaticPage(pageName);
      setView('STATIC_PAGE');
      window.scrollTo(0, 0);
    }
  };

  const cartTotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  // Filter products for sections
  const recommendedProducts = PRODUCTS.slice(0, 8); // Top 8
  const trendingProducts = PRODUCTS.slice(7, 11); // Bottom 4

  // Filter products for Collection Page
  const getCollectionProducts = () => {
    switch (activeCategory) {
      case 'New Arrivals':
        return PRODUCTS.filter(p => p.isNew);
      case 'Casual':
        return PRODUCTS.filter(p => p.category === 'Casual');
      case 'Festive':
        return PRODUCTS.filter(p => p.category === 'Festive');
      case 'Kids':
        return PRODUCTS.filter(p => p.category === 'Kids' || p.tags.includes('kids'));
      case 'Sale':
        return PRODUCTS.filter(p => (p.discountPercentage || 0) > 0);
      default:
        return PRODUCTS;
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar 
        cartCount={cartCount} 
        favoritesCount={favorites.size}
        onCartClick={() => setIsCartOpen(true)}
        onHomeClick={navigateHome}
        onFavoritesClick={navigateFavorites}
        onCategoryClick={navigateCollection}
        onLoginClick={() => setIsLoginOpen(true)}
        user={user}
        onLogout={() => setUser(null)}
        onPageClick={navigateStaticPage}
      />

      {view === 'HOME' && (
        <>
          <Hero />
          
          <CategorySpotlight onCategoryClick={navigateCollection} />

          <main className="max-w-[1770px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
            {/* Recommended For You */}
            <div className="text-center mb-10 border-b border-primary pb-4 max-w-sm mx-auto">
               <h2 className="text-[20px] font-heading font-normal text-primary uppercase">Recommended For You</h2>
               <div className="mt-2">
                 <button onClick={() => navigateCollection('New Arrivals')} className="text-xs text-secondary hover:text-accent flex items-center justify-center mx-auto">View All</button>
               </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-2 gap-y-8 md:gap-x-4">
              {recommendedProducts.map(product => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onAddToCart={(p) => handleAddToCart(p)} 
                  onProductClick={handleProductClick}
                  isFavorite={favorites.has(product.id)}
                  onToggleFavorite={handleToggleFavorite}
                />
              ))}
            </div>

            {/* Banner Section - Pre Winter Edit */}
            <section className="mt-16 mb-16">
               <div className="relative w-full aspect-[2.6/1]">
                  <img 
                    src="//khayat.pk/cdn/shop/files/banner_2_fb2f7436-f521-4c7e-9b80-e74b1b2e0c37.jpg?v=1730380461&width=3840" 
                    alt="Pre-Winter Edit" 
                    className="w-full h-full object-cover"
                  />
               </div>
            </section>

            {/* Trending Now */}
            <div className="text-center mb-10 border-b border-primary pb-4 max-w-sm mx-auto">
               <h2 className="text-[20px] font-heading font-normal text-primary uppercase">Trending Now</h2>
               <div className="mt-2">
                 <button onClick={() => navigateCollection('Sale')} className="text-xs text-secondary hover:text-accent flex items-center justify-center mx-auto">View All</button>
               </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-2 gap-y-8 md:gap-x-4 mb-16">
              {trendingProducts.map(product => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onAddToCart={(p) => handleAddToCart(p)} 
                  onProductClick={handleProductClick}
                  isFavorite={favorites.has(product.id)}
                  onToggleFavorite={handleToggleFavorite}
                />
              ))}
            </div>
          </main>
        </>
      )}

      {view === 'COLLECTION' && (
        <CollectionPage 
          title={activeCategory}
          products={getCollectionProducts()}
          onAddToCart={handleAddToCart}
          onProductClick={handleProductClick}
          favorites={favorites}
          onToggleFavorite={handleToggleFavorite}
        />
      )}

      {view === 'DETAILS' && selectedProduct && (
        <ProductDetails 
          product={selectedProduct}
          onBack={navigateHome}
          onAddToCart={handleAddToCart}
          onBuyNow={handleBuyNow}
          isFavorite={favorites.has(selectedProduct.id)}
          onToggleFavorite={(id) => handleToggleFavorite(id, id)}
        />
      )}

      {view === 'FAVORITES' && (
        <main className="max-w-[1770px] mx-auto px-4 sm:px-6 lg:px-8 py-16 min-h-[60vh]">
          <h2 className="text-3xl font-heading font-bold text-primary mb-8 text-center uppercase">My Wishlist</h2>
          {favorites.size === 0 ? (
             <div className="text-center py-20">
               <p className="text-gray-500 text-lg">Your wishlist is empty.</p>
               <button onClick={navigateHome} className="mt-4 text-accent font-medium hover:underline">Browse Collection</button>
             </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-2 gap-y-8 md:gap-x-4">
              {PRODUCTS.filter(p => favorites.has(p.id)).map(product => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onAddToCart={(p) => handleAddToCart(p)} 
                  onProductClick={handleProductClick}
                  isFavorite={true}
                  onToggleFavorite={handleToggleFavorite}
                />
              ))}
            </div>
          )}
        </main>
      )}

      {view === 'STATIC_PAGE' && STATIC_PAGES_CONTENT[activeStaticPage] && (
        <StaticPage 
          title={STATIC_PAGES_CONTENT[activeStaticPage].title}
          content={STATIC_PAGES_CONTENT[activeStaticPage].content}
        />
      )}

      <Footer 
        onCategoryClick={navigateCollection} 
        onHomeClick={navigateHome} 
        onPageClick={navigateStaticPage}
      />

      <CartSidebar 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleCheckout}
      />

      <CheckoutModal 
        isOpen={isCheckoutOpen} 
        onClose={() => setIsCheckoutOpen(false)} 
        total={cartTotal}
        onSuccess={handleCheckoutSuccess}
        user={user}
        cartItems={cartItems}
      />

      <LoginModal 
        isOpen={isLoginOpen} 
        onClose={() => setIsLoginOpen(false)} 
        onLoginSuccess={(u) => setIsLoginOpen(false) || setUser(u)} 
      />

      <AiStylist />
    </div>
  );
};

export default App;
