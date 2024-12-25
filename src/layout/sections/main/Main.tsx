import React from 'react';
import foto from '../../../assets/images/foto.jpg';
import { FlexWrapper } from '../../../components/FlexWrapper.Styled';
import { Container } from '../../../components/Container';
import vectorImg from '../../../assets/images/Abstract.svg';
import { S } from './Main_Styles';
export const Main: React.FC = () => {
   return (
      <S.Main>
         <Container>
            <FlexWrapper align="center" justify="space-around" wrap="wrap">
               <S.MainTextContainer>
                  <S.GreetingsText> Hi 👋,</S.GreetingsText>
                  <S.AcquaintanceText> My name is</S.AcquaintanceText>
                  <S.Name>Pavan MG</S.Name>
                  <S.MainTitle>I build things for web</S.MainTitle>
               </S.MainTextContainer>

               <S.DecorWrapper>
                  <S.DecorImg src={vectorImg} />

                  <S.PhotoBorder>
                     <S.Photo src={foto} alt="" />
                  </S.PhotoBorder>
               </S.DecorWrapper>
            </FlexWrapper>
         </Container>
      </S.Main>
   );
};
