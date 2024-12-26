import React from 'react';
import { SectionTitle } from '../../../components/SectionTitle.Styled';
import { Container } from '../../../components/Container';
import { S } from './Contact_Styles';

export const Contacts: React.FC = () => {
   return (
      <S.Contact id={'contact'}>
         <Container>
            <SectionTitle>For any questions please mail me:</SectionTitle>
            <S.Email href="mailto:#">hi@pavanmg.in</S.Email>
         </Container>
      </S.Contact>
   );
};
