import React from 'react';
import { SocialContacts } from '../socialContacts/SocialContacts';
import styled from 'styled-components';

// type MenuPropsType = {
//    menuItems: Array<string>;
// };

export const Menu = (props: { menuItems: Array<string> }) => {
   return (
      <StyledMenu>
         <ul>
            {props.menuItems.map((item: string, index) => {
               return (
                  <li key={index}>
                     <a href="">{item}</a>
                  </li>
               );
            })}
         </ul>
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
