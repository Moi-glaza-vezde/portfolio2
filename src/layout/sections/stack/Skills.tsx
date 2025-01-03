import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper.Styled';
import { Skill } from './skill/Skill';
import { SectionText } from '../../../components/SectionText.Styled';
import { SectionTitle } from '../../../components/SectionTitle.Styled';
import { theme } from '../../../styled/Theme';
import { Container } from '../../../components/Container';
import { Fade } from 'react-awesome-reveal';

const skillData = [
   {
      iconId: 'html',
      title: 'html 5',
      text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque consectetur nobis maximeLorem ipsum dolor sit amet consectetur adipisicing elit. Eaque consectetur nobis maxime',
   },
   {
      iconId: 'css',
      title: 'css 3',
      text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque consectetur nobis maximeLorem ipsum dolor sit amet consectetur adipisicing elit. Eaque consectetur nobis maxime',
   },
   {
      iconId: 'javaScript',
      title: 'javaScript',
      text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque consectetur nobis maximeLorem ipsum dolor sit amet consectetur adipisicing elit. Eaque consectetur nobis maxime',
   },
   {
      iconId: 'sass',
      title: 'sass',
      text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque consectetur nobis maximeLorem ipsum dolor sit amet consectetur adipisicing elit. Eaque consectetur nobis maxime',
   },
   {
      iconId: 'react',
      title: 'react',
      text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque consectetur nobis maximeLorem ipsum dolor sit amet consectetur adipisicing elit. Eaque consectetur nobis maxime',
   },
   {
      iconId: 'gHub',
      title: 'gitHub',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque consectetur nobis maximeLorem ipsum dolor sit amet consectetur adipisicing elit. Eaque consectetur nobis maxime',
   },
];

export const Skills: React.FC = () => {
   return (
      <StyledSkills id={'techStack'}>
         <Container>
            <SectionTitle>My Tech Stack</SectionTitle>
            <SectionText> Technologies I’ve been working with recently</SectionText>
            <FlexWrapper wrap={'wrap'} justify={'space-around'}>
               <Fade cascade={true} damping={0.2}>
                  {skillData.map((s, index) => {
                     return <Skill key={index} iconId={s.iconId} title={s.title} text={s.text} />;
                  })}
               </Fade>
            </FlexWrapper>
         </Container>
      </StyledSkills>
   );
};

const StyledSkills = styled.section`
   padding-top: 120px;

   background-color: ${theme.colors.primaryBg};
   position: relative;
`;
