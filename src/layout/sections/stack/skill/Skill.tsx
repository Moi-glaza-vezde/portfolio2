import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../../../components/icon/Icon';
import { theme } from '../../../../styled/Theme';

type SkillPropsType = {
   iconId: string;
   title: string;
   text: string;
};

export const Skill = (props: SkillPropsType) => {
   return (
      <StyledSkill>
         <Icon iconId={props.iconId} width={'120px'} height={'120px'} />
         <SkillTitle>{props.title}</SkillTitle>
         <SkillText>{props.text}</SkillText>
      </StyledSkill>
   );
};

const StyledSkill = styled.div`
   flex-grow: 1;
   width: 330px;
   margin: 30px 10px;
   display: flex;
   flex-direction: column;
   align-items: center;
`;
const SkillTitle = styled.h3`
   color: ${theme.colors.titleFont};
   text-transform: uppercase;
   font-size: 30px;
   margin: 20px 0;
`;
const SkillText = styled.p`
   color: ${theme.colors.titleFont};
   text-align: center;
   font-size: 18px;
`;
