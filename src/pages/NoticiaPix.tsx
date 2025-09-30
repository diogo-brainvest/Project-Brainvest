import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/sections/Header';
import Footer from '../components/sections/Footer';
import './NoticiaPix.css';

const NoticiaPix: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="noticia-page-container">
      {/* Header Componente */}
      <Header />

      {/* Conteúdo Principal */}
      <main className="noticia-main">
        <div className="container">
          <article className="noticia-article">
            {/* Header da Notícia */}
            <header className="noticia-header">
              <div className="noticia-category">🚨 ALERTA FINANCEIRO</div>
              <h1 className="noticia-title">
                BC Alerta: PIX Parcelado Pode Ser Regulamentado Ainda em 2025
              </h1>
              <p className="noticia-lead">
                Com crescimento explosivo de 187%, Banco Central acelera estudos para regulamentar modalidade. 
                Especialistas alertam para riscos sistêmicos e necessidade de proteção ao consumidor.
              </p>
              <div className="noticia-meta">
                <span className="noticia-date">28 de Setembro, 2025</span>
                <span className="noticia-author">Por Finance Helper</span>
              </div>
            </header>

            {/* Corpo da Notícia */}
            <div className="noticia-body">
              <p>
                O Banco Central do Brasil (BC) confirmou que a regulamentação do "PIX Parcelado", modalidade que permite 
                dividir compras via PIX, está na pauta prioritária e pode ser implementada ainda em 2025. A medida surge 
                após um crescimento explosivo de 187% na utilização da ferramenta nos últimos 12 meses.
              </p>

              <p>
                A modalidade, oferecida de forma independente por diversas instituições financeiras, tem ganhado 
                popularidade entre consumidores que buscam alternativas ao cartão de crédito tradicional. No entanto, 
                a ausência de regras unificadas gera preocupação tanto no BC quanto entre especialistas do setor.
              </p>

              <blockquote className="noticia-quote">
                "O crescimento desordenado cria um ambiente de risco tanto para o consumidor, que pode se endividar 
                sem clareza das taxas aplicadas, quanto para o sistema financeiro como um todo"
                <cite>— Analista sênior do Banco Central</cite>
              </blockquote>

              <h2>Riscos e Oportunidades do PIX Parcelado</h2>
              
              <p>
                Especialistas alertam que, sem controle adequado, o PIX Parcelado pode se tornar uma nova fonte de 
                superendividamento. Em alguns casos, as taxas de juros aplicadas chegam a superar as do cartão de 
                crédito, atingindo patamares de 15% a 20% ao mês em modalidades específicas.
              </p>

              <p>
                Por outro lado, a formalização da modalidade pode democratizar o acesso ao crédito e aumentar a 
                competição no setor, potencialmente reduzindo custos para o consumidor final.
              </p>

              <h2>O Que a Regulamentação Deve Incluir</h2>

              <p>A regulamentação em estudo pelo BC deve abordar pontos cruciais como:</p>

              <ul>
                <li><strong>Padronização de taxas:</strong> Definição de limites máximos para juros e tarifas</li>
                <li><strong>Transparência:</strong> Obrigatoriedade de informar custos de forma clara</li>
                <li><strong>Proteção ao consumidor:</strong> Mecanismos de defesa contra práticas abusivas</li>
                <li><strong>Responsabilidades:</strong> Definição clara entre bancos, fintechs e intermediários</li>
              </ul>

              <p>
                A expectativa é que o BC apresente uma consulta pública sobre o tema no primeiro semestre de 2025, 
                definindo as diretrizes para que a modalidade opere de forma segura e sustentável.
              </p>
            </div>

            {/* Seção de Investimentos */}
            <section id="investimentos" className="investimentos-section">
              <h2 className="section-title">💰 Primeiros Passos para Investir</h2>
              
              <div className="passos-grid">
                <div className="passo-card">
                  <div className="passo-number">1</div>
                  <h3>Organize suas Finanças</h3>
                  <p>
                    Primeiro de tudo: sabe para onde seu dinheiro tá indo? Dá uma olhada nos gastos, 
                    corta o que é supérfluo e, se tiver dívidas com juros altos, resolve isso antes. 
                    Depois, monta uma reserva de emergência em algo seguro e com saque fácil.
                  </p>
                </div>

                <div className="passo-card">
                  <div className="passo-number">2</div>
                  <h3>Tenha Objetivos Claros</h3>
                  <p>
                    Investir sem objetivo é tipo andar sem mapa. Quer viajar? Comprar um carro? 
                    Garantir a aposentadoria? Decide o "para quê" e o "quando". E já aproveita para 
                    descobrir seu perfil de investidor (conservador, moderado ou arrojado).
                  </p>
                </div>

                <div className="passo-card">
                  <div className="passo-number">3</div>
                  <h3>Escolha uma Corretora</h3>
                  <p>
                    Hoje é simples: baixe o app, abre a conta e pronto. Mas não vai no impulso! 
                    Pesquisa, compara algumas opções e vê qual te passa mais confiança.
                  </p>
                </div>

                <div className="passo-card">
                  <div className="passo-number">4</div>
                  <h3>Hora da Primeira Aplicação</h3>
                  <p>
                    Não espera ter muito dinheiro, começa pequeno. O importante é dar o primeiro passo. 
                    Renda fixa é ótima para começar e criar o hábito de investir todo mês.
                  </p>
                </div>

                <div className="passo-card">
                  <div className="passo-number">5</div>
                  <h3>Acompanhe e Ajuste</h3>
                  <p>
                    Investir é um processo, não corrida de 100 metros. Vai acompanhando sem ansiedade, 
                    tenha paciência e, com o tempo, diversifica para reduzir riscos e aumentar as chances de ganho.
                  </p>
                </div>
              </div>
            </section>

            {/* Seção CDB */}
            <section className="cdb-section">
              <h2 className="section-title">📊 Passo a Passo: Seu Primeiro CDB</h2>
              
              <div className="cdb-intro">
                <p>
                  <strong>O que é um CDB?</strong> É um jeito de você emprestar dinheiro ao banco e receber juros em troca. 
                  É simples: você aplica hoje e o banco devolve o valor aplicado com rendimento.
                </p>
              </div>

              <div className="cdb-passos">
                <div className="cdb-passo">
                  <h4>1. Defina seu objetivo</h4>
                  <p>Quer montar uma reserva de emergência? Guardar para um plano de médio prazo? O prazo do seu objetivo ajuda a escolher o tipo de CDB mais adequado.</p>
                </div>

                <div className="cdb-passo">
                  <h4>2. Abra uma conta</h4>
                  <p>Escolha uma corretora ou banco digital confiável. Hoje dá para abrir conta pelo celular em poucos minutos, sem complicação.</p>
                </div>

                <div className="cdb-passo">
                  <h4>3. Transfira o valor</h4>
                  <p>Faça uma transferência para a conta da corretora/banco. Assim, seu dinheiro estará disponível para aplicar.</p>
                </div>

                <div className="cdb-passo">
                  <h4>4. Escolha o CDB adequado</h4>
                  <p>Na área de investimentos, procure por CDBs. Observe:</p>
                  <ul>
                    <li>Rentabilidade (ex.: 100% do CDI)</li>
                    <li>Liquidez (se pode resgatar a qualquer momento ou só no vencimento)</li>
                    <li>Garantia do FGC (protege até R$ 250 mil por CPF em cada instituição)</li>
                  </ul>
                </div>

                <div className="cdb-passo">
                  <h4>5. Faça sua primeira aplicação</h4>
                  <p>Selecione o valor, confirme e pronto: você já é investidor(a)! 🎉</p>
                </div>

                <div className="cdb-passo">
                  <h4>6. Acompanhe seu investimento</h4>
                  <p>Pelo aplicativo, você consegue ver o rendimento crescer dia a dia. Se for um CDB de liquidez diária, pode resgatar quando precisar.</p>
                </div>
              </div>

              <div className="cdb-dica">
                <h4>💡 Dica Rápida</h4>
                <p>Para quem está começando, o CDB com liquidez diária é uma ótima escolha. Ele rende mais que a poupança e você pode sacar a qualquer momento, sem dor de cabeça.</p>
              </div>
            </section>

            {/* CTA */}
            <section className="noticia-cta">
              <h3>Gostou do conteúdo?</h3>
              <p>Volte para a home e explore mais dados sobre endividamento e educação financeira no Brasil.</p>
              <Link to="/" className="btn btn-primary btn-large">
                Voltar para Home
              </Link>
            </section>
          </article>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default NoticiaPix;