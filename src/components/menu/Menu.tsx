import React from 'react';
import { SocialContacts } from '../socialContacts/SocialContacts';
import styled from 'styled-components';

export const Menu = () => {
   return (
      <StyledMenu>
         <ul>
            <li>
               <a href="">Home</a>
            </li>
            <li>
               <a href="">About</a>
            </li>
            <li>
               <a href="">Tech Stack</a>
            </li>
            <li>
               <a href="">Projects</a>
            </li>
            <li>
               <a href="">Contact</a>
            </li>
         </ul>
         <SocialContacts />
      </StyledMenu>
   );
};

const StyledMenu = styled.nav`
   display: flex;
   gap: 30px;
   ul {
      display: flex;
      gap: 30px;
   }
`;
