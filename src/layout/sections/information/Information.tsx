import React from 'react';
import styled from 'styled-components';
import { InformationItem } from './informationItem/InformationItem';
import { EducationItem } from './educationItem/EducationItem';

export const Information = () => {
   return (
      <StyledInformation>
         <InformationTitle>About Me</InformationTitle>
         <InformationText>
            The Generator App is an online tool that helps you to export ready-made templates ready
            to work as your future website. It helps you to combine slides, panels and other
            components and export it as a set of static files: HTML/CSS/JS.
         </InformationText>
         <InformationTitle>Work Experience</InformationTitle>

         <InformationItem workSchedule={'Full Time'} title={'Junior Web Developer'} />
         <InformationItem workSchedule={'Internship'} title={'Web Development Intern'} />
         <InformationItem workSchedule={'Internship'} title={'SEO / SEM Specialist'} />
         <InformationTitle>Education</InformationTitle>
         <EducationItem
            title={'Bachelor in Electronics & Communication'}
            workSchedule={'Full Time'}
         />
      </StyledInformation>
   );
};

const StyledInformation = styled.section`
   background-color: #eaff5eac;
   max-width: 704px;
`;
const InformationTitle = styled.h2``;
const InformationText = styled.p``;
