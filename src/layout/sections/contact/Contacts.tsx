import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle.Styled';

export const Contacts = () => {
   return (
      <StyledContact>
         <SectionTitle>For any questions please mail me:</SectionTitle>
         <StyledEmail href="mailto:#">hi@pavanmg.in</StyledEmail>
      </StyledContact>
   );
};
const StyledContact = styled.section`
   min-height: 50vh;
   background-color: #ff5e5eac;
`;
const StyledEmail = styled.a``;
