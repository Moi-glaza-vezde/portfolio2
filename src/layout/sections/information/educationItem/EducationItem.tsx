import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../../components/FlexWrapper.Styled';
import { DataJob } from '../dataJob/DtataJob';
import { theme } from '../../../../styled/Theme';
import { S } from '../Information_Stylea';

type EducationItemPropsType = {
   title: string;
   workSchedule: string;
};
export const EducationItem: React.FC<EducationItemPropsType> = (props: EducationItemPropsType) => {
   return (
      <S.EducationItem>
         <FlexWrapper align={'center'} justify={'space-between'} gap={'20px'}>
            <S.EducationTitle>{props.title}</S.EducationTitle>
            <S.EducationWorkType>{props.workSchedule}</S.EducationWorkType>
         </FlexWrapper>

         <FlexWrapper align={'center'} justify={'space-between'}>
            <DataJob
               iconId={'educationIcon'}
               text={'Bangalore Instutute of Technology'}
               width={'12px'}
               height={'12px'}
               viewBox={'0 0 12 12'}
            />
            <DataJob
               iconId={'jobDate'}
               text={'Aug 2015 - Dec 2020'}
               width={'12px'}
               height={'12px'}
               viewBox={'0 0 12 12'}
            />
         </FlexWrapper>
      </S.EducationItem>
   );
};
