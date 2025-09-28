import React from 'react';
import { navigationData } from '../../data/mockData';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => (
  <header className="header">
    <nav className="nav">
      <div className="nav__brand">
        <h2>Probono Finance</h2>
      </div>
      <ul className="nav__menu">
        {navigationData.map(({ href, label }) => (
          <li key={href}>
            <button
              onClick={() => onNavigate(href.substring(1))}
              className="nav__link"
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

export default React.memo(Header);