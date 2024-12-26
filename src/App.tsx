import './App.css';
import styled from 'styled-components';
import { Header } from './layout/header/Header';
import { Main } from './layout/sections/main/Main';
import { Skills } from './layout/sections/stack/Skills';
import { Works } from './layout/sections/works/Works';
import { Information } from './layout/sections/information/Information';
import { Contacts } from './layout/sections/contact/Contacts';
import { Footer } from './layout/footer/Footer';
import { Particle } from './components/particle/Particle';
import { GoTopBtn } from './components/goTopBtn/GoTopBtn';

function App() {
   return (
      <div>
         <Particle />
         <Header />
         <Main />
         <Skills />
         <Works />
         <Information />
         <Contacts />
         <Footer />
         <GoTopBtn />
      </div>
   );
}

export default App;
