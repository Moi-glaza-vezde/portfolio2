import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../styled/Theme';

export const HeaderMenu = (props: { menuItems: Array<string> }) => {
   return (
      <StyledHeaderMenu>
         <MenuList>
            {props.menuItems.map((item: string, index) => {
               return (
                  <ListItem key={index}>
                     <Link href="">
                        {item}

                        <Mask>
                           <span> {item}</span>
                        </Mask>
                        <Mask>
                           <span> {item}</span>
                        </Mask>
                     </Link>
                  </ListItem>
               );
            })}
         </MenuList>
      </StyledHeaderMenu>
   );
};

const StyledHeaderMenu = styled.nav`
   display: flex;

   @media screen and (max-width: 768px) {
   }
   @media ${theme.media.largeЕablet} {
      display: none;
   }
`;
const MenuList = styled.ul`
   display: flex;
   gap: 60px;
`;

const Mask = styled.span`
   position: absolute;
   top: 0;
   left: 0;
   display: inline-block;
   height: 50%;
   overflow: hidden;
   //outline: 1px solid red;
   color: ${theme.colors.secondaryFont};

   & + & {
      top: 42%;
      span {
         display: inline-block;
         transform: translateY(-55%);
      }
   }
`;
const ListItem = styled.li`
   position: relative;

   &::before {
      content: '';
      display: inline-block;

      height: 2px;
      background: linear-gradient(90deg, ${theme.colors.gradientFont});
      position: absolute;
      top: 40%;
      left: -10px;
      right: -10px;
      z-index: 1;
      transform: scale(0);
   }

   &:hover {
      &::before {
         transform: scale(1);
      }

      ${Mask} {
         transform: skewX(12deg) translateX(3px);
         color: ${theme.colors.font};

         & + ${Mask} {
            transform: skewX(12deg) translateX(-3px);
         }
      }
   }
`;

const Link = styled.a`
   font-family: 'DM Sans', sans-serif;
   font-size: 20px;
   // line-height: 1.4;
   font-weight: 500;
   color: ${theme.colors.secondaryFont};
   color: transparent;
`;
