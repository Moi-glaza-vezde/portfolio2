import React from 'react';
import styled from 'styled-components';
import { DataJob } from '../dataJob/DtataJob';

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

const StyledInformationItem = styled.div``;

const JobTitle = styled.div`
   display: flex;
   justify-content: space-between;
`;
const JobData = styled.div`
   display: flex;
   justify-content: space-between;
`;
const Title = styled.h3``;
const WorkType = styled.span``;
