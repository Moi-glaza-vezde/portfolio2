import React from 'react';
import styled from 'styled-components';
import { Logo } from '../../components/logo/Logo';
import { Menu } from '../../components/menu/Menu';

const items = ['Home', 'About', 'Tech Stack', 'Projects', 'Contact'];

export const Header = () => {
   return (
      <StyledHeader>
         <Logo />
         <Menu menuItems={items} />
      </StyledHeader>
   );
};

const StyledHeader = styled.header`
   background-color: #b3fdd2;
   display: flex;
   justify-content: space-between;
`;
