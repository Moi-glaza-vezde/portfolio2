import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../../../components/icon/Icon';

export const Skill = () => {
   return (
      <StyledSkill>
         <Icon iconId="html" />
         <SkillTitle>html 5</SkillTitle>
         <SkillText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque consectetur nobis maxime
            voluptatibus nisi qui culpa nemo voluptates repellendus numquam, nam odit
         </SkillText>
      </StyledSkill>
   );
};

const StyledSkill = styled.div`
   min-height: 100vh;
   background-color: #fc95f2ac;
   width: 100%;
`;
const SkillTitle = styled.h3``;
const SkillText = styled.span``;
