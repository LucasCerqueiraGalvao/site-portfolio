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

    "O que eu faço": "What i'm doing",
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
    "Desenvolvi um algoritmo de criptografia AES" : "I developed an AES",
    " em C, utilizando estruturas de dados, condicionais, loops, manipulações de matrizes, operações bit a bit, manipulação de buffers, gerenciamento de memória dinâmica e técnicas de otimização de desempenho.":"encryption algorithm in C, utilizing data structures, conditionals, loops, matrix manipulations, bitwise operations, buffer handling, dynamic memory management, and performance optimization techniques.",
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



  },

  "pt": {

    // About

    "About me": "Sobre mim",
    "I am a data science specialist with advanced skills in Python, C, Fortran, and tools like PostgreSQL and Power BI.": "Sou um especialista em ciência de dados com habilidades avançadas em Python, C, Fortran e ferramentas como PostgreSQL e Power BI.",
    "My data-driven approach efficiently solves complex problems in projects like encryption and electricity analysis.": "Minha abordagem orientada por dados resolve eficientemente problemas complexos em projetos como criptografia e análise de eletricidade.",
    "I have experience leading projects, developing an AES algorithm in C and optimizing electricity consumption with Python and Power BI.": "Tenho experiência em liderar projetos, desenvolvendo um algoritmo AES em C e otimizando o consumo de eletricidade com Python e Power BI.",
    "I seek a challenging opportunity to apply my data science and programming skills, bringing innovation and efficiency.": "Busco uma oportunidade desafiadora para aplicar minhas habilidades em ciência de dados e programação, trazendo inovação e eficiência.",
    "My goal is to reach a leadership role, with a passion for continuous learning and cutting-edge technology as my key differentiator.": "Meu objetivo é alcançar um cargo de liderança, com paixão por aprendizado contínuo e tecnologia de ponta como meu principal diferencial.",

    "What i'm doing": "O que eu faço",
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

document.addEventListener('click', function(event) {
  const target = event.target.closest('a');
  if (target && target.id === 'translate-br') {
    console.log("Traduzindo para PT");
    translatePage('pt');
  } else if (target && target.id === 'translate-en') {
    console.log("Traduzindo para EN");
    translatePage('en');
  }
});






