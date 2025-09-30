import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { navigationData } from '../../data/mockData';

interface HeaderProps {
  onNavigate?: (sectionId: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const navigate = useNavigate();

  const handleNavigation = (href: string, label: string) => {
    console.log('Navegando para:', { href, label, onNavigate: !!onNavigate });
    
    // Se for uma navegação interna na página Home
    if (onNavigate && href.startsWith('#')) {
      const sectionId = href.substring(1);
      console.log('Navegação interna para seção:', sectionId);
      onNavigate(sectionId);
    } else {
      // Navegação para outras páginas ou seções específicas
      switch (label) {
        case 'Home':
          navigate('/');
          break;
        case 'Dados':
          if (onNavigate) {
            console.log('Navegando para dados via onNavigate');
            onNavigate('dados');
          } else {
            navigate('/#dados');
          }
          break;
        case 'Dicas':
          if (onNavigate) {
            console.log('Navegando para dicas via onNavigate');
            onNavigate('dicas');
          } else {
            navigate('/#dicas');
          }
          break;
        case 'Blog':
          navigate('/blog');
          break;
        case 'Sobre':
          if (onNavigate) {
            console.log('Navegando para sobre via onNavigate');
            onNavigate('sobre');
          } else {
            navigate('/#sobre');
          }
          break;
        default:
          navigate('/');
      }
    }
  };

  return (
    <header className="header">
      <nav className="nav">
        <div className="nav__brand">
          <Link to="/" className="logo">
            Probono Finance
          </Link>
        </div>
        <ul className="nav__menu">
          {navigationData.map(({ href, label }) => (
            <li key={href}>
              <button
                onClick={() => handleNavigation(href, label)}
                className="nav__link nav-link"
                type="button"
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default React.memo(Header);