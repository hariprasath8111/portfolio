import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import {darkTheme, lightTheme} from "./utils/Themes";
import Navbar from './components/Navbar';
import Hero from './components/Herosection';
import Skills from './components/Skills'
import Education from './components/Education';
import { BrowserRouter as Router } from 'react-router-dom';
import Experince from './components/Experirence';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from "./components/Footer";
import ProjectDetails from "./components/ProjectDetils";
import { useState,  } from "react";


const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`

function App() {
  const [darkMode,] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  return (
    <ThemeProvider theme={darkMode  ? darkTheme : lightTheme}>
      <Router>
      <Navbar />  
      <Body>
        <Hero />
        <Wrapper>
        <Skills />
        <Experince />
        <Projects  openModal={openModal} setOpenModal={setOpenModal} />

        </Wrapper>
        <Wrapper>
        <Education /> 
        <Contact />
        </Wrapper>
        <Footer />
        {openModal.state &&
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
        }
       
        
      </Body>
      </Router>
      
    </ThemeProvider>
  );
}

export default App;
