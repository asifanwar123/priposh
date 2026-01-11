
import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Search, Heart, User, LogOut, Zap, Truck } from 'lucide-react';
import { User as UserType } from '../types';

interface NavbarProps {
  cartCount: number;
  favoritesCount: number;
  onCartClick: () => void;
  onHomeClick: () => void;
  onFavoritesClick: () => void;
  onCategoryClick: (category: string) => void;
  onLoginClick: () => void;
  user: UserType | null;
  onLogout: () => void;
  onPageClick: (pageName: string) => void;
}

const FLASH_MESSAGES = [
  "Flash Discount: Flat 30% Off",
  "New Arrivals are Live",
  "End of Season Sale",
  "Limited Time Offer"
];

const Navbar: React.FC<NavbarProps> = ({ 
  cartCount, 
  favoritesCount, 
  onCartClick, 
  onHomeClick, 
  onFavoritesClick,
  onCategoryClick,
  onLoginClick,
  user,
  onLogout,
  onPageClick
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [currentFlashIndex, setCurrentFlashIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFlashIndex((prev) => (prev + 1) % FLASH_MESSAGES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleNavClick = (category: string) => {
    onCategoryClick(category);
    setIsMobileMenuOpen(false);
  };

  const handlePageClick = (page: string) => {
    onPageClick(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="font-sans">
      {/* Top Bar Announcement */}
      <div className="bg-primary text-white text-[11px] sm:text-xs py-2 px-4 relative z-50">
        <div className="max-w-[1770px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
          
          {/* Left Side: Pages */}
          <div className="flex space-x-6">
            <button onClick={() => onPageClick('Our Story')} className="hover:text-amber-400 transition-colors font-medium">About Us</button>
            <button onClick={() => onPageClick('Contact Us')} className="hover:text-amber-400 transition-colors font-medium">Contact</button>
          </div>

          {/* Right Side: Announcements */}
          <div className="flex items-center space-x-4 sm:space-x-8">
            <button 
              onClick={() => onCategoryClick('Sale')} 
              className="flex items-center hover:text-amber-400 transition-colors uppercase font-bold tracking-widest animate-pulse min-w-[180px] justify-center"
            >
              <Zap className="w-3 h-3 mr-1 fill-amber-400 text-amber-400" />
              {FLASH_MESSAGES[currentFlashIndex]}
            </button>
            
            <span className="hidden sm:inline text-gray-500">|</span>
            
            <div className="flex items-center tracking-wide font-medium">
              <Truck className="w-3 h-3 mr-1.5" />
              Free Shipping on Orders Over PKR 10,000
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="sticky top-0 z-40 bg-white border-b border-gray-100 shadow-sm transition-all duration-300">
        <div className="max-w-[1770px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 md:h-28">
            
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center cursor-pointer md:w-auto" onClick={onHomeClick}>
               <div className="flex flex-col relative group">
                  <h1 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-widest text-primary relative z-10 transition-colors duration-300 group-hover:text-gray-800 whitespace-nowrap">
                    PARI POSH
                    <span className="inline-block w-1.5 h-1.5 sm:w-2 sm:h-2 bg-pink-500 rounded-full ml-1 mb-1 sm:mb-2 shadow-sm ring-1 sm:ring-2 ring-white"></span>
                  </h1>
                  <span className="text-[8px] sm:text-[9px] font-sans font-medium tracking-[0.4em] text-gray-400 uppercase text-center -mt-1 group-hover:text-pink-500 transition-colors duration-300">
                    Premium Wear
                  </span>
               </div>
            </div>

            {/* Desktop Menu (Center) */}
            <div className="hidden lg:flex items-center justify-center space-x-8 flex-1">
              <button onClick={onHomeClick} className="text-primary hover:text-secondary text-[13px] font-bold tracking-[0.15em] uppercase transition-colors">Home</button>
              <button onClick={() => handleNavClick('New Arrivals')} className="text-primary hover:text-secondary text-[13px] font-bold tracking-[0.15em] uppercase transition-colors">New Arrivals</button>
              <button onClick={() => handleNavClick('Casual')} className="text-primary hover:text-secondary text-[13px] font-bold tracking-[0.15em] uppercase transition-colors">Casual</button>
              <button onClick={() => handleNavClick('Festive')} className="text-primary hover:text-secondary text-[13px] font-bold tracking-[0.15em] uppercase transition-colors">Festive</button>
              <button onClick={() => handleNavClick('Kids')} className="text-primary hover:text-secondary text-[13px] font-bold tracking-[0.15em] uppercase transition-colors">Kids</button>
              <button onClick={() => handleNavClick('Sale')} className="text-sale hover:text-red-700 text-[13px] font-bold tracking-[0.15em] uppercase transition-colors">Sale</button>
            </div>

            {/* Icons (Right) */}
            <div className="flex items-center space-x-4 md:space-x-6 justify-end flex-shrink-0">
              <div className="relative hidden md:block">
                <button 
                  className={`text-primary hover:text-secondary transition-colors flex items-center ${user ? 'text-amber-600' : ''}`}
                  onClick={user ? () => setShowUserMenu(!showUserMenu) : onLoginClick}
                >
                  <User className="h-5 w-5" strokeWidth={1.5} />
                  {user && <span className="ml-2 text-xs font-bold uppercase hidden xl:block">{user.name?.split(' ')[0]}</span>}
                </button>
                
                {/* User Dropdown */}
                {user && showUserMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-100 animate-fade-in-down">
                    <div className="px-4 py-2 text-xs text-gray-500 border-b border-gray-100">
                      Signed in as <br/> <span className="font-bold text-gray-900">{user.phoneNumber}</span>
                    </div>
                    <button 
                      onClick={() => {
                        onLogout();
                        setShowUserMenu(false);
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center"
                    >
                      <LogOut className="h-4 w-4 mr-2" /> Sign out
                    </button>
                  </div>
                )}
              </div>

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
          <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full left-0 animate-fade-in-down z-40 shadow-lg h-screen overflow-y-auto">
            <div className="px-4 pt-2 pb-6 space-y-1 flex flex-col">
              <div className="py-4 border-b border-gray-50 mb-2">
                {user ? (
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-gray-900">Hi, {user.name}</span>
                    <button onClick={onLogout} className="text-xs text-red-500 font-medium">Logout</button>
                  </div>
                ) : (
                  <button 
                    onClick={() => {
                      onLoginClick();
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full bg-primary text-white py-3 text-sm font-bold uppercase rounded"
                  >
                    Login / Sign Up
                  </button>
                )}
              </div>

              <button onClick={() => handleNavClick('Home')} className="text-left px-3 py-4 text-sm font-bold uppercase tracking-widest text-primary border-b border-gray-50">Home</button>
              <button onClick={() => handleNavClick('New Arrivals')} className="text-left px-3 py-4 text-sm font-bold uppercase tracking-widest text-primary hover:bg-gray-50 border-b border-gray-50">New Arrivals</button>
              <button onClick={() => handleNavClick('Casual')} className="text-left px-3 py-4 text-sm font-bold uppercase tracking-widest text-primary hover:bg-gray-50 border-b border-gray-50">Casual</button>
              <button onClick={() => handleNavClick('Festive')} className="text-left px-3 py-4 text-sm font-bold uppercase tracking-widest text-primary hover:bg-gray-50 border-b border-gray-50">Festive</button>
              <button onClick={() => handleNavClick('Kids')} className="text-left px-3 py-4 text-sm font-bold uppercase tracking-widest text-primary hover:bg-gray-50 border-b border-gray-50">Kids</button>
              <button onClick={() => handleNavClick('Sale')} className="text-left px-3 py-4 text-sm font-bold uppercase tracking-widest text-sale hover:bg-gray-50 border-b border-gray-50">Sale</button>
              
              {/* Added mobile links for About and Contact */}
              <button onClick={() => handlePageClick('Our Story')} className="text-left px-3 py-4 text-sm font-bold uppercase tracking-widest text-primary hover:bg-gray-50 border-b border-gray-50">About Us</button>
              <button onClick={() => handlePageClick('Contact Us')} className="text-left px-3 py-4 text-sm font-bold uppercase tracking-widest text-primary hover:bg-gray-50 border-b border-gray-50">Contact Us</button>

              <div className="px-3 py-4 border-b border-gray-50">
                 <button onClick={onFavoritesClick} className="flex items-center text-sm font-bold uppercase tracking-widest text-primary">
                    <Heart className="h-4 w-4 mr-2" /> Wishlist ({favoritesCount})
                 </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
