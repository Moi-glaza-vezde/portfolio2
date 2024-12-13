import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper.Styled';
import { Skill } from './skill/Skill';
import { SectionText } from '../../../components/SectionText.Styled';
import { SectionTitle } from '../../../components/SectionTitle.Styled';
import { theme } from '../../../styled/Theme';
import { Container } from '../../../components/Container';

export const Skills = () => {
   return (
      <StyledSkills>
         <Container>
            <SectionTitle>My Tech Stack</SectionTitle>
            <SectionText> Technologies I’ve been working with recently</SectionText>
            <FlexWrapper wrap="wrap" justify="space-around">
               <Skill
                  iconId={'html'}
                  title={'html 5'}
                  text={
                     ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque consectetur nobis maximeLorem ipsum dolor sit amet consectetur adipisicing elit. Eaque consectetur nobis maxime'
                  }
               />
               <Skill
                  iconId={'css'}
                  title={'css 3'}
                  text={
                     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque consectetur nobis maximeLorem ipsum dolor sit amet consectetur adipisicing elit. Eaque consectetur nobis maxime'
                  }
               />
               <Skill
                  iconId={'javaScript'}
                  title={'javaScript'}
                  text={
                     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque consectetur nobis maximeLorem ipsum dolor sit amet consectetur adipisicing elit. Eaque consectetur nobis maxime'
                  }
               />
               <Skill
                  iconId={'sass'}
                  title={'sass'}
                  text={
                     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque consectetur nobis maximeLorem ipsum dolor sit amet consectetur adipisicing elit. Eaque consectetur nobis maxime'
                  }
               />
               <Skill
                  iconId={'react'}
                  title={'react'}
                  text={
                     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque consectetur nobis maximeLorem ipsum dolor sit amet consectetur adipisicing elit. Eaque consectetur nobis maxime'
                  }
               />
               <Skill
                  iconId={'gHub'}
                  title={'gitHub'}
                  text={
                     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque consectetur nobis maximeLorem ipsum dolor sit amet consectetur adipisicing elit. Eaque consectetur nobis maxime'
                  }
               />
            </FlexWrapper>
         </Container>
      </StyledSkills>
   );
};

const StyledSkills = styled.section`
   background-color: ${theme.colors.primaryBg};
`;
