import React, { useState } from 'react';
import { ShoppingBag, Menu, X, Search, Heart, User } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  favoritesCount: number;
  onCartClick: () => void;
  onHomeClick: () => void;
  onFavoritesClick: () => void;
  onCategoryClick: (category: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ 
  cartCount, 
  favoritesCount, 
  onCartClick, 
  onHomeClick, 
  onFavoritesClick,
  onCategoryClick 
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (category: string) => {
    onCategoryClick(category);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm transition-all duration-300 font-sans">
      <div className="max-w-[1770px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer md:w-[150px]" onClick={onHomeClick}>
            <span className="font-heading text-2xl font-bold tracking-widest text-primary uppercase">BAHZAD</span>
          </div>

          {/* Desktop Menu (Center) */}
          <div className="hidden lg:flex items-center justify-center space-x-8 flex-1">
            <button onClick={onHomeClick} className="text-primary hover:text-secondary text-[14px] font-bold tracking-widest uppercase transition-colors">Home</button>
            <button onClick={() => handleNavClick('New Arrivals')} className="text-primary hover:text-secondary text-[14px] font-bold tracking-widest uppercase transition-colors">New Arrivals</button>
            <button onClick={() => handleNavClick('Casual')} className="text-primary hover:text-secondary text-[14px] font-bold tracking-widest uppercase transition-colors">Casual</button>
            <button onClick={() => handleNavClick('Festive')} className="text-primary hover:text-secondary text-[14px] font-bold tracking-widest uppercase transition-colors">Festive</button>
            <button onClick={() => handleNavClick('Kids')} className="text-primary hover:text-secondary text-[14px] font-bold tracking-widest uppercase transition-colors">Kids</button>
            <button onClick={() => handleNavClick('Sale')} className="text-sale hover:text-red-700 text-[14px] font-bold tracking-widest uppercase transition-colors">Sale</button>
          </div>

          {/* Icons (Right) */}
          <div className="flex items-center space-x-6 md:w-[150px] justify-end">
            <button className="hidden md:block text-primary hover:text-secondary transition-colors">
              <User className="h-5 w-5" strokeWidth={1.5} />
            </button>
            <button className="text-primary hover:text-secondary transition-colors">
              <Search className="h-5 w-5" strokeWidth={1.5} />
            </button>
            <button 
              className="text-primary hover:text-secondary relative transition-colors hidden md:block"
              onClick={onFavoritesClick}
            >
              <Heart className={`h-5 w-5 ${favoritesCount > 0 ? 'fill-accent text-accent' : ''}`} strokeWidth={1.5} />
              {favoritesCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                  {favoritesCount}
                </span>
              )}
            </button>
            <button 
              className="text-primary hover:text-secondary relative transition-colors"
              onClick={onCartClick}
            >
              <ShoppingBag className="h-5 w-5" strokeWidth={1.5} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button 
              className="lg:hidden text-primary hover:text-secondary"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full left-0 animate-fade-in-down z-40 shadow-lg h-screen">
          <div className="px-4 pt-2 pb-6 space-y-1 flex flex-col">
            <button onClick={() => handleNavClick('Home')} className="text-left px-3 py-4 text-sm font-bold uppercase tracking-widest text-primary border-b border-gray-50">Home</button>
            <button onClick={() => handleNavClick('New Arrivals')} className="text-left px-3 py-4 text-sm font-bold uppercase tracking-widest text-primary hover:bg-gray-50 border-b border-gray-50">New Arrivals</button>
            <button onClick={() => handleNavClick('Casual')} className="text-left px-3 py-4 text-sm font-bold uppercase tracking-widest text-primary hover:bg-gray-50 border-b border-gray-50">Casual</button>
            <button onClick={() => handleNavClick('Festive')} className="text-left px-3 py-4 text-sm font-bold uppercase tracking-widest text-primary hover:bg-gray-50 border-b border-gray-50">Festive</button>
            <button onClick={() => handleNavClick('Kids')} className="text-left px-3 py-4 text-sm font-bold uppercase tracking-widest text-primary hover:bg-gray-50 border-b border-gray-50">Kids</button>
            <button onClick={() => handleNavClick('Sale')} className="text-left px-3 py-4 text-sm font-bold uppercase tracking-widest text-sale hover:bg-gray-50 border-b border-gray-50">Sale</button>
            <div className="px-3 py-4 border-b border-gray-50">
               <button onClick={onFavoritesClick} className="flex items-center text-sm font-bold uppercase tracking-widest text-primary">
                  <Heart className="h-4 w-4 mr-2" /> Wishlist ({favoritesCount})
               </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
