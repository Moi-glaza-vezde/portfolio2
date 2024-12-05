import React from 'react';
import foto from '../../../assets/images/foto.jpg';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper.Styled';
export const Main = () => {
   return (
      <StyledMain>
         <FlexWrapper align="center" justify="space-around">
            <StyledMainTextContainer>
               <span> Hi 👋, My name is</span>
               <StyledName>Pavan MG</StyledName>
               <StyledMainTitle>I build things for web</StyledMainTitle>
            </StyledMainTextContainer>
            <StyledPhotoBorder>
               <StyledPhoto src={foto} alt="" />
            </StyledPhotoBorder>
         </FlexWrapper>
      </StyledMain>
   );
};

const StyledPhotoBorder = styled.div`
   max-width: 349px;
   height: 349px;
   overflow: hidden;
   border: 3px solid #000000;
   border-radius: 50%;
`;
const StyledPhoto = styled.img`
   width: 100%;
`;
const StyledMain = styled.div`
   min-height: 100vh;
   background-color: #fc9595ac;
`;
const StyledMainTitle = styled.h1``;
const StyledName = styled.h2``;
const StyledMainTextContainer = styled.div``;
