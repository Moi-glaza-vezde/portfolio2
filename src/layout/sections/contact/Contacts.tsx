import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle.Styled';
import { theme } from '../../../styled/Theme';
import { Container } from '../../../components/Container';

export const Contacts = () => {
   return (
      <StyledContact>
         <Container>
            <SectionTitle>For any questions please mail me:</SectionTitle>
            <StyledEmail href="mailto:#">hi@pavanmg.in</StyledEmail>
         </Container>
      </StyledContact>
   );
};
const StyledContact = styled.section`
   ${SectionTitle} {
      margin-bottom: 0;

      font-family: 'DM Sans', sans-serif;
      font-size: 58px;
      font-weight: 700;

      letter-spacing: -1px;
      text-align: center;
   }
`;
const StyledEmail = styled.a`
   display: block;
   font-family: ' DM Sans', sans-serif;
   font-size: 58px;
   font-weight: 700;

   letter-spacing: -1px;
   text-align: center;

   background: linear-gradient(90deg, ${theme.colors.gradientFont});
   -webkit-background-clip: text;
   -webkit-text-fill-color: transparent;
`;
