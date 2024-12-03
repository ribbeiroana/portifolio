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
        <IoIosArrowUp className='icon-fixed-arrow' />
      </div>

      <header>
        <FaGithub className='icon-header-git' alt='GitHub' />
        <FaLinkedin className='icon-header-link' alt='Linkedin' />
      </header>

      <div className='section-home'>

        <h1>Ana Ribeiro</h1>
        <h2>Desenvolvedora Web</h2>
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

      <div className='section-service'>
        {/* <h3 className='titulo'>Serviços</h3> */}

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
      </div>

      <div className='section-projects'>
        <div className='description-projects'>
          <h3 className='titulo'>PROJETOS</h3>
        </div>

        <div className='cards-projects'>

          <div className='card'>
            <h3>Projeto</h3>
            <img src={notebook} alt="tela" />
          </div>

          <div className='card'>
            <h3>Projeto</h3>
            <img src={notebook} alt="tela" />
          </div>

          <div className='card'>
            <h3>Projeto</h3>
            <img src={notebook} alt="tela" />
          </div>

        </div>
      </div>

      <footer>
        <div className='container-footer'>

          <div className='column-footer'>
            <a href="#">
              <FaHome className='icon-footer' />
              Início
            </a>
            <a href="#">
              <FaUser className='icon-footer' />
              Sobre
            </a>
            <a href="#">
              <MdOutlineMiscellaneousServices className='icon-footer' />
              Serviços
            </a>
            <a href="#">
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
