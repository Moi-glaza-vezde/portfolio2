import React from 'react';
import styled from 'styled-components';
import { DataJob } from '../dataJob/DtataJob';
import { theme } from '../../../../styled/Theme';

type InformationItemPropsType = {
   // iconId: string;
   // text: string;
   title: string;
   workSchedule: string;
};
export const InformationItem = (props: InformationItemPropsType) => {
   return (
      <StyledInformationItem>
         <JobTitle>
            <Title>{props.title}</Title>
            <WorkType>{props.workSchedule}</WorkType>
         </JobTitle>
         <JobData>
            <DataJob
               iconId={'jobBuild'}
               text={'Dr. Rajkumar’s Learning App'}
               width={'12px'}
               height={'12px'}
               viewBox={'0 0 12 12'}
            />
            <DataJob
               iconId={'jobLocation'}
               text={'Bengaluru'}
               width={'12px'}
               height={'12px'}
               viewBox={'0 0 12 12'}
            />
            <DataJob
               iconId={'jobDate'}
               text={'Sep 2021 - Dec 2021'}
               width={'12px'}
               height={'12px'}
               viewBox={'0 0 12 12'}
            />
         </JobData>
      </StyledInformationItem>
   );
};

const StyledInformationItem = styled.div`
   padding: 24px 0;
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

const JobTitle = styled.div`
   display: flex;
   justify-content: space-between;
   margin: 5px 0;
`;
const JobData = styled.div`
   display: flex;
   justify-content: space-between;
`;
const Title = styled.h3`
   font-size: 20px;
   font-weight: 400;
   letter-spacing: 1px;
   text-align: left;
   text-underline-position: from-font;
   text-decoration-skip-ink: none;
   color: ${theme.colors.titleFont};
`;
const WorkType = styled.span`
   font-size: 9px;
   font-weight: 600;
   text-align: center;
   width: 84px;
   height: 24px;
   color: ${theme.colors.typeWorkfont};
   background-color: ${theme.colors.typeWorkBg};
   display: flex;
   align-items: center;
   justify-content: center;
   border-radius: 100px;
`;
