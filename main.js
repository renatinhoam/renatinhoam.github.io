// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Language Toggle Logic
const langToggle = document.getElementById('langToggle');
let currentLang = localStorage.getItem('portfolioLang') || 'pt';

const updateLanguage = (lang) => {
    document.querySelectorAll('[data-pt]').forEach(el => {
        el.textContent = el.getAttribute(`data-${lang}`);
    });

    // Update placeholders
    document.querySelectorAll('[data-pt-placeholder]').forEach(el => {
        el.placeholder = el.getAttribute(`data-${lang}-placeholder`);
    });

    langToggle.textContent = lang === 'pt' ? 'EN' : 'PT';
    document.documentElement.lang = lang;
    localStorage.setItem('portfolioLang', lang);

    // Update search results if active
    if (typeof handleSearch === 'function' && document.getElementById('experienceSearch').value) {
        handleSearch(document.getElementById('experienceSearch').value);
    }
};

// Initialize language
updateLanguage(currentLang);

langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'pt' ? 'en' : 'pt';
    updateLanguage(currentLang);
});

// Modal Data
const caseData = {
    saas: {
        pt: {
            title: "Plataforma SaaS de Transporte",
            objective: ["Otimizar o setor de transporte através de novas soluções integradas", "Gerir o setor através de dados"],
            scenario: ["60+ motoristas", "6+ analistas de transporte (2 turnos)", "4 equipe de gestão", "Clientes estrangeiros (3+ nacionalidades)", "1000+ transportes/mês", "Foco extremo em segurança"],
            difficulties: ["Falta de processo padrão (7+ canais de input)", "Ausência de indicadores", "Falta de conhecimento de gestão", "Falta de conhecimento de metodologias", "Soluções imaturas para o cenário"],
            actions: ["Reuniões de alinhamento com equipe para entendimento das necessidades", "Tradução da linguagem de gestão através de planilhas e mapeamento", "Desenho visual de processos", "Criação de indicadores estratégicos", "Alinhamento de requisitos com suporte e desenvolvimento", "Criação de POC's", "Estruturação de treinamentos"],
            results: ["Solução implementada como principal recurso (Redução de inputs)", "Rastreamento total dos chamados de transportes", "Base de dados para tomadas de decisão estratégicas", "Aumento de 80% do uso do sistema pelos clientes", "+100% de atendimentos com acréscimo de apenas 5% de recursos", "Features novas implementadas para clusters globais"]
        },
        en: {
            title: "SaaS Transportation Platform",
            objective: ["Optimize the transport sector through integrated solutions", "Manage the sector through data-driven insights"],
            scenario: ["60+ drivers", "6+ transport analysts (2 shifts)", "4 management team members", "Foreign clients (3+ nationalities)", "1000+ transports/month", "Extreme focus on safety"],
            difficulties: ["Lack of standardized processes (7+ input channels)", "Absence of indicators", "Lack of management knowledge", "Lack of methodology expertise", "Immature solutions for the scenario"],
            actions: ["Alignment meetings with the team to understand needs", "Translation of management language via spreadsheets and mapping", "Visual process design", "Creation of strategic indicators", "Requirement alignment with support and dev teams", "POC creation", "Training structuring"],
            results: ["Solution implemented as the main transport resource", "Full tracking of transport requests", "Data-driven decision-making database", "80% increase in system usage by customers", "+100% service fulfillment with only 5% resource increase", "New features implemented for global service clusters"]
        }
    },
    fleet: {
        pt: {
            title: "Gestão Inteligente de Frota",
            objective: ["Realizar checklist básico de manutenção de forma mais ágil", "Garantir cumprimento de requisitos de forma automatizada", "Gerir ciclos através de dados"],
            scenario: ["500+ veículos na garagem", "3000+ funcionários", "Baixo conhecimento metodológico das equipes", "Sem cultura prévia de inovação", "Soluções independentes e fragmentadas"],
            difficulties: ["Falta de disponibilidade da equipe", "Processos manuais e dados não confiáveis", "Instaurar processos de validação", "Recursos limitados (sinal, pessoal e financeiro)", "Precisão do sistema em locais físicos restritos"],
            actions: ["Alinhamento de requisitos e expectativas com cliente", "Análise de requisitos com pesos por operação (planilhas simples)", "Centralização manual de dados para validação inicial", "Validação via processos simples por Telegram e Excel"],
            results: ["Construção de cultura 'lean startup'", "Identificação de funcionalidades essenciais (MVP)", "Solução com 90%+ de assertividade", "Prevenção de prejuízos de R$50.000+", "Tempo de vistoria reduzido de 2min para 15 segundos"]
        },
        en: {
            title: "Smart Fleet Management",
            objective: ["Perform basic maintenance checklist more agilely", "Ensure automated compliance with vehicle requirements", "Manage cycles through data-driven insights"],
            scenario: ["500+ vehicles in garage", "3000+ employees", "Low methodological knowledge in teams", "No previous innovation or project culture", "Independent and fragmented solutions"],
            difficulties: ["Lack of team availability", "Manual processes and unreliable data", "Establishing validation processes", "Limited resources (signal, staff, and budget)", "System precision in physically restricted areas"],
            actions: ["Alignment of requirements and expectations with the client", "Weighted requirement analysis per operation (simple spreadsheets)", "Manual data centralization for initial validation", "Validation through simplified processes via Telegram and Excel"],
            results: ["Built a 'lean startup' culture", "Identification of essential features (MVP)", "Solution with 90%+ accuracy", "Prevention of losses exceeding R$50,000", "Inspection time reduced from 2min to 15 seconds"]
        }
    },
    growth: {
        pt: {
            title: "Crescimento de Startup – Amor e Horta",
            objective: ["Aumentar volume de vendas", "Melhorar a experiência do cliente", "Facilitar o processo de compra"],
            scenario: ["Apenas 3 clientes semanais (early adopters)", "Compra 'às cegas' (apenas categoria/quantidade)", "Processo manual de restrições alimentares"],
            difficulties: ["Ausência de dados históricos (apenas WhatsApp)", "Falta de CRM e processos padronizados", "Logística limitada à equipe própria", "Produtos altamente perecíveis e sensíveis"],
            actions: ["Mudança do modelo 'às cegas' para lista de escolha ativa", "Validação de modelo e-commerce via WhatsApp", "Novo packaging com dicas e receitas (branding)", "Fortalecimento da marca via comunicação agroecológica"],
            results: ["Alta aderência ao novo modelo de escolha", "Crescimento de 500% em 5 meses (800% em 10 meses)", "110+ contatos registrados em novo CRM", "Aumento do Ticket Médio em quase 50%"]
        },
        en: {
            title: "Startup Growth – Amor e Horta",
            objective: ["Increase sales volume", "Improve customer experience", "Facilitate the buying process"],
            scenario: ["Only 3 weekly clients (early adopters)", "'Blind' buying model (category/quantity only)", "Manual dietary restriction tracking"],
            difficulties: ["No historical data (WhatsApp only)", "Lack of CRM and standardized processes", "Logistics limited to internal team", "Highly perishable and sensitive products"],
            actions: ["Shift from 'blind' model to active choice list", "Validation of e-commerce model via WhatsApp", "New packaging with tips and recipes (branding)", "Brand strengthening through agroecological communication"],
            results: ["High customer adherence to new choice model", "500% growth in 5 months (800% in 10 months)", "110+ contacts registered in new CRM", "Average Ticket increased by almost 50%"]
        }
    },
    restaurant: {
        pt: {
            title: "Estratégia para Restaurante",
            objective: ["Criar cultura data-driven", "Implementar rotina agile", "Expandir mix de produtos/receitas"],
            scenario: ["Equipe tradicional com pouco foco em dados", "Processos 100% manuais (exceto PDV central)", "Ausência de gestão de custos e alinhamento interno"],
            difficulties: ["Baixo histórico de dados higienizados", "Operação com horários complexos", "Falta de conhecimento técnico da equipe"],
            actions: ["Tradução da gestão técnica para ferramentas visuais", "Acompanhamento semanal com líderes via Kanban", "Padronização de processos e mapeamento de CMV", "Análise de dados para planos de investimento e novos produtos"],
            results: ["110% de aumento das vendas de item após alteração baseada em análise de UI", "Melhor tomada de decisão e aumento da eficiência", "Otimização de cardápio, estoque e melhoria de CMV", "Estratégias claras de posicionamento e crescimento"]
        },
        en: {
            title: "Restaurant Strategy",
            objective: ["Create a data-driven culture", "Implement agile routines", "Expand product/recipe mix"],
            scenario: ["Traditional team with low data focus", "100% manual processes (except central POS)", "Lack of cost management and internal alignment"],
            difficulties: ["Low history of cleaned/organized data", "Complex operational schedules", "Lack of technical knowledge in the team"],
            actions: ["Translation of management language into visual tools", "Weekly leader meetings based on Kanban", "Process standardization and COGS mapping", "Data analysis for investment plans and new products"],
            results: ["110% increase in item sales after UI analysis-based alteration", "Better decision making and increased efficiency", "Optimization of menu, stock, and COGS improvement", "Clear vision for business positioning and growth strategies"]
        }
    },
    superapp: {
        pt: {
            title: "Criação de Super App",
            objective: ["Integrar dados de frota, pessoas e processos", "Garantir controle baseado em evidências"],
            scenario: ["100+ motoristas iniciais (3000+ funcionários no grupo)", "4+ soluções isoladas (ERP, Telemetria, Ponto)", "Sistemas sem modelos exportáveis padronizados"],
            difficulties: ["Falta de integrações entre soluções independentes", "Dados não confiáveis e processos inexistentes", "Baixa cultura de equipe para validações constantes"],
            actions: ["Criação de base única de dados unificada", "Desenvolvimento de wireframes e mockups para validação", "Parceria com treinamento online gamificado", "Acompanhamento com rodadas de validação e feedback real"],
            results: ["Validação do produto 'Ranking' no cliente externo", "Acompanhamento de performance data-driven com motoristas", "Aumento do Happiness Score de 89 para 92", "Redução de reclamações de usuários no atendimento"]
        },
        en: {
            title: "Super App Creation",
            objective: ["Integrate fleet, people, and process data", "Ensure evidence-based control"],
            scenario: ["100+ initial drivers (3000+ total employees)", "4+ isolated solutions (ERP, Telemetry, Time tracking)", "Systems without standardized exportable models"],
            difficulties: ["Lack of integrations between independent solutions", "Unreliable data and non-existent processes", "Low team culture for constant validation"],
            actions: ["Creation of a single unified database", "Wireframe and mockup development for validation", "Partnership with gamified online training", "Follow-up with validation rounds and real feedback"],
            results: ["Product 'Ranking' validation with external client", "Data-driven performance monitoring with drivers", "Happiness Score increase from 89 to 92", "Reduction in user complaints at customer service"]
        }
    },
    hortatruck: {
        pt: {
            title: "Horta Truck: Nova Fonte de Receita",
            objective: ["Criar novas fontes de receita", "Alcançar novos públicos", "Expandir o alcance da marca"],
            scenario: ["Baixo conhecimento inicial da persona", "Operação restrita a vendas online", "Produtos altamente perecíveis e sensíveis"],
            difficulties: ["Dificuldade de percepção de valor (Convencional vs Orgânico)", "Barreiras para experimentação do produto", "Limitações regulatórias para venda em vias públicas"],
            actions: ["Análise de CRM e mapeamento geográfico de personas", "Parcerias estratégicas com condomínios privados", "Colheita presencial (método sacolão convencional)", "Campanhas com influenciadores alinhados à persona"],
            results: ["Aumento de 8% na receita total", "Aquisição de 10% de novos leads e clientes", "Otimização de estoque (uso de excedentes para marketing)", "Novo ponto de retirada para clientes online"]
        },
        en: {
            title: "Horta Truck: New Revenue Stream",
            objective: ["Create new revenue streams", "Reach new audiences", "Expand brand awareness"],
            scenario: ["Low initial persona knowledge", "Operation restricted to online sales", "Highly perishable and sensitive products"],
            difficulties: ["Value perception challenge (Conventional vs Organic)", "Product experimentation barriers", "Regulatory limitations for public street sales"],
            actions: ["CRM analysis and geographic persona mapping", "Strategic partnerships with private condominiums", "In-person 'harvest' (traditional market style)", "Influencer campaigns aligned with the persona"],
            results: ["8% increase in total revenue", "Acquisition of 10% new leads and customers", "Stock optimization (using surplus for marketing)", "New pick-up point for online customers"]
        }
    }
};

const keywordData = [
    {
        category: { pt: "Product e estratégia", en: "Product & Strategy" },
        keywords: [
            {
                name: "Product Management",
                pt: "Liderança da implantação de um produto SaaS de transporte no Grupo CSC, envolvendo mais de 80 profissionais e estruturando processos de ideação, priorização e roadmapping do produto.",
                en: "Led the implementation of a SaaS transportation product at Grupo CSC, involving over 80 professionals and structuring processes for ideation, prioritization, and product roadmapping.",
                source: "Curriculo Renato Moreira 2026"
            },
            {
                name: "Product Strategy",
                pt: "Definição da visão e estratégia do produto ao estruturar soluções internas de transporte e gestão de frota, alinhando tecnologia, operação e necessidades do cliente.",
                en: "Definition of product vision and strategy while structuring internal transportation and fleet management solutions, aligning technology, operations, and customer needs.",
                source: "Curriculo Renato Moreira 2026"
            },
            {
                name: "Product Discovery",
                pt: "Realização de reuniões com equipes e stakeholders para entender necessidades operacionais e mapear problemas antes da criação das soluções de transporte e gestão de frota.",
                en: "Conducted meetings with teams and stakeholders to understand operational needs and map problems before creating transportation and fleet management solutions.",
                source: "Product Experience vAtual"
            },
            {
                name: "Product Roadmap",
                pt: "Gestão do roadmap de produtos internos no Grupo CSC, conectando necessidades de negócio com desenvolvimento de funcionalidades e priorização estratégica.",
                en: "Managed the roadmap for internal products at Grupo CSC, connecting business needs with feature development and strategic prioritization.",
                source: "Curriculo Renato Moreira 2026"
            },
            {
                name: "Stakeholder Management",
                pt: "Alinhamento entre equipes técnicas, gestão, clientes internacionais e operação para implantação do produto SaaS de transporte.",
                en: "Alignment between technical teams, management, international clients, and operations for the implementation of the SaaS transportation product.",
                source: "Product Experience vAtual"
            }
        ]
    },
    {
        category: { pt: "Experiência do usuário e produto", en: "UX & Product Experience" },
        keywords: [
            {
                name: "Customer Journey",
                pt: "Mapeamento e redesenho da jornada do cliente em produto digital para reduzir gargalos e melhorar conversão no projeto da Gestão RJR.",
                en: "Mapping and redesign of the customer journey in a digital product to reduce bottlenecks and improve conversion in the Gestão RJR project.",
                source: "Curriculo Renato Moreira 2026"
            },
            {
                name: "User Experience (UX)",
                pt: "Análise crítica de UX e UI de plataforma e aplicativo para identificar bugs, melhorar usabilidade e orientar evolução do produto.",
                en: "Critical analysis of platform and app UX/UI to identify bugs, improve usability, and guide product evolution.",
                source: "Product Experience vAtual"
            },
            {
                name: "Customer Experience (CX)",
                pt: "Melhoria da experiência operacional e aumento do índice de satisfação interno no sistema de transporte, elevando o happiness score de 88 para 92.",
                en: "Improvement of operational experience and increase in internal satisfaction index in the transportation system, raising the happiness score from 88 to 92.",
                source: "Curriculo Renato Moreira 2026"
            }
        ]
    },
    {
        category: { pt: "Crescimento e validação", en: "Growth & Validation" },
        keywords: [
            {
                name: "Growth Strategy",
                pt: "Expansão da startup Amor e Horta com criação de CRM, novas estratégias de vendas e parcerias, gerando crescimento significativo de clientes e receita.",
                en: "Expansion of the Amor e Horta startup with CRM creation, new sales strategies, and partnerships, generating significant growth in clients and revenue.",
                source: "Product Experience vAtual"
            },
            {
                name: "MVP / Validação",
                pt: "Validação de soluções através de protótipos simples usando planilhas e integrações com Telegram antes da implantação completa de sistemas.",
                en: "Validation of solutions through simple prototypes using spreadsheets and Telegram integrations before full system deployment.",
                source: "Product Experience vAtual"
            },
            {
                name: "Product-Market Fit",
                pt: "Pivotagem do modelo da startup Amor e Horta, alterando o sistema de escolha de produtos para aumentar aderência e recorrência de clientes.",
                en: "Pivot of the Amor e Horta startup model, changing the product selection system to increase customer adherence and recurrence.",
                source: "Product Experience vAtual"
            }
        ]
    },
    {
        category: { pt: "Dados e métricas", en: "Data & Metrics" },
        keywords: [
            {
                name: "Data-Driven Decision Making",
                pt: "Criação de bases de dados e indicadores para apoiar decisões estratégicas em transporte, restaurantes e operações de negócios.",
                en: "Creation of databases and indicators to support strategic decisions in transportation, restaurants, and business operations.",
                source: "Curriculo Renato Moreira 2026"
            },
            {
                name: "KPIs",
                pt: "Definição de indicadores operacionais para monitorar eficiência de transporte, turnos, recursos e desempenho da operação.",
                en: "Definition of operational indicators to monitor transportation efficiency, shifts, resources, and operational performance.",
                source: "Product Experience vAtual"
            },
            {
                name: "OKRs",
                pt: "Aplicação de gestão por objetivos e métricas para alinhar estratégia e execução em projetos e equipes.",
                en: "Application of management by objectives and metrics to align strategy and execution across projects and teams.",
                source: "Curriculo Renato Moreira 2026"
            },
            {
                name: "Business Metrics",
                pt: "Análise de indicadores como ticket médio, vendas recorrentes e receita para direcionar decisões estratégicas na startup Amor e Horta.",
                en: "Analysis of indicators such as average ticket, recurring sales, and revenue to guide strategic decisions at the Amor e Horta startup.",
                source: "Product Experience vAtual"
            }
        ]
    },
    {
        category: { pt: "Negócios e operação", en: "Business & Operations" },
        keywords: [
            {
                name: "Business Strategy",
                pt: "Estruturação da expansão de dois restaurantes de alta gastronomia, incluindo modelo de gestão, análise de rentabilidade e estratégia operacional.",
                en: "Structuring the expansion of two high-end restaurants, including management model, profitability analysis, and operational strategy.",
                source: "Curriculo Renato Moreira 2026"
            },
            {
                name: "Operational Strategy",
                pt: "Criação de processos e padronização operacional em diferentes contextos: transporte, restaurante e startups.",
                en: "Creation of processes and operational standardization in different contexts: transportation, restaurant, and startups.",
                source: "Product Experience vAtual"
            },
            {
                name: "Process Optimization",
                pt: "Mapeamento e melhoria de processos organizacionais e operacionais na empresa Clean Up, aumentando eficiência e padronização.",
                en: "Mapping and improvement of organizational and operational processes at Clean Up, increasing efficiency and standardization.",
                source: "Curriculo Renato Moreira 2026"
            },
            {
                name: "Scalable Operations",
                pt: "Construção de processos estruturados para permitir crescimento de operações com aumento mínimo de recursos.",
                en: "Construction of structured processes to allow operational growth with minimal resource increase.",
                source: "Product Experience vAtual"
            }
        ]
    },
    {
        category: { pt: "Liderança e gestão", en: "Leadership & Management" },
        keywords: [
            {
                name: "Team Leadership",
                pt: "Coordenação direta e indireta de equipes com mais de 50 colaboradores em projetos operacionais e estratégicos.",
                en: "Direct and indirect coordination of teams with over 50 employees in operational and strategic projects.",
                source: "Curriculo Renato Moreira 2026"
            },
            {
                name: "Cross-Functional Leadership",
                pt: "Trabalho conjunto com equipes de tecnologia, operação, gestão e clientes para desenvolvimento e implantação de produtos.",
                en: "Working together with technology, operations, management, and client teams for product development and implementation.",
                source: "Product Experience vAtual"
            },
            {
                name: "Strategic Communication",
                pt: "Tradução de linguagem técnica e operacional para gestores e equipes através de relatórios, planilhas e apresentações estratégicas.",
                en: "Translation of technical and operational language for managers and teams through reports, spreadsheets, and strategic presentations.",
                source: "Product Experience vAtual"
            },
            {
                name: "Problem Solving",
                pt: "Identificação de gargalos operacionais e criação de soluções práticas baseadas em análise de processos e dados.",
                en: "Identification of operational bottlenecks and creation of practical solutions based on process and data analysis.",
                source: "Product Experience vAtual"
            }
        ]
    },
    {
        category: { pt: "Metodologias", en: "Methodologies" },
        keywords: [
            {
                name: "Agile / Scrum",
                pt: "Uso de metodologias ágeis para organizar desenvolvimento de produtos, backlog e acompanhamento de sprints.",
                en: "Use of agile methodologies to organize product development, backlog, and sprint tracking.",
                source: "Curriculo Renato Moreira 2026"
            },
            {
                name: "Lean Startup",
                pt: "Aplicação de testes rápidos e validações antes da implementação completa das soluções de produto.",
                en: "Application of fast tests and validations before full implementation of product solutions.",
                source: "Product Experience vAtual"
            },
            {
                name: "Design Thinking",
                pt: "Utilização de discovery e análise de necessidades do usuário para criação e validação de soluções.",
                en: "Utilization of discovery and user needs analysis for the creation and validation of solutions.",
                source: "Curriculo Renato Moreira 2026"
            },
            {
                name: "Roadmapping",
                pt: "Estruturação de planos de evolução de produtos e priorização de funcionalidades com base em impacto e valor de negócio.",
                en: "Structuring product evolution plans and prioritizing features based on impact and business value.",
                source: "Curriculo Renato Moreira 2026"
            }
        ]
    }
];

// Modal Logic
const modal = document.getElementById('caseModal');
const modalBody = document.getElementById('modalBody');
const closeBtn = document.querySelector('.modal-close');

document.querySelectorAll('.btn-more').forEach(btn => {
    btn.addEventListener('click', () => {
        const caseId = btn.getAttribute('data-case');
        const data = caseData[caseId];
        if (!data) return;

        const content = data[currentLang];
        modalBody.innerHTML = `
            <h2>${content.title}</h2>
            <div class="modal-grid">
                <div class="modal-section">
                    <h4>${currentLang === 'pt' ? 'Objetivos' : 'Objectives'}</h4>
                    <ul>${content.objective.map(i => `<li>${i}</li>`).join('')}</ul>
                </div>
                <div class="modal-section">
                    <h4>${currentLang === 'pt' ? 'Cenário' : 'Scenario'}</h4>
                    <ul>${content.scenario.map(i => `<li>${i}</li>`).join('')}</ul>
                </div>
                <div class="modal-section">
                    <h4>${currentLang === 'pt' ? 'Dificuldades' : 'Difficulties'}</h4>
                    <ul>${content.difficulties.map(i => `<li>${i}</li>`).join('')}</ul>
                </div>
                <div class="modal-section">
                    <h4>${currentLang === 'pt' ? 'Ações' : 'Actions'}</h4>
                    <ul>${content.actions.map(i => `<li>${i}</li>`).join('')}</ul>
                </div>
                <div class="modal-section results-detailed">
                    <h4>${currentLang === 'pt' ? 'Resultados de Impacto' : 'Impact Results'}</h4>
                    <ul>${content.results.map(i => `<li><strong>${i}</strong></li>`).join('')}</ul>
                </div>
            </div>
        `;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
window.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Scroll reveal animations
const revealOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
        }
    });
}, revealOptions);

// Add revealing logic when sections are ready
document.querySelectorAll('section').forEach(section => {
    section.classList.add('reveal');
    observer.observe(section);
});

// Experience Hover Logic
const timelineItems = document.querySelectorAll('.timeline-item');
const expDisplayPanel = document.getElementById('expDisplayPanel');

if (timelineItems.length > 0 && expDisplayPanel) {
    const updateDisplay = (item) => {
        const details = item.querySelector('.experience-details').cloneNode(true);
        details.style.display = 'block';

        // Add fade-in effect
        details.style.opacity = '0';
        expDisplayPanel.innerHTML = '';
        expDisplayPanel.appendChild(details);

        // Trigger reflow
        details.offsetHeight;
        details.style.transition = 'opacity 0.3s ease';
        details.style.opacity = '1';

        timelineItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
    };

    timelineItems.forEach(item => {
        item.addEventListener('mouseenter', () => updateDisplay(item));
        // Also support click for touch devices that don't trigger hover well
        item.addEventListener('click', () => updateDisplay(item));
    });

    // Auto-load first item on desktop
    if (window.innerWidth > 992) {
        updateDisplay(timelineItems[0]);
    }
}

// Keyword Search Logic
const searchInput = document.getElementById('experienceSearch');
const searchSuggestions = document.getElementById('searchSuggestions');
const searchResults = document.getElementById('searchResults');

if (searchInput && searchSuggestions && searchResults) {
    const renderSuggestions = () => {
        searchSuggestions.innerHTML = '';
        keywordData.forEach(cat => {
            const catDiv = document.createElement('div');
            catDiv.className = 'suggestion-category';
            catDiv.innerHTML = `<h4>${cat.category[currentLang]}</h4>`;

            cat.keywords.forEach(kw => {
                const item = document.createElement('div');
                item.className = 'suggestion-item';
                item.innerHTML = `<span>${kw.name}</span><i class="fas fa-arrow-right"></i>`;
                item.onclick = () => selectKeyword(kw);
                catDiv.appendChild(item);
            });
            searchSuggestions.appendChild(catDiv);
        });
    };

    const selectKeyword = (kw) => {
        searchInput.value = kw.name;
        searchSuggestions.classList.remove('active');
        renderResults([kw]);
    };

    const renderResults = (results) => {
        searchResults.innerHTML = '';
        const resultsSection = document.getElementById('search-deep-dive');

        if (results.length > 0) {
            searchResults.classList.add('active');
            resultsSection.classList.add('has-results');
            results.forEach(kw => {
                const card = document.createElement('div');
                card.className = 'result-card';
                card.innerHTML = `
                    <div>
                        <h4>${kw.name}</h4>
                        <p>${kw[currentLang]}</p>
                    </div>
                    <span class="source">${kw.source}</span>
                `;
                searchResults.appendChild(card);
            });

            // Scroll to results after a short delay for rendering
            setTimeout(() => {
                resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);

        } else {
            searchResults.classList.remove('active');
            resultsSection.classList.remove('has-results');
        }
    };

    const handleSearch = (query) => {
        if (!query) {
            searchResults.classList.remove('active');
            return;
        }

        const filtered = [];
        keywordData.forEach(cat => {
            cat.keywords.forEach(kw => {
                if (kw.name.toLowerCase().includes(query.toLowerCase()) ||
                    kw[currentLang].toLowerCase().includes(query.toLowerCase())) {
                    filtered.push(kw);
                }
            });
        });
        renderResults(filtered);
    };

    searchInput.addEventListener('focus', () => {
        renderSuggestions();
        searchSuggestions.classList.add('active');
    });

    searchInput.addEventListener('input', (e) => {
        handleSearch(e.target.value);
        if (e.target.value) {
            searchSuggestions.classList.remove('active');
        } else {
            searchSuggestions.classList.add('active');
        }
    });

    // Close suggestions when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-container')) {
            searchSuggestions.classList.remove('active');
        }
    });
}




