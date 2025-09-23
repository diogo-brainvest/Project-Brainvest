import { useCallback, useEffect, useState } from 'react';

export const useSmoothScroll = () => {
  const [isClient, setIsClient] = useState(false);

  // Only run on client, not during SSR
  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleAnchorClick = useCallback((e: Event) => {
    try {
      const target = e.target as HTMLAnchorElement;
      const href = target.getAttribute('href');
      
      if (href?.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    } catch (err) {
      console.error('Error in handleAnchorClick:', err);
    }
  }, []);

  const handleNavigateToSection = useCallback((sectionId: string) => {
    try {
      if (!isClient) return;
      
      const element = document.getElementById(sectionId);
      
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    } catch (err) {
      console.error('Error in handleNavigateToSection:', err);
    }
  }, [isClient]);

  const handleCTAClick = useCallback(() => {
    try {
      // Em uma aplicação real, isso abriria um modal ou redirecionaria
      if (isClient) {
        alert('Funcionalidade em desenvolvimento! Em breve você poderá baixar nossa planilha gratuita.');
      }
    } catch (err) {
      console.error('Error in handleCTAClick:', err);
    }
  }, [isClient]);

  const initializeSmoothScroll = useCallback(() => {
    if (!isClient) return () => {};
    
    try {
      const anchors = document.querySelectorAll('a[href^="#"]');
      
      anchors.forEach(anchor => {
        anchor.addEventListener('click', handleAnchorClick);
      });

      return () => {
        anchors.forEach(anchor => {
          anchor.removeEventListener('click', handleAnchorClick);
        });
      };
    } catch (err) {
      console.error('Error in initializeSmoothScroll:', err);
      return () => {};
    }
  }, [handleAnchorClick, isClient]);

  return {
    handleAnchorClick,
    handleNavigateToSection,
    handleCTAClick,
    initializeSmoothScroll
  };
};