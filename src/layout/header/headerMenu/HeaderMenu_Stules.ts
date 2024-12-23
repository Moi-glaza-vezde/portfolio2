import styled, { css } from 'styled-components';
import { theme } from '../../../styled/Theme';
//-----------menu
const MenuList = styled.ul`
   display: flex;

   justify-content: space-between;
   width: 609px;
   @media ${theme.media.largeЕablet} {
      justify-content: space-around;
      flex-direction: column;
      height: 500px;
      align-items: center;
   }
`;

const Mask = styled.span`
   position: absolute;
   top: 0;
   left: 0;
   display: inline-block;
   height: 43%;
   overflow: hidden;

   color: ${theme.colors.secondaryFont};
   @media ${theme.media.largeЕablet} {
      height: 40%;
   }
   & + & {
      top: 43%;
      span {
         display: inline-block;
         transform: translateY(-55%);
      }
      @media ${theme.media.largeЕablet} {
         top: 38%;
      }
   }
`;
const ListItem = styled.li`
   position: relative;

   @media ${theme.media.largeЕablet} {
      font-size: 30px;
   }

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

      @media ${theme.media.largeЕablet} {
         top: 38%;
      }
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

//--------------mobileMenu

const MobileMenu = styled.nav``;
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
         align-items: flex-start;
         padding-top: 100px;
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

   @media ${theme.media.mobile} {
      right: 10px;
   }
`;

//----------desctop menu

const DesktopMenu = styled.nav`
   display: flex;
`;

export const S = {
   MenuList,
   Mask,
   ListItem,
   Link,

   MobileMenu,
   MobileMenuPopup,
   BurgerButton,

   DesktopMenu,
};
