import React from 'react';
import { Icon } from '../../../../components/icon/Icon';
import { S } from '../Skills_Styles';

type SkillPropsType = {
   iconId: string;
   title: string;
   text: string;
};

export const Skill: React.FC<SkillPropsType> = (props: SkillPropsType) => {
   return (
      <S.Skill>
         <Icon iconId={props.iconId} width={'120px'} height={'120px'} />
         <S.Title>{props.title}</S.Title>
         <S.Text>{props.text}</S.Text>
      </S.Skill>
   );
};
