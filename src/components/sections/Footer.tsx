import React from 'react';

const Footer: React.FC = () => (
  <footer className="footer">
    <div className="container">
      <p>&copy; 2025 Finance Helper. Todos os direitos reservados.</p>
      <p className="footer-disclaimer">
        Os dados apresentados são baseados em fontes oficiais como SPC Brasil, 
        Banco Central e IBGE. Para decisões financeiras importantes, consulte um profissional.
      </p>
    </div>
  </footer>
);

export default React.memo(Footer);