'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.getAttribute("data-filter").toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}


// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    const itemCategories = filterItems[i].dataset.category.split(' ');

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (itemCategories.includes(selectedValue)) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
}


// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    let selectedValue = this.getAttribute("data-filter").toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
}




// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// Function to handle navigation
function handleNavigation(targetPage) {
  for (let i = 0; i < pages.length; i++) {
    if (targetPage === pages[i].dataset.page) {
      pages[i].classList.add("active");
      navigationLinks.forEach(navLink => {
        if (navLink.textContent.trim().toLowerCase() === targetPage.toLowerCase()) {
          navLink.classList.add("active");
        } else {
          navLink.classList.remove("active");
        }
      });
      window.scrollTo(0, 0);
    } else {
      pages[i].classList.remove("active");
    }
  }
}

// Adding click event listeners to navigation links
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    handleNavigation(this.innerHTML.trim().toLowerCase());
  });
}

// Adding click event listeners to portfolio links
const portfolioLinks = document.querySelectorAll(".portfolio-link");

portfolioLinks.forEach(link => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    handleNavigation(targetId);
  });
});

function copyToClipboard(text) {
  // Create a temporary input element
  var tempInput = document.createElement('input');
  tempInput.value = text;
  document.body.appendChild(tempInput);

  // Select the text in the input element
  tempInput.select();
  tempInput.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text to the clipboard
  document.execCommand('copy');

  // Remove the temporary input element
  document.body.removeChild(tempInput);

  // Notify the user
  alert('Email copied to clipboard: ' + text);
}

'use strict';

// Código de tradução 

'use strict';

const translations = {
  "en": {

    // About

    "Sobre mim": "About me",
    "Sou um especialista em ciência de dados com habilidades avançadas em Python, C, Fortran e ferramentas como PostgreSQL e Power BI.": "I am a data science specialist with advanced skills in Python, C, Fortran, and tools like PostgreSQL and Power BI.",
    "Minha abordagem orientada por dados resolve eficientemente problemas complexos em projetos como criptografia e análise de eletricidade.": "My data-driven approach efficiently solves complex problems in projects like encryption and electricity analysis.",
    "Tenho experiência em liderar projetos, desenvolvendo um algoritmo AES em C e otimizando o consumo de eletricidade com Python e Power BI.": "I have experience leading projects, developing an AES algorithm in C and optimizing electricity consumption with Python and Power BI.",
    "Busco uma oportunidade desafiadora para aplicar minhas habilidades em ciência de dados e programação, trazendo inovação e eficiência.": "I seek a challenging opportunity to apply my data science and programming skills, bringing innovation and efficiency.",
    "Meu objetivo é alcançar um cargo de liderança, com paixão por aprendizado contínuo e tecnologia de ponta como meu principal diferencial.": "My goal is to reach a leadership role, with a passion for continuous learning and cutting-edge technology as my key differentiator.",

    
    "O que eu estou estudando": "What i'm studying",
    "Ciência de Dados": "Data Science",
    "As soluções de ciência de dados mais modernas e de alta qualidade, criadas em um nível profissional.": "The most modern and high-quality data science solutions created at a professional level.",
    "Aprendizado de Máquina": "Machine Learning",
    "Soluções de aprendizado de máquina habilmente elaboradas, entregues com excelência profissional.": "Expertly crafted machine learning solutions, delivered with professional excellence.",
    "Integração de IA": "AI Integration",
    "Integração de IA personalizada para funcionalidade superior do sistema.": "Tailored AI integration for superior system functionality.",
    "Algoritmo Matemático": "Math Algorithm",
    "Soluções de algoritmos matemáticos de ponta, entregues com precisão especializada.": "Cutting-edge mathematical algorithm solutions delivered with expert precision.",

    //Resume

    "O que eu faço": "What i'm doing",
    "Ciência de Dados": "Data Science",
    "As soluções de ciência de dados mais modernas e de alta qualidade, criadas em um nível profissional.": "The most modern and high-quality data science solutions created at a professional level.",
    "Aprendizado de Máquina": "Machine Learning",
    "Soluções de aprendizado de máquina habilmente elaboradas, entregues com excelência profissional.": "Expertly crafted machine learning solutions, delivered with professional excellence.",
    "Integração de IA": "AI Integration",
    "Integração de IA personalizada para funcionalidade superior do sistema.": "Tailored AI integration for superior system functionality.",
    "Algoritmo Matemático": "Math Algorithm",
    "Soluções de algoritmos matemáticos de ponta, entregues com precisão especializada.": "Cutting-edge mathematical algorithm solutions delivered with expert precision.",

    "Educação": "Education",
    "Faculdade de Tecnologia do Estado de São Paulo (Fatec)": "Faculdade de Tecnologia do Estado de São Paulo (Fatec)",
    "Como um aluno destacado na Unisantos, decidi me inscrever simultaneamente no programa de Análise e Desenvolvimento de Sistemas da Fatec. Isso me permitiu utilizar minhas noites livres de forma eficaz e acelerar minha linha do tempo de graduação na Unisantos.": "As a standout student at Unisantos, I decided to simultaneously enroll in Fatec's Analysis and Systems Development program. This allowed me to utilize my free evenings effectively and accelerate my graduation timeline at Unisantos.",
    "Universidade Católica de Santos (Unisantos)": "Universidade Católica de Santos (Unisantos)",
    "Me inscrevi no programa de Bacharelado em Ciência da Computação na Unisantos logo após sair da USP. Desde o início, tenho sido um aluno destacado, me destacando em meus estudos e aproveitando todas as oportunidades para aprofundar meus conhecimentos e habilidades na área.": "I enrolled in the Bachelor's program in Computer Science at Unisantos shortly after leaving USP. From the beginning, I have been a standout student, excelling in my studies and embracing every opportunity to deepen my knowledge and skills in the field.",
    "Universidade de São Paulo (USP)": "Universidade de São Paulo (USP)",
    "Me inscrevi no programa de Bacharelado em Física, onde aprendi sobre metodologia científica e matemática avançada, e tive meu primeiro contato com programação. Embora tenha pausado meus estudos em Física, isso me permitiu abraçar totalmente a programação.": "I enrolled in the Bachelor's program in Physics, where I learned about scientific methodology and advanced mathematics, and had my first encounter with programming. Although I paused my studies in Physics, this allowed me to fully embrace programming.",
    "Experiência": "Experience",
    "Assistente de Análise de Dados": "Data Analysis Assistant",
    "Sou especializado em automação de tarefas, criação avançada de planilhas e extração de dados": "I specialize in task automation, advanced spreadsheet creation, and data extraction",
    "Sou responsável por gerar relatórios detalhados de análise de desempenho usando o Google Analytics, com foco em resultados de marketing. Minha experiência inclui integrar sistemas complexos e desenvolver sistemas de previsão de dados para cotações financeiras e marketing, com forte ênfase em PostgreSQL e Python.": "I am responsible for generating detailed performance analysis reports using Google Analytics, with a focus on marketing results. My expertise includes integrating complex systems and developing data forecasting systems for financial quotes and marketing, with a strong emphasis on PostgreSQL and Python.",
    "Atualmente, estou envolvido em um projeto estratégico para desenvolver um novo sistema, utilizando estruturas Docker para integrar dois bancos de dados SQL distintos em uma interface online eficiente. Minhas contribuições são essenciais para a robustez e eficiência do sistema, demonstrando minha capacidade de enfrentar desafios tecnológicos avançados e promover a inovação dentro da organização.": "Currently, I am engaged in a strategic project to develop a new system, utilizing Docker structures to integrate two distinct SQL databases into an efficient online interface. My contributions are essential to the robustness and efficiency of the system, demonstrating my ability to tackle advanced technological challenges and drive innovation within the organization.",
    "Instrutor de Programação": "Programming Instructor",
    "Como": "As a",
    "ensinei jovens mentes a codificar através de aulas envolventes, permitindo-lhes criar projetos e resolver problemas do mundo real.": "I taught young minds coding through engaging lessons, enabling them to create projects and solve real-world problems.",
    "Minhas Habilidades": "My Skills",
    "Inglês": "English",
    "Graduado no CCAA (2018)": "Graduated from CCAA (2018)",
    "Estou familiarizado com o idioma desde jovem, tendo realizado a maior parte dos meus estudos através do consumo de literatura inteiramente em": "I have been familiar with the language from a young age, having pursued most of my studies through consuming literature entirely in",
    "Python": "Python",
    "Ciência de Dados e Aprendizado de Máquina": "Data Science and Machine Learning",
    "Integração e Desenvolvimento de API": "API Integration and Development",
    "Automação e Scripting": "Automation and Scripting",
    "NumPy e Pandas": "NumPy and Pandas",
    "Uso Python para automação de tarefas, extração de dados e manipulação de conjuntos de dados. Aprendi Python na USP, desenvolvendo algoritmos para resolução de problemas matemáticos.": "I use Python for task automation, data extraction, and dataset manipulation. I learned Python at USP, developing algorithms for mathematical problem-solving.",
    "PostgreSQL": "PostgreSQL",
    "Modelagem de Dados": "Data Modeling",
    "Ajuste e Desempenho": "Tuning and Performance",
    "Integração com Power BI": "Power BI Integration",
    "Realizo manipulações de banco de dados para obter parâmetros específicos e atualmente estou desenvolvendo um novo sistema usando Docker para integrar dois bancos de dados SQL distintos em uma interface online eficiente.": "I perform database manipulations to obtain specific parameters, and I am currently developing a new system using Docker to integrate two distinct SQL databases into an efficient online interface.",
    "Power BI": "Power BI",
    "Importação e Transformação de Dados": "Data Import and Transformation",
    "Modelagem de Dados": "Data Modeling",
    "Painéis e Relatórios": "Dashboards and Reports",
    "Desenvolvo painéis interativos e gero insights acionáveis usando Power BI. Esses painéis permitem o monitoramento em tempo real do consumo de eletricidade com gráficos dinâmicos para fácil interpretação dos dados. Também são produzidos relatórios detalhados com recomendações práticas para otimizar o consumo de eletricidade.": "I develop interactive dashboards and generate actionable insights using Power BI. These dashboards allow real-time monitoring of electricity consumption with dynamic charts for easy data interpretation. Detailed reports with practical recommendations for optimizing electricity consumption are also produced.",
    "C": "C",
    "Structs": "Structs",
    "Árvores": "Trees",
    "Grafos": "Graphs",
    "Desenvolvi um algoritmo de criptografia AES": "I developed an AES",
    " em C, utilizando estruturas de dados, condicionais, loops, manipulações de matrizes, operações bit a bit, manipulação de buffers, gerenciamento de memória dinâmica e técnicas de otimização de desempenho.": "encryption algorithm in C, utilizing data structures, conditionals, loops, matrix manipulations, bitwise operations, buffer handling, dynamic memory management, and performance optimization techniques.",
    "HTML/CSS/JavaScript": "HTML/CSS/JavaScript",
    "API de armazenamento local e de sessão": "Local and session storage API",
    "Transições e animações": "Transitions and animations",
    "Modularização": "Modularization",
    "Criei um frontend interativo com HTML, CSS e JavaScript para criptografar/descriptografar mensagens. Este projeto envolveu manipulação do DOM, validação de dados, manipulação de eventos e atualizações dinâmicas, demonstrando minhas habilidades. Também construí esta página para exibir meus principais projetos.": "I created an interactive frontend with HTML, CSS, and JavaScript for encrypting/decrypting messages. This project involved DOM manipulation, data validation, event handling, and dynamic updates, showcasing my skills. I also built this page to display my key projects.",
    "Excel": "Excel",
    "Tabelas Dinâmicas": "Pivot Tables",
    "Obter & Transformar Dados": "Get & Transform Data",
    "Gráficos Avançados": "Advanced Charts",
    "Uso Excel para análise avançada de dados, incluindo tabelas dinâmicas, transformação de dados e gráficos avançados. Automatizo tarefas, crio relatórios detalhados de desempenho e visualizo dados de forma eficaz. Minhas habilidades garantem um manuseio eficiente de dados e relatórios informativos.": "I use Excel for advanced data analysis, including pivot tables, data transformation, and advanced charting. I automate tasks, create detailed performance reports, and visualize data effectively. My skills ensure efficient data handling and insightful reporting.",

    //Personal portfolio

    "Este site serve como meu portfólio pessoal, construído com HTML/CSS/JavaScript e Node.js para configuração de email. Nossa navegação no portfólio oferece uma experiência intuitiva, permitindo fácil exploração de projetos e seções. Aqui está uma visão concisa de sua estrutura e funcionalidade:": "This site serves as my personal portfolio, built with HTML/CSS/JavaScript, and Node.js for email configuration. Our portfolio navigation provides an intuitive experience, enabling easy exploration of projects and sections. Here's a concise overview of its structure and functionality:",
    "HTML/CSS/JavaScript": "HTML/CSS/JavaScript",
    "Utilizado para o design e funcionalidade do front-end.": "Utilized for the front-end design and functionality.",
    "Node.js": "Node.js",
    "Configurado para lidar com comunicações por email.": "Configured for handling email communications.",
    "Navegação Intuitiva": "Intuitive Navigation",
    "Facilita a movimentação fluida entre diferentes projetos e seções, garantindo uma experiência eficiente e amigável.": "Facilitates seamless movement between different projects and sections, ensuring an efficient and user-friendly experience.",
    "Estrutura de Navegação do Portfólio": "Portfolio Navigation Structure",
    "Links de Navegação": "Navigation Links",
    "Cada link possui um atributo data-nav-link para fácil identificação e manipulação via JavaScript.": "Each link has a data-nav-link attribute for easy identification and manipulation via JavaScript.",
    "Seções da Página": "Page Sections",
    "As seções são identificadas pelo atributo data-page para alternância eficiente.": "Sections are identified by the data-page attribute for efficient toggling.",
    "Função de Navegação": "Navigation Function",
    "A função handleNavigation compara o link clicado com as seções, ativa a seção correspondente adicionando a classe active e rola para o topo.": "The handleNavigation function compares the clicked link with the sections, activates the corresponding section by adding the active class, and scrolls to the top.",
    "Eventos de Clique nos Links de Navegação": "Click Events on Navigation Links",
    "Os listeners de eventos são adicionados aos links de navegação para chamar a função handleNavigation com o identificador da página correspondente ao ser clicado.": "Event listeners are added to navigation links to call the handleNavigation function with the corresponding page identifier when clicked.",
    "Links do Portfólio": "Portfolio Links",
    "Os links do portfólio têm funcionalidade de navegação semelhante, evitando o recarregamento padrão da página e chamando a função de navegação com o ID da seção alvo.": "Portfolio links have similar navigation functionality, preventing default page reload and calling the navigation function with the target section ID.",
    "Análise de Código (script.js)": "Code Analysis (script.js)",
    "Função de Alternância de Elementos": "Element Toggle Function",
    "Alterna a classe active nos elementos.": "Toggles the active class on elements.",
    "Alternância da Barra Lateral": "Sidebar Toggle",
    "Alterna a visibilidade da barra lateral no mobile.": "Toggles the sidebar visibility on mobile.",
    "Modal de Depoimentos": "Testimonials Modal",
    "Abre e fecha o modal com depoimentos.": "Opens and closes modal with testimonials.",
    "Seleção Personalizada": "Custom Select",
    "Gerencia a seleção de dropdown personalizada.": "Manages custom dropdown selection.",
    "Função de Filtro": "Filter Function",
    "Filtra itens do portfólio com base na categoria selecionada.": "Filters portfolio items based on selected category.",
    "Validação de Formulário": "Form Validation",
    "Valida entradas do formulário de contato em tempo real.": "Validates contact form inputs in real-time.",
    "Navegação da Página": "Page Navigation",
    "Lida com a navegação entre diferentes seções da página.": "Handles navigation between different sections of the page.",
    "Análise de Código (server.js)": "Code Analysis (server.js)",
    "Configuração do Express": "Express Setup",
    "Configura o servidor Express com body-parser para lidar com dados de formulário.": "Configures the Express server with body-parser for handling form data.",
    "Configuração do Nodemailer": "Nodemailer Setup",
    "Configura o Nodemailer para enviar emails via Gmail.": "Configures Nodemailer to send emails via Gmail.",
    "Endpoint de Envio de Email": "Send Email Endpoint",
    "Lida com solicitações POST para enviar emails.": "Handles POST requests to send emails.",

    //energy data analysis

    "análise de dados de energia": "energy data analysis",
    "repositório": "repository",
    "Coleta e Processamento de Dados": "Data Collection and Processing",
    "Neste projeto, o processo de coleta e processamento de dados foi crucial para garantir a qualidade e integridade dos dados utilizados. Utilizando a biblioteca Python Pandas, realizamos a limpeza e preparação dos dados, que incluiu a remoção de valores nulos e a padronização das unidades de medida. Esta etapa é fundamental para garantir que os dados estejam prontos para análises mais complexas e visualizações precisas no Power BI.": "In this project, the process of data collection and processing was crucial to ensure the quality and integrity of the data used. Utilizing the Python Pandas library, we performed data cleaning and preparation, which included removing null values and standardizing measurement units. This step is fundamental to ensure that the data is ready for more complex analyses and accurate visualizations in Power BI.",
    "Análise Exploratória de Dados": "Exploratory Data Analysis",
    "A análise exploratória de dados foi conduzida para obter uma melhor compreensão das características dos dados. Utilizamos técnicas estatísticas e ferramentas de visualização, como Matplotlib e Seaborn, para criar gráficos detalhados, como histogramas e gráficos de dispersão. Essas visualizações nos ajudaram a identificar padrões, tendências e possíveis anomalias nos dados, facilitando uma compreensão mais profunda das variáveis em estudo.": "Exploratory data analysis was conducted to gain a better understanding of the data's characteristics. We used statistical techniques and visualization tools such as Matplotlib and Seaborn to create detailed graphs, such as histograms and scatter plots. These visualizations helped us identify patterns, trends, and potential anomalies in the data, facilitating a deeper understanding of the variables under study.",
    "Desenvolvimento de Dashboards Interativos": "Development of Interactive Dashboards",
    "Uma das principais ferramentas utilizadas foi o Power BI, que permitiu a criação de dashboards interativos e visualmente atraentes. No Power BI, configuramos relacionamentos entre tabelas usando chaves compostas e desenvolvemos visualizações dinâmicas que permitem aos usuários explorar os dados de diferentes perspectivas. Por exemplo, gráficos de linha mostraram tendências de consumo ao longo do tempo, enquanto mapas de calor visualizaram dados geograficamente.": "One of the main tools used was Power BI, which allowed the creation of interactive and visually appealing dashboards. In Power BI, we configured relationships between tables using composite keys and developed dynamic visualizations that enable users to explore the data from different perspectives. For instance, line charts showed consumption trends over time, while heat maps visualized data geographically.",
    "Realizamos comparações entre diferentes tipos de energia": "We conducted comparisons between different types of energy ",
    "renovável e não renovável,": "renewable and non-renewable,",
    " regiões geográficas e períodos de tempo. ": "geographical regions, and time periods.",
    "Usando gráficos de barras e box plots, destacamos diferenças no consumo de energia entre vários países e setores. Essas comparações ajudaram a identificar áreas de preocupação e oportunidades para melhorar a eficiência energética.": "Using bar charts and box plots, we highlighted differences in energy consumption among various countries and sectors. These comparisons helped identify areas of concern and opportunities to improve energy efficiency.",
    "Previsão de Dados": "Data Prediction",
    "Implementamos modelos de regressão linear em Python para prever tendências futuras de consumo de energia com base em dados históricos. Usando bibliotecas como Scikit-learn, criamos modelos preditivos que estimam o consumo de energia para os próximos anos. Essas previsões são visualizadas no Power BI, proporcionando uma visão clara das expectativas de demanda futura de energia.": "We implemented linear regression models in Python to predict future energy consumption trends based on historical data. Using libraries such as Scikit-learn, we created predictive models that estimate energy consumption for the coming years. These predictions are visualized in Power BI, providing a clear view of future energy demand expectations.",
    "Uso de Diferentes Conjuntos de Dados": "Use of Different Data Sets",
    "Para enriquecer a análise, integramos dados econômicos e demográficos, como PIB e população, com dados de consumo de energia. Esta abordagem nos permitiu correlacionar o desenvolvimento econômico com as práticas energéticas e entender como as tendências econômicas influenciam o consumo de energia.": "To enrich the analysis, we integrated economic and demographic data, such as GDP and population, with energy consumption data. This approach allowed us to correlate economic development with energy practices and understand how economic trends influence energy consumption.",
    "Recomendações para Melhoria": "Recommendations for Improvement",
    "Com base nas análises realizadas, propusemos várias medidas para melhorar a transparência e acessibilidade dos dados de energia. Sugerimos a padronização dos formatos de dados, o uso de tecnologias de Big Data e Machine Learning, e a implementação de políticas públicas que incentivem o uso de fontes renováveis. Essas recomendações visam promover uma gestão energética mais eficiente e sustentável.": "Based on the analyses conducted, we proposed several measures to improve the transparency and accessibility of energy data. We suggested standardizing data formats, using Big Data and Machine Learning technologies, and implementing public policies that encourage the use of renewable sources. These recommendations aim to foster more efficient and sustainable energy management.",
    "Dashboard": "Dashboard",
    "Ferramentas Utilizadas": "Tools Used",
    "Python": "Python",
    "Usado para coleta de dados, processamento e análise exploratória. Bibliotecas como Pandas, NumPy, Matplotlib e Seaborn foram essenciais.": "Used for data collection, processing, and exploratory analysis. Libraries such as Pandas, NumPy, Matplotlib, and Seaborn were essential.",
    "Power BI": "Power BI",
    "A principal ferramenta para criar dashboards interativos e visualizações avançadas.": "The main tool for creating interactive dashboards and advanced visualizations.",
    "Scikit-learn": "Scikit-learn",
    "Usado para implementar modelos preditivos de machine learning.": "Used for implementing predictive machine learning models.",

    //AES encrypt and decrypt

    "Visão Geral do Projeto": "Project Overview",
    "Neste projeto, desenvolvemos um algoritmo de criptografia avançado usando AES": "In this project, we developed an advanced encryption algorithm using AES ",
    "(Advanced Encryption Standard) em C,": "(Advanced Encryption Standard) in C,",
    "implementamos uma estrutura de dados funcional e criamos um frontend interativo com HTML, CSS e JavaScript. O projeto também envolveu o desenvolvimento de uma API PHP simples e eficaz para lidar com a comunicação entre o frontend e o algoritmo de criptografia AES. Este trabalho demonstra a capacidade de lidar com criptografia avançada, otimização de código e implementação eficiente de algoritmos de segurança.": "implemented a functional data structure, and created an interactive frontend with HTML, CSS, and JavaScript. The project also involved developing a simple and effective PHP API to handle communication between the frontend and the AES encryption algorithm. This work demonstrates the capability to handle advanced encryption, code optimization, and efficient implementation of security algorithms.",
    "Algoritmo de Criptografia em C": "Encryption Algorithm in C",
    "Desenvolvimento de Algoritmo": "Algorithm Development",
    "Implementamos a criptografia AES em C, incorporando expansão de chave, substituições baseadas em tabela e operações XOR.": "Implemented AES encryption in C, incorporating key expansion, table-based substitutions, and XOR operations.",
    "Estruturas de Dados": "Data Structures",
    "Utilizamos estruturas de dados eficientes, declarações condicionais, loops, manipulações de arrays, operações bit a bit, manipulações de buffers, gerenciamento dinâmico de memória e técnicas de otimização de desempenho.": "Utilized efficient data structures, conditional statements, loops, array manipulations, bitwise operations, buffer manipulations, dynamic memory management, and performance optimization techniques.",
    "Funcionalidade": "Functionality",
    "Desenvolvemos funções para inicializar a pilha, verificar se a pilha está vazia, empurrar elementos para a pilha e retirar elementos da pilha.": "Developed functions for initializing the stack, checking if the stack is empty, pushing elements onto the stack, and popping elements from the stack.",
    "Manipulação de Arquivos": "File Handling",
    "Criamos funções para carregar o labirinto de um arquivo e validá-lo para garantir a formatação correta e a presença de caracteres válidos.": "Created functions to load the maze from a file and validate it to ensure correct formatting and the presence of valid characters.",
    "Exploração de Labirinto": "Maze Exploration",
    "Implementamos um algoritmo de busca em profundidade usando uma pilha para explorar o labirinto a partir de uma posição inicial, marcando caminhos e encontrando a saída.": "Implemented a depth-first search algorithm using a stack to explore the maze from a starting position, marking paths, and finding the exit.",
    "Função de Exibição": "Display Function",
    "Desenvolvemos uma função para limpar o console e exibir o estado atual do labirinto, marcando os caminhos explorados e o ponto de saída.": "Developed a function to clear the console and display the current state of the maze, marking explored paths and the exit point.",
    "Desenvolvimento de Frontend Interativo": "Interactive Frontend Development",
    "HTML/CSS/JavaScript": "HTML/CSS/JavaScript",
    "Criamos um frontend interativo que permite aos usuários inserir uma mensagem para criptografar ou descriptografar, com opções selecionadas através de um menu dropdown.": "Built an interactive frontend that allows users to input a message to encrypt or decrypt, with options selected through a dropdown menu.",
    "Manipulação de Formulários": "Form Handling",
    "Implementamos formulários para entrada do usuário, manipulação do DOM, validação de entrada, manipulação de eventos e atualizações de conteúdo dinâmico.": "Implemented forms for user input, DOM manipulation, input validation, event handling, and dynamic content updates.",
    "Design Responsivo": "Responsive Design",
    "Garantimos que a interface seja intuitiva e responsiva, adaptando-se a diferentes dispositivos, como tablets, telefones móveis e computadores.": "Ensured the interface is intuitive and responsive, adapting to different devices such as tablets, mobile phones, and computers.",
    "Desenvolvimento de API em PHP": "API Development in PHP",
    "Interface de Comunicação": "Communication Interface",
    "Criamos uma API PHP para facilitar a comunicação entre o frontend e o algoritmo de criptografia AES baseado em C.": "Created a PHP API to facilitate communication between the frontend and the C-based AES encryption algorithm.",
    "Endpoints RESTful": "RESTful Endpoints",
    "Desenvolvemos endpoints RESTful para lidar com solicitações HTTP, entrada e processamento de dados de saída.": "Developed RESTful endpoints to handle HTTP requests, input, and output data processing.",
    "Função de Execução": "Execution Function",
    "Utilizamos a função `exec` em PHP para executar comandos no servidor, acionando os processos de criptografia e descriptografia AES.": "Utilized the `exec` function in PHP to execute commands on the server, triggering the AES encryption and decryption processes.",
    "Respostas JSON": "JSON Responses",
    "Fornecemos respostas JSON bem estruturadas para fácil integração com o frontend, incluindo resultados de criptografia, texto de entrada, chave de criptografia e ação realizada.": "Provided well-structured JSON responses for easy integration with the frontend, including encryption results, input text, encryption key, and action performed.",
    "Este projeto envolveu o desenvolvimento de um algoritmo de criptografia avançado usando AES": "This project involved developing an advanced encryption algorithm using AES ",
    "(Advanced Encryption Standard) em C.": "(Advanced Encryption Standard) in C.",
    "A implementação incluiu estruturas de dados eficientes, otimização de desempenho e o manuseio de técnicas avançadas de criptografia. Um frontend interativo foi criado usando HTML, CSS e JavaScript, permitindo que os usuários criptografassem ou descriptografassem mensagens com facilidade. Além disso, uma API PHP foi desenvolvida para facilitar a comunicação entre o frontend e o algoritmo AES. Este projeto demonstra habilidades em criptografia, desenvolvimento de frontend e integração de backend, destacando a capacidade de implementar e otimizar algoritmos de segurança de forma eficaz.": "The implementation included efficient data structures, performance optimization, and handling advanced encryption techniques. An interactive frontend was created using HTML, CSS, and JavaScript, allowing users to encrypt or decrypt messages with ease. Additionally, a PHP API was developed to facilitate communication between the frontend and the AES algorithm. This project showcases skills in encryption, frontend development, and backend integration, highlighting the ability to implement and optimize security algorithms effectively.",

    // Cesar Cipher encrypt and decrypt

    "Cifra de Cesar": "Cesar Cipher",
    "repositório": "repository",
    "Visão Geral do Projeto": "Project Overview",
    "Este projeto foca na criptografia e descriptografia de mensagens usando um algoritmo simples semelhante à Cifra de César implementado em Python. O processo de criptografia envolve gerar uma chave aleatória para cada caractere na mensagem de entrada, enquanto o processo de descriptografia requer a chave correta para recuperar a mensagem original. Este projeto demonstra habilidades em manipulação de strings, geração de números aleatórios e princípios básicos de criptografia.": "This project focuses on encrypting and decrypting messages using a simple Caesar Cipher-like algorithm implemented in Python. The encryption process involves generating a random key for each character in the input message, while the decryption process requires the correct key to retrieve the original message. This project demonstrates skills in string manipulation, random number generation, and basic cryptography principles.",
    "Processo de Criptografia": "Encryption Process",
    "Mensagem de Entrada": "Input Message",
    "O usuário insere a mensagem a ser criptografada.": "The user inputs the message to be encrypted.",
    "Lista de Caracteres": "Character List",
    "A mensagem de entrada é convertida em uma lista de caracteres.": "The input message is converted into a list of characters.",
    "Geração de Chaves": "Key Generation",
    "Uma chave aleatória é gerada para cada caractere dentro de um intervalo especificado": "A random key is generated for each character within a specified range ",
    "0-100": "0-100",
    "Criptografia": "Encryption",
    "O valor ASCII de cada caractere é incrementado pelo valor da chave correspondente, resultando em uma mensagem criptografada.": "Each character's ASCII value is incremented by its corresponding key value, resulting in an encrypted message.",
    "Mensagem Criptografada de Saída": "Output Encrypted Message",
    "A mensagem criptografada e a chave usada são impressas.": "The encrypted message and the key used are printed.",
    "Processo de Descriptografia": "Decryption Process",
    "Mensagem Criptografada de Entrada": "Input Encrypted Message",
    "O usuário insere a mensagem criptografada como uma lista de inteiros.": "The user inputs the encrypted message as a list of integers.",
    "Chave de Entrada": "Input Key",
    "O usuário insere a chave usada durante a criptografia como uma lista de inteiros.": "The user inputs the key used during encryption as a list of integers.",
    "Descriptografia": "Decryption",
    "O valor de cada caractere criptografado é decrementado pelo valor da chave correspondente para recuperar o valor ASCII original.": "Each encrypted character's value is decremented by its corresponding key value to retrieve the original ASCII value.",
    "Mensagem Descriptografada de Saída": "Output Decrypted Message",
    "A mensagem descriptografada é impressa, restaurando a mensagem de entrada original.": "The decrypted message is printed, restoring the original input message.",
    "Resumo": "Summary",
    "Este projeto envolveu o desenvolvimento de um algoritmo simples de criptografia e descriptografia usando Python. O processo de criptografia utilizou a geração de chaves aleatórias e a manipulação de valores ASCII para proteger a mensagem, enquanto o processo de descriptografia exigiu a chave correta para recuperar a mensagem original. Este projeto demonstra habilidades em programação Python, manipulação de strings, geração de números aleatórios e criptografia básica.": "This project involved developing a simple encryption and decryption algorithm using Python. The encryption process utilized random key generation and ASCII value manipulation to secure the message, while the decryption process required the correct key to retrieve the original message. This project showcases skills in Python programming, string manipulation, random number generation, and basic cryptography.",

    //Booking System

    "Sistema de Reservas": "Booking System",
    "Arquitetura do Sistema": "System Architecture",
    "Este projeto foi centrado no desenvolvimento estratégico de um novo sistema projetado para integrar dois bancos de dados SQL distintos em uma interface online perfeita usando contêineres Docker. O principal objetivo era criar um sistema robusto e eficiente capaz de lidar com a integração de dados complexos e fornecer uma interface amigável para os usuários finais.": "This project was centered around the strategic development of a new system designed to integrate two distinct SQL databases into a seamless online interface using Docker containers. The main objective was to create a robust and efficient system capable of handling complex data integration and providing a user-friendly interface for end-users.",
    "Visão Geral do Projeto": "Project Overview",
    "Contêineres Docker": "Docker Containers",
    "Utilizamos Docker para containerizar toda a aplicação, garantindo consistência em diferentes ambientes e simplificando o processo de implantação. Cada banco de dados e serviço funcionava em seu próprio contêiner isolado, aumentando a segurança e a escalabilidade.": "Utilized Docker to containerize the entire application, ensuring consistency across different environments and simplifying the deployment process. Each database and service ran in its own isolated container, enhancing security and scalability.",
    "Microsserviços": "Microservices",
    "Projetamos o sistema usando uma arquitetura de microsserviços para permitir o desenvolvimento, implantação e escalonamento independentes de diferentes componentes. Esta abordagem facilitou a manutenção e as atualizações.": "Designed the system using a microservices architecture to allow independent development, deployment, and scaling of different components. This approach facilitated easier maintenance and updates.",
    "Integração de Bancos de Dados": "Database Integration",
    "Bancos de Dados SQL": "SQL Databases",
    "Integrámos dois bancos de dados SQL distintos, garantindo um fluxo de dados perfeito e a sincronização entre eles. Isso envolveu a escrita de consultas SQL complexas, o gerenciamento de conflitos de dados e a garantia da integridade dos dados.": "Integrated two distinct SQL databases, ensuring seamless data flow and synchronization between them. This involved writing complex SQL queries, handling data conflicts, and ensuring data integrity.",
    "Gerenciamento de Bancos de Dados": "Database Management",
    "Implementamos práticas eficientes de gerenciamento de bancos de dados, incluindo indexação, otimização de consultas e backups regulares para manter alto desempenho e confiabilidade.": "Implemented efficient database management practices, including indexing, query optimization, and regular backups to maintain high performance and reliability.",
    "Interface Online": "Online Interface",
    "Interface do Usuário (UI)": "User Interface (UI)",
    "Desenvolvemos uma interface online responsiva e intuitiva usando tecnologias web modernas": "Developed a responsive and intuitive online interface using modern web technologies ",
    "(por exemplo, HTML, CSS, JavaScript).": "(e.g., HTML, CSS, JavaScript).",
    "A interface permitiu que os usuários interagissem com os bancos de dados integrados sem esforço, proporcionando acesso e atualizações de dados em tempo real.": "The interface allowed users to interact with the integrated databases effortlessly, providing real-time data access and updates.",
    "Integração de Backend": "Backend Integration",
    "Conectamos a interface do frontend com os serviços de backend usando APIs. Isso incluiu a autenticação do usuário, validação de dados e tratamento de erros para garantir uma experiência do usuário sem problemas.": "Connected the frontend interface with the backend services using APIs. This included handling user authentication, data validation, and error handling to ensure a smooth user experience.",
    "Segurança e Conformidade": "Security and Compliance",
    "Segurança de Dados": "Data Security",
    "Garantimos a segurança dos dados por meio de criptografia, controles de acesso seguros e auditorias regulares de segurança. O isolamento de contêineres do Docker também adicionou uma camada extra de segurança.": "Ensured data security through encryption, secure access controls, and regular security audits. Docker’s container isolation also added an extra layer of security.",
    "Conformidade": "Compliance",
    "Aderimos aos padrões e regulamentos da indústria para garantir que o sistema atendesse a todos os requisitos de conformidade, protegendo dados sensíveis e mantendo a confiança dos usuários.": "Adhered to industry standards and regulations to ensure the system met all compliance requirements, protecting sensitive data and maintaining user trust.",
    "Impacto e Inovação": "Impact and Innovation",
    "Minha contribuição foi crítica para tornar o sistema robusto e eficiente, demonstrando a capacidade de enfrentar desafios tecnológicos avançados e impulsionar a inovação dentro da organização. A integração bem-sucedida dos bancos de dados e o desenvolvimento de uma interface amigável melhoraram significativamente a acessibilidade e a usabilidade dos dados, aumentando a eficiência operacional geral.": "My contribution was critical in making the system robust and efficient, demonstrating the ability to tackle advanced technological challenges and drive innovation within the organization. The successful integration of the databases and the development of a user-friendly interface significantly improved data accessibility and usability, enhancing overall operational efficiency.",
    "Para obter mais informações detalhadas sobre este projeto, consulte o Acordo de Confidencialidade (NDA).": "For more detailed information about this project, please refer to the Non-Disclosure Agreement (NDA).",

    //dataframe analysis

    "análise de dataframe": "dataframe analysis",
    "Este projeto envolveu o desenvolvimento de um programa abrangente para gerenciar e analisar dados de produtos agrícolas a partir de um arquivo CSV. O programa, implementado em C, fornece funcionalidade para pesquisar, exibir e analisar dados com base na entrada do usuário, demonstrando habilidades em manipulação de arquivos, estruturas de dados e interação com o usuário em uma interface de linha de comando.": "This project involved developing a comprehensive program to manage and analyze agricultural product data from a CSV file. The program, implemented in C, provides functionality to search, display, and analyze data based on user input, showcasing skills in file handling, data structures, and user interaction in a command-line interface.",
    "Manipulação de Arquivos e Análise de Dados": "File Handling and Data Parsing",
    "Leitura de Arquivos": "File Reading",
    "O programa lê dados de um arquivo CSV": "The program reads data from a CSV file ",
    "(\"Dadoscsv2.csv\") usando funções padrão de I/O em C.": "(\"Dadoscsv2.csv\") using standard I/O functions in C.",
    "Ele lida com possíveis erros na abertura de arquivos e garante que os dados sejam lidos corretamente.": "It handles potential errors in file opening and ensures data is read correctly.",
    "Armazenamento de Dados": "Data Storage",
    "Os dados são armazenados em um array tridimensional, o que permite acesso e manipulação eficientes. O programa tokeniza cada linha do CSV para preencher esse array.": "The data is stored in a three-dimensional array, which allows for efficient access and manipulation. The program tokenizes each line of the CSV to populate this array.",
    "Interação com o Usuário": "User Interaction",
    "Interface de Menu": "Menu Interface",
    "O programa fornece uma interface de menu amigável com opções para exibir todos os produtos, pesquisar por área de cultivo, produção ou pela letra inicial do nome do produto.": "The program provides a user-friendly menu interface with options to display all products, search by cultivation area, production, or by the initial letter of the product name.",
    "Validação de Entrada": "Input Validation",
    "O programa inclui uma validação robusta de entrada para garantir que o usuário forneça entradas válidas para as várias opções de pesquisa.": "The program includes robust input validation to ensure the user provides valid inputs for the various search options.",
    "Funções de Pesquisa e Exibição": "Search and Display Functions",
    "Exibir Todos os Produtos": "Display All Products",
    "Exibe todos os produtos agrícolas, juntamente com suas respectivas áreas e valores de produção, formatados em uma tabela legível.": "Displays all agricultural products, along with their respective areas and production values, formatted in a readable table.",
    "Pesquisar por Área": "Search by Area",
    "Permite que os usuários pesquisem produtos com base na área de cultivo, exibindo os cinco produtos com áreas mais próximas do valor especificado pelo usuário.": "Allows users to search for products based on the cultivation area, displaying the five products with areas closest to the user-specified value.",
    "Pesquisar por Produção": "Search by Production",
    "Permite que os usuários pesquisem produtos por volume de produção, mostrando os cinco produtos com valores de produção mais próximos do valor de entrada.": "Enables users to search for products by production volume, showing the five products with production values nearest to the input value.",
    "Pesquisar por Inicial": "Search by Initial",
    "Os usuários podem pesquisar produtos começando com uma inicial específica, fornecendo uma maneira rápida de filtrar os dados.": "Users can search for products starting with a specific initial, providing a quick way to filter the data.",
    "Implementação Técnica": "Technical Implementation",
    "Conversão de Dados": "Data Conversion",
    "O programa converte dados de string para tipos numéricos apropriados para comparações e cálculos precisos.": "The program converts string data to appropriate numeric types for accurate comparisons and calculations.",
    "Classificação e Filtragem": "Sorting and Filtering",
    "Utiliza algoritmos de classificação e filtragem para identificar e exibir as correspondências mais próximas para pesquisas de área e produção.": "Utilizes sorting and filtering algorithms to identify and display the closest matches for area and production searches.",
    "Gerenciamento Dinâmico de Memória": "Dynamic Memory Management",
    "O uso eficiente de técnicas de gerenciamento de memória garante que o programa funcione sem problemas, mesmo com grandes conjuntos de dados.": "Efficient use of memory management techniques ensures the program runs smoothly even with large datasets.",
    "Resumo para Portfólio": "Summary for Portfolio",
    "Este projeto demonstra expertise em programação em C, especificamente em manipulação de arquivos, análise de dados e interação com o usuário por meio de uma interface de linha de comando. Inclui funcionalidade para ler e processar dados de um arquivo CSV, fornecendo várias opções de pesquisa e exibição ao usuário. As principais características incluem validação robusta de entrada, armazenamento eficiente de dados e gerenciamento dinâmico de memória. Para mais informações detalhadas sobre este projeto, consulte a documentação complementar.": "This project demonstrates expertise in C programming, specifically in file handling, data parsing, and user interaction through a command-line interface. It includes functionality to read and process data from a CSV file, providing various search and display options to the user. Key features include robust input validation, efficient data storage, and dynamic memory management. For more detailed information about this project, please refer to the accompanying documentation.",

    //Maze

    "o labirinto e o rato": "maze and the mouse",
    "repositório": "repository",
    "Visão Geral": "Overview",
    "Este projeto apresenta um programa em C projetado para resolver labirintos usando uma busca em profundidade baseada em pilha": "This project showcases a C program designed to solve mazes using a stack-based depth-first search ",
    "(DFS).": "(DFS) algorithm.",
    "O programa inclui funções para inicializar e manipular uma pilha, carregar e validar um labirinto a partir de um arquivo, explorar o labirinto para encontrar uma saída (representada como queijo 'S') e exibir o labirinto no console. Aqui está um resumo dos componentes principais.": "The program includes functions to initialize and manipulate a stack, load and validate a maze from a file, explore the maze to find an exit (represented as cheese 'S'), and display the maze in the console. Here's a breakdown of the key components.",
    "Operações de Pilha": "Stack Operations",
    "initStack": "initStack",
    "Inicializa a pilha.": "Initializes the stack.",
    "isStackEmpty": "isStackEmpty",
    "Verifica se a pilha está vazia. Retorna 1 se estiver vazia, 0 caso contrário.": "Checks if the stack is empty. Returns 1 if empty, 0 otherwise.",
    "push": "push",
    "Insere um elemento no topo da pilha. Não faz nada se a pilha estiver cheia.": "Inserts an element at the top of the stack. Does nothing if the stack is full.",
    "pop": "pop",
    "Remove e retorna o elemento do topo da pilha. Retorna uma posição inválida (-1, -1) se a pilha estiver vazia.": "Removes and returns the top element of the stack. Returns an invalid position (-1, -1) if the stack is empty.",
    "Carregamento e Validação do Labirinto": "Maze Loading and Validation",
    "loadMaze": "loadMaze",
    "Carrega um labirinto a partir de um arquivo. O formato do arquivo inclui o número de linhas e colunas, seguido pelo layout do labirinto": "Loads a maze from a file. The file format includes the number of rows and columns, followed by the maze layout ",
    "0 para caminho aberto, X para parede, S para queijo": "0 for open path, X for wall, S for cheese",
    "validateMaze": "validateMaze",
    "Garante que o labirinto contenha caracteres válidos (0, X, S) e pelo menos uma saída (S).": "Ensures the maze contains valid characters (0, X, S) and at least one exit (S).",
    "Exploração do Labirinto": "Maze Exploration",
    "exploreMaze": "exploreMaze",
    "Usa uma pilha para realizar uma busca em profundidade a partir de uma posição inicial. Marca o caminho e encontra a saída": "Uses a stack to perform a depth-first search from a starting position. Marks the path and finds the exit ",
    "isValidMove": "isValidMove",
    "Verifica se um movimento para uma posição especificada no labirinto é válido": "Checks if a move to a specified position in the maze is valid",
    "seja um caminho aberto 0 ou o queijo S": "either an open path 0 or the cheese S",
    "findExit": "findExit",
    "Inicia a exploração do labirinto a partir de uma posição inicial determinada para encontrar a saída.": "Initiates maze exploration from a given start position to find the exit.",
    "Função de Exibição": "Display Function",
    "Inicializar Allegro": "Initialize Allegro",
    "Configura a biblioteca Allegro, incluindo a inicialização de display, fila de eventos e add-ons necessários.": "Set up the Allegro library, including initializing display, event queue, and necessary add-ons.",
    "Carregar Recursos": "Load Resources",
    "Carrega imagens, fontes e outros recursos necessários para renderizar o labirinto e os componentes da UI.": "Load images, fonts, and other resources required for rendering the maze and UI components.",
    "Loop de Renderização": "Render Loop",
    "Implementa o loop de renderização principal para desenhar o labirinto, a posição do jogador e outros elementos, atualizando o display em uma taxa de quadros fixa.": "Implement the main rendering loop to draw the maze, player position, and other elements, refreshing the display at a fixed frame rate.",
    "Manipulação de Eventos": "Event Handling",
    "Processa entradas do usuário e eventos como pressionamentos de teclas e solicitações de fechamento de janela dentro do loop de renderização.": "Process user inputs and events such as keyboard presses and window close requests within the rendering loop.",
    "Limpeza": "Clean Up",
    "Libera corretamente os recursos e encerra os componentes do Allegro quando o programa é finalizado.": "Properly release resources and shut down Allegro components when the program exits.",

    //HomePage

    "Página Inicial": "Homepage",
    "Olá! Sou apaixonado por transformar dados em decisões inteligentes e soluções inovadoras.": "Hello! I am passionate about transforming data into intelligent decisions and innovative solutions.",
    "Explore meu portfólio e descubra como posso contribuir para o sucesso do seu projeto.": "Explore my portfolio and discover how I can contribute to the success of your project.",
    "O que estou fazendo": "What I'm doing",
    //"sobre": "about",
    "Saiba mais":"Learn more",
    "mim e minha trajetória" : "me and my journey",
    //"Currículo": "Resume",
    "Confira meu currículo e qualificações.": "Check out my resume and qualifications.",
    //"Portfólio": "Portfolio",
    "Veja alguns dos projetos em que trabalhei.": "See some of the projects I've worked on.",
    //"Contato": "Contact",
    "Entre em contato e vamos discutir suas necessidades.": "Get in touch and let's discuss your needs.",


  },

  "pt": {

    // About

    "About me": "Sobre mim",
    "I am a data science specialist with advanced skills in Python, C, Fortran, and tools like PostgreSQL and Power BI.": "Sou um especialista em ciência de dados com habilidades avançadas em Python, C, Fortran e ferramentas como PostgreSQL e Power BI.",
    "My data-driven approach efficiently solves complex problems in projects like encryption and electricity analysis.": "Minha abordagem orientada por dados resolve eficientemente problemas complexos em projetos como criptografia e análise de eletricidade.",
    "I have experience leading projects, developing an AES algorithm in C and optimizing electricity consumption with Python and Power BI.": "Tenho experiência em liderar projetos, desenvolvendo um algoritmo AES em C e otimizando o consumo de eletricidade com Python e Power BI.",
    "I seek a challenging opportunity to apply my data science and programming skills, bringing innovation and efficiency.": "Busco uma oportunidade desafiadora para aplicar minhas habilidades em ciência de dados e programação, trazendo inovação e eficiência.",
    "My goal is to reach a leadership role, with a passion for continuous learning and cutting-edge technology as my key differentiator.": "Meu objetivo é alcançar um cargo de liderança, com paixão por aprendizado contínuo e tecnologia de ponta como meu principal diferencial.",

    "What i'm studying": "O que eu estou estudando",
    "Data Science": "Ciência de Dados",
    "The most modern and high-quality data science solutions created at a professional level.": "As soluções de ciência de dados mais modernas e de alta qualidade, criadas em um nível profissional.",
    "Machine Learning": "Aprendizado de Máquina",
    "Expertly crafted machine learning solutions, delivered with professional excellence.": "Soluções de aprendizado de máquina habilmente elaboradas, entregues com excelência profissional.",
    "AI Integration": "Integração de IA",
    "Tailored AI integration for superior system functionality.": "Integração de IA personalizada para funcionalidade superior do sistema.",
    "Math Algorithm": "Algoritmo Matemático",
    "Cutting-edge mathematical algorithm solutions delivered with expert precision.": "Soluções de algoritmos matemáticos de ponta, entregues com precisão especializada.",

    //Resume


    "Education": "Educação",
    "Faculdade de Tecnologia do Estado de São Paulo (Fatec)": "Faculdade de Tecnologia do Estado de São Paulo (Fatec)",
    "As a standout student at Unisantos, I decided to simultaneously enroll in Fatec's Analysis and Systems Development program. This allowed me to utilize my free evenings effectively and accelerate my graduation timeline at Unisantos.": "Como um aluno destacado na Unisantos, decidi me inscrever simultaneamente no programa de Análise e Desenvolvimento de Sistemas da Fatec. Isso me permitiu utilizar minhas noites livres de forma eficaz e acelerar minha linha do tempo de graduação na Unisantos.",
    "Universidade Católica de Santos (Unisantos)": "Universidade Católica de Santos (Unisantos)",
    "I enrolled in the Bachelor's program in Computer Science at Unisantos shortly after leaving USP. From the beginning, I have been a standout student, excelling in my studies and embracing every opportunity to deepen my knowledge and skills in the field.": "Me inscrevi no programa de Bacharelado em Ciência da Computação na Unisantos logo após sair da USP. Desde o início, tenho sido um aluno destacado, me destacando em meus estudos e aproveitando todas as oportunidades para aprofundar meus conhecimentos e habilidades na área.",
    "Universidade de São Paulo (USP)": "Universidade de São Paulo (USP)",
    "I enrolled in the Bachelor's program in Physics, where I learned about scientific methodology and advanced mathematics, and had my first encounter with programming. Although I paused my studies in Physics, this allowed me to fully embrace programming.": "Me inscrevi no programa de Bacharelado em Física, onde aprendi sobre metodologia científica e matemática avançada, e tive meu primeiro contato com programação. Embora tenha pausado meus estudos em Física, isso me permitiu abraçar totalmente a programação.",
    "Experience": "Experiência",
    "Data Analysis Assistant": "Assistente de Análise de Dados",
    "I specialize in task automation, advanced spreadsheet creation, and data extraction": "Sou especializado em automação de tarefas, criação avançada de planilhas e extração de dados",
    "I am responsible for generating detailed performance analysis reports using Google Analytics, with a focus on marketing results. My expertise includes integrating complex systems and developing data forecasting systems for financial quotes and marketing, with a strong emphasis on PostgreSQL and Python.": "Sou responsável por gerar relatórios detalhados de análise de desempenho usando o Google Analytics, com foco em resultados de marketing. Minha experiência inclui integrar sistemas complexos e desenvolver sistemas de previsão de dados para cotações financeiras e marketing, com forte ênfase em PostgreSQL e Python.",
    "Currently, I am engaged in a strategic project to develop a new system, utilizing Docker structures to integrate two distinct SQL databases into an efficient online interface. My contributions are essential to the robustness and efficiency of the system, demonstrating my ability to tackle advanced technological challenges and drive innovation within the organization.": "Atualmente, estou envolvido em um projeto estratégico para desenvolver um novo sistema, utilizando estruturas Docker para integrar dois bancos de dados SQL distintos em uma interface online eficiente. Minhas contribuições são essenciais para a robustez e eficiência do sistema, demonstrando minha capacidade de enfrentar desafios tecnológicos avançados e promover a inovação dentro da organização.",
    "Programming Instructor": "Instrutor de Programação",
    "As a": "Como",
    "I taught young minds coding through engaging lessons, enabling them to create projects and solve real-world problems.": " ensinei jovens mentes a codificar através de aulas envolventes, permitindo-lhes criar projetos e resolver problemas do mundo real.",
    "My Skills": "Minhas Habilidades",
    "English": "Inglês",
    "Graduated from CCAA (2018)": "Graduado no CCAA (2018)",
    "I have been familiar with the language from a young age, having pursued most of my studies through consuming literature entirely in": "Estou familiarizado com o idioma desde jovem, tendo realizado a maior parte dos meus estudos através do consumo de literatura inteiramente em",
    "Python": "Python",
    "Data Science and Machine Learning": "Ciência de Dados e Aprendizado de Máquina",
    "API Integration and Development": "Integração e Desenvolvimento de API",
    "Automation and Scripting": "Automação e Scripting",
    "NumPy and Pandas": "NumPy e Pandas",
    "I use Python for task automation, data extraction, and dataset manipulation. I learned Python at USP, developing algorithms for mathematical problem-solving.": "Uso Python para automação de tarefas, extração de dados e manipulação de conjuntos de dados. Aprendi Python na USP, desenvolvendo algoritmos para resolução de problemas matemáticos.",
    "PostgreSQL": "PostgreSQL",
    "Data Modeling": "Modelagem de Dados",
    "Tuning and Performance": "Ajuste e Desempenho",
    "Power BI Integration": "Integração com Power BI",
    "I perform database manipulations to obtain specific parameters, and I am currently developing a new system using Docker to integrate two distinct SQL databases into an efficient online interface.": "Realizo manipulações de banco de dados para obter parâmetros específicos e atualmente estou desenvolvendo um novo sistema usando Docker para integrar dois bancos de dados SQL distintos em uma interface online eficiente.",
    "Power Bi": "Power BI",
    "Data Import and Transformation": "Importação e Transformação de Dados",
    "Data Modeling": "Modelagem de Dados",
    "Dashboards and Reports": "Painéis e Relatórios",
    "I develop interactive dashboards and generate actionable insights using Power BI. These dashboards allow real-time monitoring of electricity consumption with dynamic charts for easy data interpretation. Detailed reports with practical recommendations for optimizing electricity consumption are also produced.": "Desenvolvo painéis interativos e gero insights acionáveis usando Power BI. Esses painéis permitem o monitoramento em tempo real do consumo de eletricidade com gráficos dinâmicos para fácil interpretação dos dados. Também são produzidos relatórios detalhados com recomendações práticas para otimizar o consumo de eletricidade.",
    "C": "C",
    "Structs": "Structs",
    "Trees": "Árvores",
    "Graphs": "Grafos",
    "I developed an AES": "Desenvolvi um algoritmo de criptografia AES",
    "encryption algorithm in C, utilizing data structures, conditionals, loops, matrix manipulations, bitwise operations, buffer handling, dynamic memory management, and performance optimization techniques.": " em C, utilizando estruturas de dados, condicionais, loops, manipulações de matrizes, operações bit a bit, manipulação de buffers, gerenciamento de memória dinâmica e técnicas de otimização de desempenho.",
    "HTML/CSS/JavaScript": "HTML/CSS/JavaScript",
    "Local and session storage API": "API de armazenamento local e de sessão",
    "Transitions and animations": "Transições e animações",
    "Modularization": "Modularização",
    "I created an interactive frontend with HTML, CSS, and JavaScript for encrypting/decrypting messages. This project involved DOM manipulation, data validation, event handling, and dynamic updates, showcasing my skills. I also built this page to display my key projects.": "Criei um frontend interativo com HTML, CSS e JavaScript para criptografar/descriptografar mensagens. Este projeto envolveu manipulação do DOM, validação de dados, manipulação de eventos e atualizações dinâmicas, demonstrando minhas habilidades. Também construí esta página para exibir meus principais projetos.",
    "Excel": "Excel",
    "Pivot Tables": "Tabelas Dinâmicas",
    "Get & Transform Data": "Obter & Transformar Dados",
    "Advanced Charts": "Gráficos Avançados",
    "I use Excel for advanced data analysis, including pivot tables, data transformation, and advanced charting. I automate tasks, create detailed performance reports, and visualize data effectively. My skills ensure efficient data handling and insightful reporting.": "Uso Excel para análise avançada de dados, incluindo tabelas dinâmicas, transformação de dados e gráficos avançados. Automatizo tarefas, crio relatórios detalhados de desempenho e visualizo dados de forma eficaz. Minhas habilidades garantem um manuseio eficiente de dados e relatórios informativos.",

    //Personal portfolio

    "This site serves as my personal portfolio, built with HTML/CSS/JavaScript, and Node.js for email configuration. Our portfolio navigation provides an intuitive experience, enabling easy exploration of projects and sections. Here's a concise overview of its structure and functionality:": "Este site serve como meu portfólio pessoal, construído com HTML/CSS/JavaScript e Node.js para configuração de email. Nossa navegação no portfólio oferece uma experiência intuitiva, permitindo fácil exploração de projetos e seções. Aqui está uma visão concisa de sua estrutura e funcionalidade:",
    "HTML/CSS/JavaScript": "HTML/CSS/JavaScript",
    "Utilized for the front-end design and functionality.": "Utilizado para o design e funcionalidade do front-end.",
    "Node.js": "Node.js",
    "Configured for handling email communications.": "Configurado para lidar com comunicações por email.",
    "Intuitive Navigation": "Navegação Intuitiva",
    "Facilitates seamless movement between different projects and sections, ensuring an efficient and user-friendly experience.": "Facilita a movimentação fluida entre diferentes projetos e seções, garantindo uma experiência eficiente e amigável.",
    "Portfolio Navigation Structure": "Estrutura de Navegação do Portfólio",
    "Navigation Links": "Links de Navegação",
    "Each link has a data-nav-link attribute for easy identification and manipulation via JavaScript.": "Cada link possui um atributo data-nav-link para fácil identificação e manipulação via JavaScript.",
    "Page Sections": "Seções da Página",
    "Sections are identified by the data-page attribute for efficient toggling.": "As seções são identificadas pelo atributo data-page para alternância eficiente.",
    "Navigation Function": "Função de Navegação",
    "The handleNavigation function compares the clicked link with the sections, activates the corresponding section by adding the active class, and scrolls to the top.": "A função handleNavigation compara o link clicado com as seções, ativa a seção correspondente adicionando a classe active e rola para o topo.",
    "Click Events on Navigation Links": "Eventos de Clique nos Links de Navegação",
    "Event listeners are added to navigation links to call the handleNavigation function with the corresponding page identifier when clicked.": "Os listeners de eventos são adicionados aos links de navegação para chamar a função handleNavigation com o identificador da página correspondente ao ser clicado.",
    "Portfolio Links": "Links do Portfólio",
    "Portfolio links have similar navigation functionality, preventing default page reload and calling the navigation function with the target section ID.": "Os links do portfólio têm funcionalidade de navegação semelhante, evitando o recarregamento padrão da página e chamando a função de navegação com o ID da seção alvo.",
    "Code Analysis (script.js)": "Análise de Código (script.js)",
    "Element Toggle Function": "Função de Alternância de Elementos",
    "Toggles the active class on elements.": "Alterna a classe active nos elementos.",
    "Sidebar Toggle": "Alternância da Barra Lateral",
    "Toggles the sidebar visibility on mobile.": "Alterna a visibilidade da barra lateral no mobile.",
    "Testimonials Modal": "Modal de Depoimentos",
    "Opens and closes modal with testimonials.": "Abre e fecha o modal com depoimentos.",
    "Custom Select": "Seleção Personalizada",
    "Manages custom dropdown selection.": "Gerencia a seleção de dropdown personalizada.",
    "Filter Function": "Função de Filtro",
    "Filters portfolio items based on selected category.": "Filtra itens do portfólio com base na categoria selecionada.",
    "Form Validation": "Validação de Formulário",
    "Validates contact form inputs in real-time.": "Valida entradas do formulário de contato em tempo real.",
    "Page Navigation": "Navegação da Página",
    "Handles navigation between different sections of the page.": "Lida com a navegação entre diferentes seções da página.",
    "Code Analysis (server.js)": "Análise de Código (server.js)",
    "Express Setup": "Configuração do Express",
    "Configures the Express server with body-parser for handling form data.": "Configura o servidor Express com body-parser para lidar com dados de formulário.",
    "Nodemailer Setup": "Configuração do Nodemailer",
    "Configures Nodemailer to send emails via Gmail.": "Configura o Nodemailer para enviar emails via Gmail.",
    "Send Email Endpoint": "Endpoint de Envio de Email",
    "Handles POST requests to send emails.": "Lida com solicitações POST para enviar emails.",

    //energy data analysis

    "energy data analysis": "análise de dados de energia",
    "repository": "repositório",
    "Data Collection and Processing": "Coleta e Processamento de Dados",
    "In this project, the process of data collection and processing was crucial to ensure the quality and integrity of the data used. Utilizing the Python Pandas library, we performed data cleaning and preparation, which included removing null values and standardizing measurement units. This step is fundamental to ensure that the data is ready for more complex analyses and accurate visualizations in Power BI.": "Neste projeto, o processo de coleta e processamento de dados foi crucial para garantir a qualidade e integridade dos dados utilizados. Utilizando a biblioteca Python Pandas, realizamos a limpeza e preparação dos dados, que incluiu a remoção de valores nulos e a padronização das unidades de medida. Esta etapa é fundamental para garantir que os dados estejam prontos para análises mais complexas e visualizações precisas no Power BI.",
    "Exploratory Data Analysis": "Análise Exploratória de Dados",
    "Exploratory data analysis was conducted to gain a better understanding of the data's characteristics. We used statistical techniques and visualization tools such as Matplotlib and Seaborn to create detailed graphs, such as histograms and scatter plots. These visualizations helped us identify patterns, trends, and potential anomalies in the data, facilitating a deeper understanding of the variables under study.": "A análise exploratória de dados foi conduzida para obter uma melhor compreensão das características dos dados. Utilizamos técnicas estatísticas e ferramentas de visualização, como Matplotlib e Seaborn, para criar gráficos detalhados, como histogramas e gráficos de dispersão. Essas visualizações nos ajudaram a identificar padrões, tendências e possíveis anomalias nos dados, facilitando uma compreensão mais profunda das variáveis em estudo.",
    "Development of Interactive Dashboards": "Desenvolvimento de Dashboards Interativos",
    "One of the main tools used was Power BI, which allowed the creation of interactive and visually appealing dashboards. In Power BI, we configured relationships between tables using composite keys and developed dynamic visualizations that enable users to explore the data from different perspectives. For instance, line charts showed consumption trends over time, while heat maps visualized data geographically.": "Uma das principais ferramentas utilizadas foi o Power BI, que permitiu a criação de dashboards interativos e visualmente atraentes. No Power BI, configuramos relacionamentos entre tabelas usando chaves compostas e desenvolvemos visualizações dinâmicas que permitem aos usuários explorar os dados de diferentes perspectivas. Por exemplo, gráficos de linha mostraram tendências de consumo ao longo do tempo, enquanto mapas de calor visualizaram dados geograficamente.",
    "Comparison Between Different Aspects": "Comparação Entre Diferentes Aspectos",
    "We conducted comparisons between different types of energy": "Realizamos comparações entre diferentes tipos de energia ",
    "renewable and non-renewable,": "renovável e não renovável,",
    "geographical regions, and time periods.": " regiões geográficas e períodos de tempo. ",
    "Using bar charts and box plots, we highlighted differences in energy consumption among various countries and sectors. These comparisons helped identify areas of concern and opportunities to improve energy efficiency.": "Usando gráficos de barras e box plots, destacamos diferenças no consumo de energia entre vários países e setores. Essas comparações ajudaram a identificar áreas de preocupação e oportunidades para melhorar a eficiência energética.",
    "Data Prediction": "Previsão de Dados",
    "We implemented linear regression models in Python to predict future energy consumption trends based on historical data. Using libraries such as Scikit-learn, we created predictive models that estimate energy consumption for the coming years. These predictions are visualized in Power BI, providing a clear view of future energy demand expectations.": "Implementamos modelos de regressão linear em Python para prever tendências futuras de consumo de energia com base em dados históricos. Usando bibliotecas como Scikit-learn, criamos modelos preditivos que estimam o consumo de energia para os próximos anos. Essas previsões são visualizadas no Power BI, proporcionando uma visão clara das expectativas de demanda futura de energia.",
    "Use of Different Data Sets": "Uso de Diferentes Conjuntos de Dados",
    "To enrich the analysis, we integrated economic and demographic data, such as GDP and population, with energy consumption data. This approach allowed us to correlate economic development with energy practices and understand how economic trends influence energy consumption.": "Para enriquecer a análise, integramos dados econômicos e demográficos, como PIB e população, com dados de consumo de energia. Esta abordagem nos permitiu correlacionar o desenvolvimento econômico com as práticas energéticas e entender como as tendências econômicas influenciam o consumo de energia.",
    "Recommendations for Improvement": "Recomendações para Melhoria",
    "Based on the analyses conducted, we proposed several measures to improve the transparency and accessibility of energy data. We suggested standardizing data formats, using Big Data and Machine Learning technologies, and implementing public policies that encourage the use of renewable sources. These recommendations aim to foster more efficient and sustainable energy management.": "Com base nas análises realizadas, propusemos várias medidas para melhorar a transparência e acessibilidade dos dados de energia. Sugerimos a padronização dos formatos de dados, o uso de tecnologias de Big Data e Machine Learning, e a implementação de políticas públicas que incentivem o uso de fontes renováveis. Essas recomendações visam promover uma gestão energética mais eficiente e sustentável.",
    "Dashboard": "Dashboard",
    "Tools Used": "Ferramentas Utilizadas",
    "Python": "Python",
    "Used for data collection, processing, and exploratory analysis. Libraries such as Pandas, NumPy, Matplotlib, and Seaborn were essential.": "Usado para coleta de dados, processamento e análise exploratória. Bibliotecas como Pandas, NumPy, Matplotlib e Seaborn foram essenciais.",
    "Power BI": "Power BI",
    "The main tool for creating interactive dashboards and advanced visualizations.": "A principal ferramenta para criar dashboards interativos e visualizações avançadas.",
    "Scikit-learn": "Scikit-learn",
    "Used for implementing predictive machine learning models.": "Usado para implementar modelos preditivos de machine learning.",

    //AES encrypt and decrypt

    "Project Overview": "Visão Geral do Projeto",
    "In this project, we developed an advanced encryption algorithm using AES": "Neste projeto, desenvolvemos um algoritmo de criptografia avançado usando AES ",
    "(Advanced Encryption Standard) in C,": "(Advanced Encryption Standard) em C,",
    "implemented a functional data structure, and created an interactive frontend with HTML, CSS, and JavaScript. The project also involved developing a simple and effective PHP API to handle communication between the frontend and the AES encryption algorithm. This work demonstrates the capability to handle advanced encryption, code optimization, and efficient implementation of security algorithms.": "implementamos uma estrutura de dados funcional e criamos um frontend interativo com HTML, CSS e JavaScript. O projeto também envolveu o desenvolvimento de uma API PHP simples e eficaz para lidar com a comunicação entre o frontend e o algoritmo de criptografia AES. Este trabalho demonstra a capacidade de lidar com criptografia avançada, otimização de código e implementação eficiente de algoritmos de segurança.",
    "Encryption Algorithm in C": "Algoritmo de Criptografia em C",
    "Algorithm Development": "Desenvolvimento de Algoritmo",
    "Implemented AES encryption in C, incorporating key expansion, table-based substitutions, and XOR operations.": "Implementamos a criptografia AES em C, incorporando expansão de chave, substituições baseadas em tabela e operações XOR.",
    "Data Structures": "Estruturas de Dados",
    "Utilized efficient data structures, conditional statements, loops, array manipulations, bitwise operations, buffer manipulations, dynamic memory management, and performance optimization techniques.": "Utilizamos estruturas de dados eficientes, declarações condicionais, loops, manipulações de arrays, operações bit a bit, manipulações de buffers, gerenciamento dinâmico de memória e técnicas de otimização de desempenho.",
    "Functionality": "Funcionalidade",
    "Developed functions for initializing the stack, checking if the stack is empty, pushing elements onto the stack, and popping elements from the stack.": "Desenvolvemos funções para inicializar a pilha, verificar se a pilha está vazia, empurrar elementos para a pilha e retirar elementos da pilha.",
    "File Handling": "Manipulação de Arquivos",
    "Created functions to load the maze from a file and validate it to ensure correct formatting and the presence of valid characters.": "Criamos funções para carregar o labirinto de um arquivo e validá-lo para garantir a formatação correta e a presença de caracteres válidos.",
    "Maze Exploration": "Exploração de Labirinto",
    "Implemented a depth-first search algorithm using a stack to explore the maze from a starting position, marking paths, and finding the exit.": "Implementamos um algoritmo de busca em profundidade usando uma pilha para explorar o labirinto a partir de uma posição inicial, marcando caminhos e encontrando a saída.",
    "Display Function": "Função de Exibição",
    "Developed a function to clear the console and display the current state of the maze, marking explored paths and the exit point.": "Desenvolvemos uma função para limpar o console e exibir o estado atual do labirinto, marcando os caminhos explorados e o ponto de saída.",
    "Interactive Frontend Development": "Desenvolvimento de Frontend Interativo",
    "HTML/CSS/JavaScript": "HTML/CSS/JavaScript",
    "Built an interactive frontend that allows users to input a message to encrypt or decrypt, with options selected through a dropdown menu.": "Criamos um frontend interativo que permite aos usuários inserir uma mensagem para criptografar ou descriptografar, com opções selecionadas através de um menu dropdown.",
    "Form Handling": "Manipulação de Formulários",
    "Implemented forms for user input, DOM manipulation, input validation, event handling, and dynamic content updates.": "Implementamos formulários para entrada do usuário, manipulação do DOM, validação de entrada, manipulação de eventos e atualizações de conteúdo dinâmico.",
    "Responsive Design": "Design Responsivo",
    "Ensured the interface is intuitive and responsive, adapting to different devices such as tablets, mobile phones, and computers.": "Garantimos que a interface seja intuitiva e responsiva, adaptando-se a diferentes dispositivos, como tablets, telefones móveis e computadores.",
    "API Development in PHP": "Desenvolvimento de API em PHP",
    "Communication Interface": "Interface de Comunicação",
    "Created a PHP API to facilitate communication between the frontend and the C-based AES encryption algorithm.": "Criamos uma API PHP para facilitar a comunicação entre o frontend e o algoritmo de criptografia AES baseado em C.",
    "RESTful Endpoints": "Endpoints RESTful",
    "Developed RESTful endpoints to handle HTTP requests, input, and output data processing.": "Desenvolvemos endpoints RESTful para lidar com solicitações HTTP, entrada e processamento de dados de saída.",
    "Execution Function": "Função de Execução",
    "Utilized the `exec` function in PHP to execute commands on the server, triggering the AES encryption and decryption processes.": "Utilizamos a função `exec` em PHP para executar comandos no servidor, acionando os processos de criptografia e descriptografia AES.",
    "JSON Responses": "Respostas JSON",
    "Provided well-structured JSON responses for easy integration with the frontend, including encryption results, input text, encryption key, and action performed.": "Fornecemos respostas JSON bem estruturadas para fácil integração com o frontend, incluindo resultados de criptografia, texto de entrada, chave de criptografia e ação realizada.",
    "This project involved developing an advanced encryption algorithm using AES": "Este projeto envolveu o desenvolvimento de um algoritmo de criptografia avançado usando AES ",
    "(Advanced Encryption Standard) in C.": "(Advanced Encryption Standard) em C.",
    "The implementation included efficient data structures, performance optimization, and handling advanced encryption techniques. An interactive frontend was created using HTML, CSS, and JavaScript, allowing users to encrypt or decrypt messages with ease. Additionally, a PHP API was developed to facilitate communication between the frontend and the AES algorithm. This project showcases skills in encryption, frontend development, and backend integration, highlighting the ability to implement and optimize security algorithms effectively.": "A implementação incluiu estruturas de dados eficientes, otimização de desempenho e o manuseio de técnicas avançadas de criptografia. Um frontend interativo foi criado usando HTML, CSS e JavaScript, permitindo que os usuários criptografassem ou descriptografassem mensagens com facilidade. Além disso, uma API PHP foi desenvolvida para facilitar a comunicação entre o frontend e o algoritmo AES. Este projeto demonstra habilidades em criptografia, desenvolvimento de frontend e integração de backend, destacando a capacidade de implementar e otimizar algoritmos de segurança de forma eficaz.",

    // Cesar Cipher encrypt and decrypt

    "Cesar Cipher": "Cifra de Cesar",
    "repository": "repositório",
    "Project Overview": "Visão Geral do Projeto",
    "This project focuses on encrypting and decrypting messages using a simple Caesar Cipher-like algorithm implemented in Python. The encryption process involves generating a random key for each character in the input message, while the decryption process requires the correct key to retrieve the original message. This project demonstrates skills in string manipulation, random number generation, and basic cryptography principles.": "Este projeto foca na criptografia e descriptografia de mensagens usando um algoritmo simples semelhante à Cifra de César implementado em Python. O processo de criptografia envolve gerar uma chave aleatória para cada caractere na mensagem de entrada, enquanto o processo de descriptografia requer a chave correta para recuperar a mensagem original. Este projeto demonstra habilidades em manipulação de strings, geração de números aleatórios e princípios básicos de criptografia.",
    "Encryption Process": "Processo de Criptografia",
    "Input Message": "Mensagem de Entrada",
    "The user inputs the message to be encrypted.": "O usuário insere a mensagem a ser criptografada.",
    "Character List": "Lista de Caracteres",
    "The input message is converted into a list of characters.": "A mensagem de entrada é convertida em uma lista de caracteres.",
    "Key Generation": "Geração de Chaves",
    "A random key is generated for each character within a specified range": "Uma chave aleatória é gerada para cada caractere dentro de um intervalo especificado ",
    "0-100": "0-100",
    "Encryption": "Criptografia",
    "Each character's ASCII value is incremented by its corresponding key value, resulting in an encrypted message.": "O valor ASCII de cada caractere é incrementado pelo valor da chave correspondente, resultando em uma mensagem criptografada.",
    "Output Encrypted Message": "Mensagem Criptografada de Saída",
    "The encrypted message and the key used are printed.": "A mensagem criptografada e a chave usada são impressas.",
    "Decryption Process": "Processo de Descriptografia",
    "Input Encrypted Message": "Mensagem Criptografada de Entrada",
    "The user inputs the encrypted message as a list of integers.": "O usuário insere a mensagem criptografada como uma lista de inteiros.",
    "Input Key": "Chave de Entrada",
    "The user inputs the key used during encryption as a list of integers.": "O usuário insere a chave usada durante a criptografia como uma lista de inteiros.",
    "Decryption": "Descriptografia",
    "Each encrypted character's value is decremented by its corresponding key value to retrieve the original ASCII value.": "O valor de cada caractere criptografado é decrementado pelo valor da chave correspondente para recuperar o valor ASCII original.",
    "Output Decrypted Message": "Mensagem Descriptografada de Saída",
    "The decrypted message is printed, restoring the original input message.": "A mensagem descriptografada é impressa, restaurando a mensagem de entrada original.",
    "Summary": "Resumo",
    "This project involved developing a simple encryption and decryption algorithm using Python. The encryption process utilized random key generation and ASCII value manipulation to secure the message, while the decryption process required the correct key to retrieve the original message. This project showcases skills in Python programming, string manipulation, random number generation, and basic cryptography.": "Este projeto envolveu o desenvolvimento de um algoritmo simples de criptografia e descriptografia usando Python. O processo de criptografia utilizou a geração de chaves aleatórias e a manipulação de valores ASCII para proteger a mensagem, enquanto o processo de descriptografia exigiu a chave correta para recuperar a mensagem original. Este projeto demonstra habilidades em programação Python, manipulação de strings, geração de números aleatórios e criptografia básica.",

    //Booking System

    "Booking System": "Sistema de Reservas",
    "System Architecture": "Arquitetura do Sistema",
    "This project was centered around the strategic development of a new system designed to integrate two distinct SQL databases into a seamless online interface using Docker containers. The main objective was to create a robust and efficient system capable of handling complex data integration and providing a user-friendly interface for end-users.": "Este projeto foi centrado no desenvolvimento estratégico de um novo sistema projetado para integrar dois bancos de dados SQL distintos em uma interface online perfeita usando contêineres Docker. O principal objetivo era criar um sistema robusto e eficiente capaz de lidar com a integração de dados complexos e fornecer uma interface amigável para os usuários finais.",
    "Project Overview": "Visão Geral do Projeto",
    "Docker Containers": "Contêineres Docker",
    "Utilized Docker to containerize the entire application, ensuring consistency across different environments and simplifying the deployment process. Each database and service ran in its own isolated container, enhancing security and scalability.": "Utilizamos Docker para containerizar toda a aplicação, garantindo consistência em diferentes ambientes e simplificando o processo de implantação. Cada banco de dados e serviço funcionava em seu próprio contêiner isolado, aumentando a segurança e a escalabilidade.",
    "Microservices": "Microsserviços",
    "Designed the system using a microservices architecture to allow independent development, deployment, and scaling of different components. This approach facilitated easier maintenance and updates.": "Projetamos o sistema usando uma arquitetura de microsserviços para permitir o desenvolvimento, implantação e escalonamento independentes de diferentes componentes. Esta abordagem facilitou a manutenção e as atualizações.",
    "Database Integration": "Integração de Bancos de Dados",
    "SQL Databases": "Bancos de Dados SQL",
    "Integrated two distinct SQL databases, ensuring seamless data flow and synchronization between them. This involved writing complex SQL queries, handling data conflicts, and ensuring data integrity.": "Integrámos dois bancos de dados SQL distintos, garantindo um fluxo de dados perfeito e a sincronização entre eles. Isso envolveu a escrita de consultas SQL complexas, o gerenciamento de conflitos de dados e a garantia da integridade dos dados.",
    "Database Management": "Gerenciamento de Bancos de Dados",
    "Implemented efficient database management practices, including indexing, query optimization, and regular backups to maintain high performance and reliability.": "Implementamos práticas eficientes de gerenciamento de bancos de dados, incluindo indexação, otimização de consultas e backups regulares para manter alto desempenho e confiabilidade.",
    "Online Interface": "Interface Online",
    "User Interface (UI)": "Interface do Usuário (UI)",
    "Developed a responsive and intuitive online interface using modern web technologies": "Desenvolvemos uma interface online responsiva e intuitiva usando tecnologias web modernas ",
    "e.g., HTML, CSS, JavaScript": "por exemplo, HTML, CSS, JavaScript",
    "The interface allowed users to interact with the integrated databases effortlessly, providing real-time data access and updates.": "A interface permitiu que os usuários interagissem com os bancos de dados integrados sem esforço, proporcionando acesso e atualizações de dados em tempo real.",
    "Backend Integration": "Integração de Backend",
    "Connected the frontend interface with the backend services using APIs. This included handling user authentication, data validation, and error handling to ensure a smooth user experience.": "Conectamos a interface do frontend com os serviços de backend usando APIs. Isso incluiu a autenticação do usuário, validação de dados e tratamento de erros para garantir uma experiência do usuário sem problemas.",
    "Security and Compliance": "Segurança e Conformidade",
    "Data Security": "Segurança de Dados",
    "Ensured data security through encryption, secure access controls, and regular security audits. Docker’s container isolation also added an extra layer of security.": "Garantimos a segurança dos dados por meio de criptografia, controles de acesso seguros e auditorias regulares de segurança. O isolamento de contêineres do Docker também adicionou uma camada extra de segurança.",
    "Compliance": "Conformidade",
    "Adhered to industry standards and regulations to ensure the system met all compliance requirements, protecting sensitive data and maintaining user trust.": "Aderimos aos padrões e regulamentos da indústria para garantir que o sistema atendesse a todos os requisitos de conformidade, protegendo dados sensíveis e mantendo a confiança dos usuários.",
    "Impact and Innovation": "Impacto e Inovação",
    "My contribution was critical in making the system robust and efficient, demonstrating the ability to tackle advanced technological challenges and drive innovation within the organization. The successful integration of the databases and the development of a user-friendly interface significantly improved data accessibility and usability, enhancing overall operational efficiency.": "Minha contribuição foi crítica para tornar o sistema robusto e eficiente, demonstrando a capacidade de enfrentar desafios tecnológicos avançados e impulsionar a inovação dentro da organização. A integração bem-sucedida dos bancos de dados e o desenvolvimento de uma interface amigável melhoraram significativamente a acessibilidade e a usabilidade dos dados, aumentando a eficiência operacional geral.",
    "For more detailed information about this project, please refer to the Non-Disclosure Agreement (NDA).": "Para obter mais informações detalhadas sobre este projeto, consulte o Acordo de Confidencialidade (NDA).",

    //Dataframe analysis

    "dataframe analysis": "análise de dataframe",
    "This project involved developing a comprehensive program to manage and analyze agricultural product data from a CSV file. The program, implemented in C, provides functionality to search, display, and analyze data based on user input, showcasing skills in file handling, data structures, and user interaction in a command-line interface.": "Este projeto envolveu o desenvolvimento de um programa abrangente para gerenciar e analisar dados de produtos agrícolas a partir de um arquivo CSV. O programa, implementado em C, fornece funcionalidade para pesquisar, exibir e analisar dados com base na entrada do usuário, demonstrando habilidades em manipulação de arquivos, estruturas de dados e interação com o usuário em uma interface de linha de comando.",
    "File Handling and Data Parsing": "Manipulação de Arquivos e Análise de Dados",
    "File Reading": "Leitura de Arquivos",
    "The program reads data from a CSV file": "O programa lê dados de um arquivo CSV ",
    "(\"Dadoscsv2.csv\") using standard I/O functions in C.": "(\"Dadoscsv2.csv\") usando funções padrão de I/O em C.",
    "It handles potential errors in file opening and ensures data is read correctly.": "Ele lida com possíveis erros na abertura de arquivos e garante que os dados sejam lidos corretamente.",
    "Data Storage": "Armazenamento de Dados",
    "The data is stored in a three-dimensional array, which allows for efficient access and manipulation. The program tokenizes each line of the CSV to populate this array.": "Os dados são armazenados em um array tridimensional, o que permite acesso e manipulação eficientes. O programa tokeniza cada linha do CSV para preencher esse array.",
    "User Interaction": "Interação com o Usuário",
    "Menu Interface": "Interface de Menu",
    "The program provides a user-friendly menu interface with options to display all products, search by cultivation area, production, or by the initial letter of the product name.": "O programa fornece uma interface de menu amigável com opções para exibir todos os produtos, pesquisar por área de cultivo, produção ou pela letra inicial do nome do produto.",
    "Input Validation": "Validação de Entrada",
    "The program includes robust input validation to ensure the user provides valid inputs for the various search options.": "O programa inclui uma validação robusta de entrada para garantir que o usuário forneça entradas válidas para as várias opções de pesquisa.",
    "Search and Display Functions": "Funções de Pesquisa e Exibição",
    "Display All Products": "Exibir Todos os Produtos",
    "Displays all agricultural products, along with their respective areas and production values, formatted in a readable table.": "Exibe todos os produtos agrícolas, juntamente com suas respectivas áreas e valores de produção, formatados em uma tabela legível.",
    "Search by Area": "Pesquisar por Área",
    "Allows users to search for products based on the cultivation area, displaying the five products with areas closest to the user-specified value.": "Permite que os usuários pesquisem produtos com base na área de cultivo, exibindo os cinco produtos com áreas mais próximas do valor especificado pelo usuário.",
    "Search by Production": "Pesquisar por Produção",
    "Enables users to search for products by production volume, showing the five products with production values nearest to the input value.": "Permite que os usuários pesquisem produtos por volume de produção, mostrando os cinco produtos com valores de produção mais próximos do valor de entrada.",
    "Search by Initial": "Pesquisar por Inicial",
    "Users can search for products starting with a specific initial, providing a quick way to filter the data.": "Os usuários podem pesquisar produtos começando com uma inicial específica, fornecendo uma maneira rápida de filtrar os dados.",
    "Technical Implementation": "Implementação Técnica",
    "Data Conversion": "Conversão de Dados",
    "The program converts string data to appropriate numeric types for accurate comparisons and calculations.": "O programa converte dados de string para tipos numéricos apropriados para comparações e cálculos precisos.",
    "Sorting and Filtering": "Classificação e Filtragem",
    "Utilizes sorting and filtering algorithms to identify and display the closest matches for area and production searches.": "Utiliza algoritmos de classificação e filtragem para identificar e exibir as correspondências mais próximas para pesquisas de área e produção.",
    "Dynamic Memory Management": "Gerenciamento Dinâmico de Memória",
    "Efficient use of memory management techniques ensures the program runs smoothly even with large datasets.": "O uso eficiente de técnicas de gerenciamento de memória garante que o programa funcione sem problemas, mesmo com grandes conjuntos de dados.",
    "Summary for Portfolio": "Resumo para Portfólio",
    "This project demonstrates expertise in C programming, specifically in file handling, data parsing, and user interaction through a command-line interface. It includes functionality to read and process data from a CSV file, providing various search and display options to the user. Key features include robust input validation, efficient data storage, and dynamic memory management. For more detailed information about this project, please refer to the accompanying documentation.": "Este projeto demonstra expertise em programação em C, especificamente em manipulação de arquivos, análise de dados e interação com o usuário por meio de uma interface de linha de comando. Inclui funcionalidade para ler e processar dados de um arquivo CSV, fornecendo várias opções de pesquisa e exibição ao usuário. As principais características incluem validação robusta de entrada, armazenamento eficiente de dados e gerenciamento dinâmico de memória. Para mais informações detalhadas sobre este projeto, consulte a documentação complementar.",

    //Maze

    "maze and the mouse": "o labirinto e o rato",
    "repository": "repositório",
    "Overview": "Visão Geral",
    "This project showcases a C program designed to solve mazes using a stack-based depth-first search": "Este projeto apresenta um programa em C projetado para resolver labirintos usando uma busca em profundidade baseada em pilha ",
    "(DFS) algorithm.": "(DFS).",
    "The program includes functions to initialize and manipulate a stack, load and validate a maze from a file, explore the maze to find an exit (represented as cheese 'S'), and display the maze in the console. Here's a breakdown of the key components.": "O programa inclui funções para inicializar e manipular uma pilha, carregar e validar um labirinto a partir de um arquivo, explorar o labirinto para encontrar uma saída (representada como queijo 'S') e exibir o labirinto no console. Aqui está um resumo dos componentes principais.",
    "Stack Operations": "Operações de Pilha",
    "initStack": "initStack",
    "Initializes the stack.": "Inicializa a pilha.",
    "isStackEmpty": "isStackEmpty",
    "Checks if the stack is empty. Returns 1 if empty, 0 otherwise.": "Verifica se a pilha está vazia. Retorna 1 se estiver vazia, 0 caso contrário.",
    "push": "push",
    "Inserts an element at the top of the stack. Does nothing if the stack is full.": "Insere um elemento no topo da pilha. Não faz nada se a pilha estiver cheia.",
    "pop": "pop",
    "Removes and returns the top element of the stack. Returns an invalid position": "Remove e retorna o elemento do topo da pilha. Retorna uma posição inválida",
    "if the stack is empty.": "se a pilha estiver vazia.",
    "Maze Loading and Validation": "Carregamento e Validação do Labirinto",
    "loadMaze": "loadMaze",
    "Loads a maze from a file. The file format includes the number of rows and columns, followed by the maze layout": "Carrega um labirinto a partir de um arquivo. O formato do arquivo inclui o número de linhas e colunas, seguido pelo layout do labirinto ",
    "0 for open path, X for wall, S for cheese": "0 para caminho aberto, X para parede, S para queijo",
    "validateMaze": "validateMaze",
    "Ensures the maze contains valid characters": "Garante que o labirinto contenha caracteres válidos ",
    "and at least one exit": "e pelo menos uma saída ",
    "Maze Exploration": "Exploração do Labirinto",
    "exploreMaze": "exploreMaze",
    "Uses a stack to perform a depth-first search from a starting position. Marks the path and finds the exit": "Usa uma pilha para realizar uma busca em profundidade a partir de uma posição inicial. Marca o caminho e encontra a saída ",
    "isValidMove": "isValidMove",
    "Checks if a move to a specified position in the maze is valid": "Verifica se um movimento para uma posição especificada no labirinto é válido",
    "either an open path 0 or the cheese S": "seja um caminho aberto 0 ou o queijo S",
    "findExit": "findExit",
    "Initiates maze exploration from a given start position to find the exit.": "Inicia a exploração do labirinto a partir de uma posição inicial determinada para encontrar a saída.",
    "Display Function": "Função de Exibição",
    "Initialize Allegro": "Inicializar Allegro",
    "Set up the Allegro library, including initializing display, event queue, and necessary add-ons.": "Configura a biblioteca Allegro, incluindo a inicialização de display, fila de eventos e add-ons necessários.",
    "Load Resources": "Carregar Recursos",
    "Load images, fonts, and other resources required for rendering the maze and UI components.": "Carrega imagens, fontes e outros recursos necessários para renderizar o labirinto e os componentes da UI.",
    "Render Loop": "Loop de Renderização",
    "Implement the main rendering loop to draw the maze, player position, and other elements, refreshing the display at a fixed frame rate.": "Implementa o loop de renderização principal para desenhar o labirinto, a posição do jogador e outros elementos, atualizando o display em uma taxa de quadros fixa.",
    "Event Handling": "Manipulação de Eventos",
    "Process user inputs and events such as keyboard presses and window close requests within the rendering loop.": "Processa entradas do usuário e eventos como pressionamentos de teclas e solicitações de fechamento de janela dentro do loop de renderização.",
    "Clean Up": "Limpeza",
    "Properly release resources and shut down Allegro components when the program exits.": "Libera corretamente os recursos e encerra os componentes do Allegro quando o programa é finalizado.",

    //HomePage

    "Homepage": "Página Inicial",
    "Hello! I am passionate about transforming data into intelligent decisions and innovative solutions.": "Olá! Sou apaixonado por transformar dados em decisões inteligentes e soluções inovadoras.",
    "Explore my portfolio and discover how I can contribute to the success of your project.": "Explore meu portfólio e descubra como posso contribuir para o sucesso do seu projeto.",
    "What I'm doing": "O que estou fazendo",
    //"about": "sobre",
    "Learn more":"Saiba mais",
    "me and my journey": "mim e minha trajetória",
    //"Resume": "Currículo",
    "Check out my resume and qualifications.": "Confira meu currículo e qualificações.",
    //"Portfolio": "Portfólio",
    "See some of the projects I've worked on.": "Veja alguns dos projetos em que trabalhei.",
    //"Contact": "Contato",
    "Get in touch and let's discuss your needs.": "Entre em contato e vamos discutir suas necessidades.",


  }
};

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function translatePage(language) {
  const langTranslations = translations[language];

  // Função para normalizar texto removendo espaços em branco e quebras de linha
  function normalizeText(text) {
    return text.replace(/\s+/g, ' ').trim();
  }

  // Função para percorrer todos os nós de texto
  function translateTextNode(node) {
    for (const [key, value] of Object.entries(langTranslations)) {
      const normalizedKey = normalizeText(key);
      const normalizedValue = normalizeText(value);
      const regex = new RegExp(normalizedKey, 'g');
      const normalizedNodeValue = normalizeText(node.nodeValue);
      if (normalizedNodeValue.includes(normalizedKey)) {
        console.log(`Traduzindo: "${normalizedNodeValue}" para "${normalizedNodeValue.replace(regex, normalizedValue)}"`);
        node.nodeValue = normalizedNodeValue.replace(regex, normalizedValue);
      }
    }
  }

  // Percorrer todos os nós de texto no documento
  function walkNodes(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      translateTextNode(node);
    } else {
      node.childNodes.forEach(walkNodes);
    }
  }

  walkNodes(document.body);
}

document.addEventListener('click', function (event) {
  const target = event.target.closest('a');
  if (target && target.id === 'translate-br') {
    console.log("Traduzindo para PT");
    translatePage('pt');
  } else if (target && target.id === 'translate-en') {
    console.log("Traduzindo para EN");
    translatePage('en');
  }

  function adjustIframeHeight() {
    var iframe = document.getElementById('responsive-iframe');
    var width = iframe.offsetWidth;
    iframe.style.height = (width * 0.65) + 'px';
  }

  window.addEventListener('resize', adjustIframeHeight);
  window.addEventListener('load', adjustIframeHeight);
});






