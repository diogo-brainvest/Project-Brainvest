import { useCallback } from 'react';

export const useSmoothScroll = () => {
  const handleAnchorClick = useCallback((e: Event) => {
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
  }, []);

  const handleNavigateToSection = useCallback((sectionId: string) => {
    console.log('handleNavigateToSection chamado com:', sectionId);
    const element = document.getElementById(sectionId);
    
    if (element) {
      console.log('Elemento encontrado, fazendo scroll para:', element);
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      console.log('Elemento não encontrado com ID:', sectionId);
    }
  }, []);

  const handleCTAClick = useCallback(() => {
    // Em uma aplicação real, isso abriria um modal ou redirecionaria
    alert('Funcionalidade em desenvolvimento! Em breve você poderá baixar nossa planilha gratuita.');
  }, []);

  const initializeSmoothScroll = useCallback(() => {
    const anchors = document.querySelectorAll('a[href^="#"]');
    
    anchors.forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick);
    });

    return () => {
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
    };
  }, [handleAnchorClick]);

  return {
    handleAnchorClick,
    handleNavigateToSection,
    handleCTAClick,
    initializeSmoothScroll
  };
};