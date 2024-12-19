import React from 'react';
import styled, { css } from 'styled-components';
import { theme } from '../../../styled/Theme';

export const MobileMenu = (props: { menuItems: Array<string> }) => {
   return (
      <StyledMobileMenu>
         <BurgerButton isOpen={false}>
            <span></span>
         </BurgerButton>
         <MobileMenuPopup isOpen={false}>
            {' '}
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
         </MobileMenuPopup>
      </StyledMobileMenu>
   );
};

const StyledMobileMenu = styled.nav`
   display: none;

   @media ${theme.media.largeЕablet} {
      display: block;
      // position: relative;
   }
`;
const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
   position: fixed;
   top: 0;
   right: 0;
   bottom: 0;
   left: 0;
   z-index: 2;

   background-color: rgba(0, 0, 0, 0.9);

   display: none;
   ${(props) =>
      props.isOpen &&
      css<{ isOpen: boolean }>`
         display: flex;
         justify-content: center;
         align-items: center;
      `}
`;

const BurgerButton = styled.button<{ isOpen: boolean }>`
   position: fixed;

   top: 35px;

   right: 170px;
   // bottom: 0px;
   width: 60px;
   height: 60px;
   z-index: 5;
   ${(props) =>
      props.isOpen &&
      css<{ isOpen: boolean }>`
         right: 30px;
      `}
   span {
      display: block;
      width: 40px;
      height: 3px;
      //  background-color: wheat;
      background-image: linear-gradient(90deg, #e70faa 0%, #00c0fd 100%);

      position: absolute;

      ${(props) =>
         props.isOpen &&
         css<{ isOpen: boolean }>`
            //  background-color: rgba(255, 255, 255, 0);
            background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0));
         `}

      &::before {
         content: '';
         display: block;
         width: 40px;
         height: 3px;

         background-color: wheat;
         background-image: linear-gradient(90deg, #e70faa 0%, #00c0fd 100%);

         position: absolute;
         transform: translateY(-10px);

         ${(props) =>
            props.isOpen &&
            css<{ isOpen: boolean }>`
               transform: rotate(-45deg) translateY(0px);
            `}
      }
      &::after {
         content: '';
         display: block;
         width: 30px;
         height: 3px;
         background-color: wheat;
         background-image: linear-gradient(90deg, #e70faa 0%, #00c0fd 100%);

         position: absolute;
         transform: translateY(10px);

         ${(props) =>
            props.isOpen &&
            css<{ isOpen: boolean }>`
               transform: rotate(45deg) translateY(0px);
               width: 40px;
            `}
      }
   }
`;

const MenuList = styled.ul`
   display: flex;
   gap: 60px;
   flex-direction: column;
   align-items: center;
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
      top: 51%;
      span {
         display: inline-block;
         transform: translateY(-50%);
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
      top: 45%;
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
   font-size: 30px;
   // line-height: 1.4;
   font-weight: 500;
   color: ${theme.colors.secondaryFont};
   color: transparent;
`;
