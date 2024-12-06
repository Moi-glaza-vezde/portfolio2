import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper.Styled';
import { Skill } from './skill/Skill';
import { SectionText } from '../../../components/SectionText.Styled';
import { SectionTitle } from '../../../components/SectionTitle.Styled';

export const Skills = () => {
   return (
      <StyledSkills>
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
      </StyledSkills>
   );
};

const StyledSkills = styled.section`
   background-color: #615effac;
   min-height: 100vh;
`;
