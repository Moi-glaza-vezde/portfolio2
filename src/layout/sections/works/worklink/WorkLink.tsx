import React from 'react';
import { Icon } from '../../../../components/icon/Icon';
import { S } from '../Work_Styles';

type WorkLinkType = {
   iconId: string;
   linkText: string;
};
export const WorkLink: React.FC<WorkLinkType> = (props: WorkLinkType) => {
   return (
      <S.WorkLinkContainer>
         <Icon iconId={props.iconId} width="20px" height="20px" viewBox="0 0 20 20" />
         <S.WorkLink href="#">{props.linkText}</S.WorkLink>
      </S.WorkLinkContainer>
   );
};
