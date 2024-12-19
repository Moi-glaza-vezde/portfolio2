import React from 'react';
import foto from '../../../assets/images/foto.jpg';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper.Styled';
import { Container } from '../../../components/Container';
import { theme } from '../../../styled/Theme';
import { Icon } from '../../../components/icon/Icon';
import vectorImg from '../../../assets/images/Abstract.svg';
import { font } from '../../../components/Common';
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

const StyledMain = styled.div`
   min-height: 100vh;
   background-color: ${theme.colors.primaryBg};
   display: flex;
   @media ${theme.media.largeЕablet} {
      padding: 150px 0 0;
   }
`;
const DecorWrapper = styled.div`
   position: relative;
   @media ${theme.media.largeЕablet} {
      margin: 0px 20px;
   }
`;
const DecorImg = styled.img`
   position: absolute;
   top: -40%;
   left: -40%;

   display: none;
   @media ${theme.media.desktop} {
      display: block;
   }
`;
const StyledPhotoBorder = styled.div`
   max-width: 349px;
   max-height: 349px;
   overflow: hidden;
   border-radius: 50%;
   padding: 9px;
   background-image: linear-gradient(180deg, #e70faa 0%, #00c0fd 100%);

   @media ${theme.media.mobile} {
      max-width: 249px;
      max-height: 249px;
      padding: 5px;
   }
`;

const StyledPhoto = styled.img`
   width: 100%;
   height: 100%;
   border-radius: 50%;
`;

const GreetingsText = styled.span`
   ${font({ weight: 700, Fmax: 58, Fmin: 36 })}

   letter-spacing: -1px;
   color: ${theme.colors.mainTitleFont};
`;
const AcquaintanceText = styled.span`
   ${font({ weight: 700, Fmax: 58, Fmin: 36 })}

   letter-spacing: -1px;
   color: ${theme.colors.mainTitleFont};
`;
const StyledName = styled.h2`
   ${font({ weight: 700, Fmax: 58, Fmin: 36 })}

   letter-spacing: -1px;
   background: linear-gradient(90deg, ${theme.colors.gradientFont});
   -webkit-background-clip: text;
   -webkit-text-fill-color: transparent;
`;
const StyledMainTitle = styled.h1`
   ${font({ weight: 700, Fmax: 58, Fmin: 36 })}

   letter-spacing: -1px;
   color: ${theme.colors.mainTitleFont};
`;
const StyledMainTextContainer = styled.div`
   display: flex;
   flex-direction: column;
`;
