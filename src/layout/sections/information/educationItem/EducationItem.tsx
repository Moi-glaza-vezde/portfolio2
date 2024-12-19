import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../../components/FlexWrapper.Styled';
import { DataJob } from '../dataJob/DtataJob';
import { theme } from '../../../../styled/Theme';

type EducationItemPropsType = {
   title: string;
   workSchedule: string;
};
export const EducationItem = (props: EducationItemPropsType) => {
   return (
      <StyledEducationItem>
         <FlexWrapper align={'center'} justify={'space-between'} gap={'20px'}>
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

const StyledEducationItem = styled.div`
   padding-bottom: 24px;
   margin-top: 40px;
   position: relative;
   &::before {
      position: absolute;
      bottom: 0;
      content: '';
      display: inline-block;
      width: 100%;
      height: 2px;
      background-color: ${theme.colors.lineBg};
   }
`;
const StyledEducationTitle = styled.h3`
   font-size: 20px;
   font-weight: 400;
   letter-spacing: 1px;
   margin-bottom: 10px;

   color: ${theme.colors.titleFont};
`;
const StyledEducationWorkType = styled.span`
   font-size: 9px;
   font-weight: 600;
   //text-align: center;
   line-height: 1.2;
   min-width: 84px;
   height: 24px;
   color: ${theme.colors.typeWorkfont};
   background-color: ${theme.colors.typeWorkBg};
   display: flex;
   align-items: center;
   justify-content: center;
   border-radius: 100px;
`;
