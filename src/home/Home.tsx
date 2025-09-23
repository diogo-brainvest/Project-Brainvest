import React, { useEffect, useCallback } from 'react';
import './Home.css';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  iconClass?: string;
}

interface ToolCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = React.memo(({ icon, title, description, iconClass }) => (
  <div className="feature-card">
    <span className={`feature-icon ${iconClass || ''}`}>{icon}</span>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
));

FeatureCard.displayName = 'FeatureCard';

const ToolCard: React.FC<ToolCardProps> = React.memo(({ icon, title, description }) => (
  <div className="tool-card">
    <span className="tool-icon">{icon}</span>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
));

ToolCard.displayName = 'ToolCard';

const Home: React.FC = () => {
  const handleAnchorClick = useCallback((e: MouseEvent) => {
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

  const animateOnScroll = useCallback(() => {
    const cards = document.querySelectorAll('.feature-card, .tool-card');
    cards.forEach(card => {
      const cardTop = card.getBoundingClientRect().top;
      const cardVisible = 150;
      
      if (cardTop < window.innerHeight - cardVisible) {
        const element = card as HTMLElement;
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  }, []);

  useEffect(() => {
    const initializeAnimations = () => {
      const cards = document.querySelectorAll('.feature-card, .tool-card');
      cards.forEach(card => {
        const element = card as HTMLElement;
        element.style.opacity = '0';
        element.style.transform = 'translateY(50px)';
        element.style.transition = 'all 0.6s ease';
      });
    };

    const anchors = document.querySelectorAll('a[href^="#"]');

    anchors.forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick as EventListener);
    });

    window.addEventListener('scroll', animateOnScroll);
    
    initializeAnimations();
    animateOnScroll();

    return () => {
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick as EventListener);
      });
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, [handleAnchorClick, animateOnScroll]);

  const handleNavigateToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const handleCTAClick = useCallback(() => {
    alert('Funcionalidade em desenvolvimento!');
  }, []);

  return (
    <div className="home-container">
      {/* Header */}
      <header className="header">
        <nav className="nav container">
          <div className="logo">
            <span>💰</span>
            FinanceHelper
          </div>
          <ul className="nav-menu">
            <li><a href="#inicio">Início</a></li>
            <li><a href="#recursos">Recursos</a></li>
            <li><a href="#ferramentas">Ferramentas</a></li>
            <li><a href="#educacao">Educação</a></li>
            <li><button type="button" onClick={() => handleNavigateToSection('contato')}>Contato</button></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero" id="inicio">
        <div className="container">
          <h1>Transforme sua Vida Financeira</h1>
          <p>Aprenda a investir, economizar e construir um futuro financeiro sólido com nossas ferramentas e conteúdos educacionais</p>
          <a href="#recursos" className="cta-button">Começar Agora</a>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="recursos">
        <div className="container">
          <h2 className="section-title">Por que escolher o FinanceHelper?</h2>
          <div className="features-grid">
            <FeatureCard
              icon="💼"
              title="Gestão de Orçamento"
              description="Controle suas finanças pessoais com ferramentas intuitivas para acompanhar receitas, despesas e economias mensais."
              iconClass="icon-wallet"
            />
            <FeatureCard
              icon="📊"
              title="Análise de Investimentos"
              description="Compare diferentes tipos de investimentos e descubra qual estratégia se adequa melhor ao seu perfil e objetivos."
              iconClass="icon-chart"
            />
            <FeatureCard
              icon="🛡️"
              title="Educação Segura"
              description="Aprenda sobre investimentos de forma segura com conteúdo validado por especialistas em mercado financeiro."
              iconClass="icon-shield"
            />
            <FeatureCard
              icon="🎯"
              title="Metas Personalizadas"
              description="Defina objetivos financeiros específicos e acompanhe seu progresso com planos personalizados para sua realidade."
              iconClass="icon-target"
            />
            <FeatureCard
              icon="📚"
              title="Conteúdo Educativo"
              description="Acesse artigos, vídeos e cursos sobre educação financeira, desde conceitos básicos até estratégias avançadas."
              iconClass="icon-book"
            />
            <FeatureCard
              icon="📈"
              title="Acompanhamento de Resultados"
              description="Monitore o crescimento do seu patrimônio e veja como suas decisões financeiras impactam seus objetivos."
              iconClass="icon-growth"
            />
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="tools" id="ferramentas">
        <div className="container">
          <h2 className="section-title">Ferramentas Práticas</h2>
          <div className="tools-grid">
            <ToolCard
              icon="🧮"
              title="Calculadora de Juros"
              description="Calcule rendimentos de investimentos e o poder dos juros compostos"
            />
            <ToolCard
              icon="📱"
              title="Controle de Gastos"
              description="Registre e categorize seus gastos diários de forma simples"
            />
            <ToolCard
              icon="🏆"
              title="Simulador de Metas"
              description="Visualize quanto tempo levará para alcançar seus objetivos"
            />
            <ToolCard
              icon="📋"
              title="Planejador Financeiro"
              description="Crie um plano financeiro personalizado para seus objetivos"
            />
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="education" id="educacao">
        <div className="container">
          <div className="education-content">
            <div className="education-text">
              <h2>Educação Financeira que Funciona</h2>
              <p>Nossa metodologia foi desenvolvida para pessoas que querem aprender de forma prática e aplicar conhecimentos reais no dia a dia.</p>
              <ul className="education-list">
                <li>Conceitos básicos de economia doméstica</li>
                <li>Como criar e manter uma reserva de emergência</li>
                <li>Tipos de investimentos para iniciantes</li>
                <li>Estratégias de diversificação de carteira</li>
                <li>Planejamento para aposentadoria</li>
              </ul>
              <button type="button" className="cta-button" onClick={handleCTAClick}>
                Agendar mentoria gratuita
              </button>
            </div>
            <div className="education-image">
              <span style={{fontSize: '4rem'}}>🎓</span>
              <h3>Mentores com carreira consolidada no mercado financeiro</h3>
              <p>Agende sua consultoria gratuita e fale com quem pode te ajudar a sair das dividas e começar a investir com segurança.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Comece Hoje Mesmo</h2>
          <p>Não deixe para amanhã o que pode transformar sua vida financeira hoje</p>
          <button type="button" className="cta-button" onClick={handleCTAClick}>
            Baixar planilha de controle de gastos
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contato">
        <div className="container">
          <h2 className="section-title">Entre em Contato</h2>
          <p>Tem dúvidas? Estamos aqui para ajudar!</p>
          <div className="contact-info">
            <div className="contact-item">
              <span>📧</span>
              <p>contato@financehelper.com</p>
            </div>
            <div className="contact-item">
              <span>📱</span>
              <p>(11) 9999-9999</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>FinanceHelper</h3>
              <p>Transformando vidas através da educação financeira</p>
            </div>
            <div className="footer-section">
              <h3>Links Úteis</h3>
              <button type="button" onClick={handleCTAClick}>Como Começar</button>
              <button type="button" onClick={() => handleNavigateToSection('ferramentas')}>Ferramentas</button>
              <button type="button" onClick={handleCTAClick}>Blog</button>
              <button type="button" onClick={handleCTAClick}>FAQ</button>
            </div>
            <div className="footer-section">
              <h3>Suporte</h3>
              <button type="button" onClick={handleCTAClick}>Central de Ajuda</button>
              <button type="button" onClick={() => handleNavigateToSection('contato')}>Contato</button>
              <button type="button" onClick={handleCTAClick}>Política de Privacidade</button>
              <button type="button" onClick={handleCTAClick}>Termos de Uso</button>
            </div>
            <div className="footer-section">
              <h3>Redes Sociais</h3>
              <button type="button" onClick={handleCTAClick}>📘 Facebook</button>
              <button type="button" onClick={handleCTAClick}>📸 Instagram</button>
              <button type="button" onClick={handleCTAClick}>🐦 Twitter</button>
              <button type="button" onClick={handleCTAClick}>💼 LinkedIn</button>
            </div>
          </div>
          <p>&copy; 2025 FinanceHelper. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;