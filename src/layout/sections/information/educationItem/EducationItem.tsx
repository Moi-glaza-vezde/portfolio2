import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../../components/FlexWrapper.Styled';
import { DataJob } from '../dataJob/DtataJob';

type EducationItemPropsType = {
   title: string;
   workSchedule: string;
};
export const EducationItem = (props: EducationItemPropsType) => {
   return (
      <StyledEducationItem>
         <FlexWrapper align={'center'} justify={'space-between'}>
            <StyledEducationTitle>{props.title}</StyledEducationTitle>
            <StyledEducationWorkType>{props.workSchedule}</StyledEducationWorkType>
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
      </StyledEducationItem>
   );
};

const StyledEducationItem = styled.div``;
const StyledEducationTitle = styled.h3``;
const StyledEducationWorkType = styled.span``;
