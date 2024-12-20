import React from 'react';
import { WorkLink } from '../worklink/WorkLink';
import { FlexWrapper } from '../../../../components/FlexWrapper.Styled';
import { S } from './Work_Styles';

type WorkPropsType = {
   src: string;
   title: string;
   text: string;
   description: string;
   descriptionBold?: string;
};

export const Work: React.FC<WorkPropsType> = (props: WorkPropsType) => {
   return (
      <S.Work>
         <S.Image src={props.src} alt="" />
         <S.TextWrapper>
            <S.WorkTitle>{props.title}</S.WorkTitle>
            <S.WorkText>{props.text}</S.WorkText>

            <S.WorkDescription>
               <S.WorkDescriptionBold> {props.descriptionBold}</S.WorkDescriptionBold>
               {props.description}
            </S.WorkDescription>

            <FlexWrapper justify="space-between">
               <WorkLink iconId={'link'} linkText={'Live Preview'} />
               <WorkLink iconId={'ghLink'} linkText={'Live Preview'} />
            </FlexWrapper>
         </S.TextWrapper>
      </S.Work>
   );
};
