import './App.css';
import { FaHtml5, FaNodeJs, FaReact, FaCss3Alt, FaFigma, FaBootstrap, FaGitAlt, FaGithub, FaWhatsapp, FaLinkedin, FaHome, FaCode, FaUser } from "react-icons/fa";
import { SiJavascript, SiMysql, SiMongodb, SiPrisma, SiSequelize, SiTypescript, SiInsomnia, SiPostman, SiVite, SiEslint } from "react-icons/si";
import { MdOutlineMiscellaneousServices, MdEmail } from "react-icons/md";
import { VscVscode } from "react-icons/vsc";
import { TbSql } from "react-icons/tb";
import { IoIosArrowUp } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import notebook from './assets/not.png'
function App() {
  return (
    <>
      <div className='whatsapp-fixed'>
        <FaWhatsapp className='icon-fixed' />
      </div>
      <div className='arrow-fixed'>
        <a href="#home">
          <IoIosArrowUp className='icon-fixed-arrow' />
        </a>
      </div>

      <header>
        <FaGithub className='icon-header-git' alt='GitHub' />
        <FaLinkedin className='icon-header-link' alt='Linkedin' />
      </header>

      <div id='home' className='section-home'>
        {/* 
        <h1>Ana Ribeiro</h1>
        <h2>Desenvolvedora Web</h2> */}
      </div>

      <div className='section-scroll'>
        <div className="scrolling-wrapper">
          {/* Primeira parte dos ícones */}
          <div className="scrolling-icons">
            <FaHtml5 className='icon' alt='Html' />
            <SiJavascript className='icon' alt='Javascript' />
            <FaNodeJs className='icon' alt='Node Js' />
            <FaReact className='icon' alt='React' />
            <SiMysql className='icon' alt='Mysql' />
            <SiMongodb className='icon' alt='Mongodb' />
            <SiPrisma className='icon' alt='Prisma' />
            <SiSequelize className='icon' alt='Sequelize' />
            <FaCss3Alt className='icon' alt='Css' />
            <FaFigma className='icon' alt='Figma' />
            <FaBootstrap className='icon' alt='Bootstrap' />
            <SiTypescript className='icon' alt='Typescript' />
            <FaGitAlt className='icon' alt='Git' />
            <SiInsomnia className='icon' alt='Insomnia' />
            <SiPostman className='icon' alt='Postman' />
            <VscVscode className='icon' alt='Vscode' />
            <FaGithub className='icon' alt='GitHub' />
            <SiVite className='icon' alt='Vite' />
            <SiEslint className='icon' alt='Eslint' />
            <TbSql className='icon' alt='Sql' />
          </div>

          {/* Segunda parte dos ícones (duplicada para efeito de loop) */}
          <div className="scrolling-icons">
            <FaHtml5 className='icon' alt='Html' />
            <SiJavascript className='icon' alt='Javascript' />
            <FaNodeJs className='icon' alt='Node Js' />
            <FaReact className='icon' alt='React' />
            <SiMysql className='icon' alt='Mysql' />
            <SiMongodb className='icon' alt='Mongodb' />
            <SiPrisma className='icon' alt='Prisma' />
            <SiSequelize className='icon' alt='Sequelize' />
            <FaCss3Alt className='icon' alt='Css' />
            <FaFigma className='icon' alt='Figma' />
            <FaBootstrap className='icon' alt='Bootstrap' />
            <SiTypescript className='icon' alt='Typescript' />
            <FaGitAlt className='icon' alt='Git' />
            <SiInsomnia className='icon' alt='Insomnia' />
            <SiPostman className='icon' alt='Postman' />
            <VscVscode className='icon' alt='Vscode' />
            <FaGithub className='icon' alt='GitHub' />
            <SiVite className='icon' alt='Vite' />
            <SiEslint className='icon' alt='Eslint' />
            <TbSql className='icon' alt='Sql' />
          </div>
        </div>
      </div>

      <div id="about" className='section-about'>
        <div className='about-descriptions'>
          <h2>SOBRE MIM</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam ex odio natus expedita reiciendis temporibus ut tenetur distinctio explicabo, consectetur deleniti, ipsum quos, nostrum eius hic sit animi vitae aliquid.</p>
        </div>

      </div>

      {/* <div id='service' className='section-service'>
        <h3 className='titulo'>Serviços</h3>

        <div className="cards-service">
          <div className="card-service">
            <p>teste</p>
          </div>
          <div className="card-service">
            <p>teste</p>
          </div>
          <div className="card-service">
            <p>teste</p>
          </div>
        </div>
      </div> */}

      <div id='projects' className='section-projects'>
        <div className='description-projects'>
          <h3 className='titulo'>PROJETOS</h3>
        </div>

        <div className='cards-projects'>

          <div className='card'>
            <div className='card-descriptions'>
              <h3>Projeto</h3>
            </div>
            <img src={notebook} alt="tela" />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe possimus nam </p>
            <img className='badges' src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="JavaScript" />
            <img className='badges' src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
            <img className='badges' src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="JavaScript" />
          </div>

          <div className='card'>
            <div className='card-descriptions'>
              <h3>Projeto</h3>
            </div>
            <img src={notebook} alt="tela" />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe possimus nam </p>
            <img className='badges' src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
            <img className='badges' src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="JavaScript" />
            <img className='badges' src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="JavaScript" />
          </div>

          <div className='card'>
            <div className='card-descriptions'>
              <h3>Projeto</h3>
            </div>
            <img src={notebook} alt="tela" />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe possimus nam </p>
            <img className='badges' src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="JavaScript" />
            <img className='badges' src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
            <img className='badges' src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="JavaScript" />
          </div>

        </div>
      </div>

      <footer>
        <div className='container-footer'>

          <div className='column-footer'>
            <a href="#home">
              <FaHome className='icon-footer' />
              Início
            </a>
            <a href="#about">
              <FaUser className='icon-footer' />
              Sobre
            </a>
            <a href="#service">
              <MdOutlineMiscellaneousServices className='icon-footer' />
              Serviços
            </a>
            <a href="#projects">
              <FaCode className='icon-footer' />
              Projetos
            </a>
          </div>

          <div className='column-footer'>
            <a href="https://github.com/ribbeiroana">
              <FaGithub className='icon-footer' />
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/ribbeiroana/">
              <FaLinkedin className='icon-footer' />
              Linkedin
            </a>
            <p>
              <MdEmail className='icon-footer' />
              anapribbeiro@gmail.com
            </p>
          </div>


          <div className='column-footer'>
            <p>
              <FaLocationDot className='icon-footer' />
              Belo Horizonte-MG
            </p>
          </div>
        </div>

        <div className='copy-footer'>
          <p>&copy; 2024 Todos os direitos reservados.</p>
          <p>Desenvolvido por </p>
        </div>

      </footer>
    </>
  );
}

export default App;
