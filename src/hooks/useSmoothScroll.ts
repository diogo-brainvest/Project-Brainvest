import { useCallback } from 'react';

export const useSmoothScroll = () => {
  const handleNavigateToSection = useCallback((sectionId: string) => {
    if (typeof window === 'undefined') return;
    
    try {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    } catch (err) {
      console.error('Navigation error:', err);
    }
  }, []);

  const handleCTAClick = useCallback(() => {
    if (typeof window !== 'undefined') {
      alert('Funcionalidade em desenvolvimento!');
    }
  }, []);

  return {
    handleNavigateToSection,
    handleCTAClick
  };
};