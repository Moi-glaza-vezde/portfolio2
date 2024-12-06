import React from 'react';
import styled from 'styled-components';
import { DataJob } from '../dataJob/DtataJob';

type InformationItemPropsType = {
   iconId: string;
   text: string;
};
export const InformationItem = (props: InformationItemPropsType) => {
   return (
      <StyledInformationItem>
         <JobTitle>
            <Title>Junior Web Developer</Title>
            <WorkType>Full Time</WorkType>
         </JobTitle>
         <JobData>
            <DataJob
               iconId={props.iconId}
               text={props.text}
               width={'12px'}
               height={'12px'}
               viewBox={'0 0 12 12'}
            />
         </JobData>
      </StyledInformationItem>
   );
};

const StyledInformationItem = styled.div``;

const JobTitle = styled.div``;
const JobData = styled.div``;
const Title = styled.h3``;
const WorkType = styled.span``;
