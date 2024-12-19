import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styled/Theme';

// type MenuPropsType = {
//    menuItems: Array<string>;
// };

export const Menu = (props: { menuItems: Array<string> }) => {
   return (
      <StyledMenu>
         <List>
            {props.menuItems.map((item: string, index) => {
               return (
                  <ListItem key={index}>
                     <Link href="">{item}</Link>
                  </ListItem>
               );
            })}
         </List>
      </StyledMenu>
   );
};

const StyledMenu = styled.nav`
   // display: flex;
   // gap: 30px;
`;
const List = styled.ul`
   display: flex;
   gap: 51px;

   @media ${theme.media.mobile} {
      justify-content: space-around;
      flex-wrap: wrap;
      gap: 15px;
   }
`;
const ListItem = styled.li``;
const Link = styled.a`
   color: ${theme.colors.secondaryFont};
   font-family: 'DM Sans', sans-serif;
   font-size: 18px;
   font-weight: 400;
`;
