import React from 'react';
import foto from '../../../assets/images/foto.jpg';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper.Styled';
import { Container } from '../../../components/Container';
import { theme } from '../../../styled/Theme';
import { Icon } from '../../../components/icon/Icon';
import vectorImg from '../../../assets/images/Abstract.svg';
export const Main = () => {
   return (
      <StyledMain>
         <Container>
            <FlexWrapper align="center" justify="space-around" wrap={'wrap'}>
               <StyledMainTextContainer>
                  <GreetingsText> Hi 👋,</GreetingsText>
                  <AcquaintanceText> My name is</AcquaintanceText>
                  <StyledName>Pavan MG</StyledName>
                  <StyledMainTitle>I build things for web</StyledMainTitle>
               </StyledMainTextContainer>

               <DecorWrapper>
                  <DecorImg src={vectorImg} />

                  <StyledPhotoBorder>
                     <StyledPhoto src={foto} alt="" />
                  </StyledPhotoBorder>
               </DecorWrapper>
            </FlexWrapper>
         </Container>
      </StyledMain>
   );
};

const DecorWrapper = styled.div`
   position: relative;
`;
const DecorImg = styled.img`
   position: absolute;
   top: -40%;
   left: -40%;

   display: none;
   @media ${theme.media.desktop} {
      display: block;
   }
   // transform: rotate(-5deg);
`;
const StyledPhotoBorder = styled.div`
   max-width: 349px;
   height: 349px;
   overflow: hidden;

   border-radius: 50%;

   padding: 9px;

   background-image: linear-gradient(180deg, #e70faa 0%, #00c0fd 100%);
`;

const StyledPhoto = styled.img`
   width: 100%;
   border-radius: 50%;
`;
const StyledMain = styled.div`
   min-height: 100vh;
   background-color: ${theme.colors.primaryBg};
   display: flex;
`;

const GreetingsText = styled.span`
   font-size: 58px;
   font-weight: 700;
   letter-spacing: -1px;
   color: ${theme.colors.mainTitleFont};
`;
const AcquaintanceText = styled.span`
   font-size: 58px;
   font-weight: 700;
   letter-spacing: -1px;
   color: ${theme.colors.mainTitleFont};
`;
const StyledName = styled.h2`
   font-size: 58px;
   font-weight: 700;
   letter-spacing: -1px;
   background: linear-gradient(90deg, ${theme.colors.gradientFont});
   -webkit-background-clip: text;
   -webkit-text-fill-color: transparent;
`;
const StyledMainTitle = styled.h1`
   font-size: 58px;
   font-weight: 700;
   letter-spacing: -1px;
   color: ${theme.colors.mainTitleFont};
`;
const StyledMainTextContainer = styled.div`
   display: flex;
   flex-direction: column;
`;
