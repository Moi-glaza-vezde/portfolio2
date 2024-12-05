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
         <FlexWrapper wrap="wrap" justify="space-between">
            <Skill />
         </FlexWrapper>
      </StyledSkills>
   );
};

const StyledSkills = styled.section``;
