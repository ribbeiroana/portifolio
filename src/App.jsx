import './App.css';
import { FaHtml5, FaNodeJs, FaReact, FaCss3Alt, FaFigma, FaBootstrap, FaGitAlt, FaGithub, FaWhatsapp  } from "react-icons/fa";
import { SiJavascript, SiMysql, SiMongodb, SiPrisma, SiSequelize, SiTypescript, SiInsomnia, SiPostman, SiVite, SiEslint } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { TbSql } from "react-icons/tb";
import { IoIosArrowUp } from "react-icons/io";

function App() {
  return (
    <>
    <div className='whatsapp-fixed'>
    <FaWhatsapp className='icon-fixed' />
    </div>
    <div className='arrow-fixed'>
    <IoIosArrowUp className='icon-fixed-arrow'/>
    </div>
      <div className='section-home'>
        <h1>oi</h1>
        <h1>oi</h1>
        <h1>oi</h1>
        <h1>oi</h1>
        <h1>oi</h1>
        <h1>oi</h1>
        <h1>oi</h1>
        <h1>oi</h1>
        <h1>oi</h1>
        <h1>oi</h1>
        <h1>oi</h1>
        <h1>oi</h1>
        <h1>oi</h1>
        <h1>oi</h1>
      </div>
      <div className='section-scroll'>
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
      <div className='section-servicos'>
        <h2>oi</h2>
      </div>
    </>
  )
}

export default App
