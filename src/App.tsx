import './App.css';
import styled from 'styled-components';
import { Header } from './layout/header/Header';
import { Main } from './layout/sections/main/Main';
import { Skills } from './layout/sections/stack/Skills';
import { Works } from './layout/sections/works/Works';
import { Information } from './layout/sections/information/Information';
import { Contacts } from './layout/sections/contact/Contacts';
import { Footer } from './layout/footer/Footer';

function App() {
   return (
      <div>
         <Header />
         <Main />
         <Skills />
         <Works />
         <Information />
         <Contacts />
         <Footer />
      </div>
   );
}

export default App;
