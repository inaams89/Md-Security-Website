import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollProgress from './ScrollProgress';
import FloatingButtons from './FloatingButtons';

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-[88px]">
        {children}
      </main>
      <Footer />
      <ScrollProgress />
      <FloatingButtons />
    </div>
  );
};

export default PageLayout;
