//-----------Footer

import styled from 'styled-components';
import { FlexWrapper } from '../../components/FlexWrapper.Styled';
import { theme } from '../../styled/Theme';

const Footer = styled.footer`
   margin-top: 75px;

   ${FlexWrapper} {
      @media ${theme.media.mobile} {
         justify-content: space-around;
         gap: 20px;
      }
      ${FlexWrapper} {
         @media ${theme.media.tablet} {
            gap: 50px;
            padding-right: 0;
         }
         @media ${theme.media.mobile} {
            justify-content: space-around;
            flex-wrap: wrap;
            gap: 20px;
         }
      }
   }
`;
const ItemsWrapper = styled.div`
   ${FlexWrapper} {
      @media ${theme.media.largeЕablet} {
         justify-content: space-around;
         gap: 20px;
      }
   }
   padding: 45px 0;
   position: relative;
   & + & {
      &::before {
         content: '';
         display: inline-block;

         width: 100%;
         height: 2px;
         background-color: #fff;
         position: absolute;
         top: 0;
      }
   }
`;
const PhoneNumber = styled.a`
   font-family: 'DM Sans', sans-serif;
   font-size: 18px;
   font-weight: 400;
   color: ${theme.colors.secondaryFont};
`;
const Mail = styled.a`
   color: ${theme.colors.secondaryFont};

   font-family: 'DM Sans', sans-serif;
   font-size: 18px;
   font-weight: 400;
`;

const TextColor = styled.span`
   background: linear-gradient(90deg, ${theme.colors.gradientFont});
   -webkit-background-clip: text;
   -webkit-text-fill-color: transparent;
   span {
      background-color: ${theme.colors.secondaryFont};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;

      text-align: center;
   }
`;
const Text = styled.div`
   text-align: center;
   font-size: 18px;
   font-weight: 400;
   color: ${theme.colors.secondaryFont};
`;
//--------Footer Menu

const FooterMenu = styled.nav``;
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

export const S = {
   Footer,
   ItemsWrapper,
   PhoneNumber,
   Mail,
   TextColor,
   Text,

   FooterMenu,
   List,
   ListItem,
   Link,
};
