import React from 'react';
import foto from '../../../assets/images/foto.jpg';
import { FlexWrapper } from '../../../components/FlexWrapper.Styled';
import { Container } from '../../../components/Container';
import vectorImg from '../../../assets/images/Abstract.svg';
import { S } from './Main_Styles';
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';
export const Main: React.FC = () => {
   return (
      <S.Main>
         <Container>
            <FlexWrapper align="center" justify="space-between" wrap="wrap">
               <S.MainTextContainer>
                  <S.GreetingsText> Hi 👋,</S.GreetingsText>
                  <S.AcquaintanceText> My name is</S.AcquaintanceText>
                  <S.Name>Pavan MG</S.Name>

                  <S.MainTitle>
                     <p> A Frontend Developer</p>
                     <Typewriter
                        options={{
                           strings: ['A Frontend Developer'],
                           autoStart: true,
                           loop: true,
                           delay: 150,
                        }}
                     />
                  </S.MainTitle>
               </S.MainTextContainer>

               <S.DecorWrapper>
                  <S.DecorImg src={vectorImg} />
                  <Tilt
                     className="parallax-effect-img"
                     tiltMaxAngleX={40}
                     tiltMaxAngleY={40}
                     perspective={800}
                     transitionSpeed={1500}
                     scale={1.1}
                     gyroscope={true}>
                     <S.PhotoBorder>
                        <S.Photo src={foto} alt="" />
                     </S.PhotoBorder>
                  </Tilt>
               </S.DecorWrapper>
            </FlexWrapper>
         </Container>
      </S.Main>
   );
};
