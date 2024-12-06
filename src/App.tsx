import './App.css';
import styled from 'styled-components';
import { Header } from './layout/header/Header';
import { Main } from './layout/sections/main/Main';
import { Skills } from './layout/sections/stack/Skills';
import { Works } from './layout/sections/works/Works';
import { Information } from './layout/sections/information/Information';

function App() {
   return (
      <div className="App">
         <Header />
         <Main />
         <Skills />
         <Works />
         <Information />
      </div>
   );
}

export default App;
