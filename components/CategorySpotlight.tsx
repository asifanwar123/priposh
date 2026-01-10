import React from 'react';
import { CATEGORY_IMAGES } from '../constants';

interface CategorySpotlightProps {
  onCategoryClick: (category: string) => void;
}

const CategorySpotlight: React.FC<CategorySpotlightProps> = ({ onCategoryClick }) => {
  return (
    <section className="max-w-[1770px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Casual */}
        <div className="relative group overflow-hidden cursor-pointer" onClick={() => onCategoryClick('Casual')}>
          <div className="aspect-[3/4] overflow-hidden">
            <img 
              src={CATEGORY_IMAGES.casual} 
              alt="Casual" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="absolute top-1/2 left-[-15px] -translate-y-1/2 bg-white/90 backdrop-blur-sm px-1 py-3 shadow-sm transform -rotate-90 origin-center">
             <span className="text-xl font-heading font-bold text-primary tracking-widest uppercase block">Casual</span>
          </div>
        </div>

        {/* Festive */}
        <div className="relative group overflow-hidden cursor-pointer" onClick={() => onCategoryClick('Festive')}>
          <div className="aspect-[3/4] overflow-hidden">
            <img 
              src={CATEGORY_IMAGES.festive} 
              alt="Festive" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="absolute top-1/2 left-[-15px] -translate-y-1/2 bg-white/90 backdrop-blur-sm px-1 py-3 shadow-sm transform -rotate-90 origin-center">
             <span className="text-xl font-heading font-bold text-primary tracking-widest uppercase block">Festive</span>
          </div>
        </div>

        {/* Kids */}
        <div className="relative group overflow-hidden cursor-pointer" onClick={() => onCategoryClick('Kids')}>
          <div className="aspect-[3/4] overflow-hidden">
            <img 
              src={CATEGORY_IMAGES.kids} 
              alt="Kids" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="absolute top-1/2 left-[-8px] -translate-y-1/2 bg-white/90 backdrop-blur-sm px-1 py-3 shadow-sm transform -rotate-90 origin-center">
             <span className="text-xl font-heading font-bold text-primary tracking-widest uppercase block">Kids</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySpotlight;
