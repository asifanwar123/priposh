import React from 'react';

interface StaticPageProps {
  title: string;
  content: string;
}

const StaticPage: React.FC<StaticPageProps> = ({ title, content }) => {
  return (
    <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-fade-in-up min-h-[60vh]">
      <div className="text-center mb-12 border-b border-primary pb-4 max-w-sm mx-auto">
        <h1 className="text-3xl font-heading font-bold text-primary uppercase tracking-wider">{title}</h1>
      </div>
      
      <div 
        className="prose prose-lg mx-auto text-gray-600 font-sans leading-relaxed"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

export default StaticPage;
