import React from 'react';
import styled from 'styled-components';
import { InformationItem } from './informationItem/InformationItem';
import { EducationItem } from './educationItem/EducationItem';
import { Container } from '../../../components/Container';
import { theme } from '../../../styled/Theme';

export const Information = () => {
   return (
      <StyledInformation>
         <Container>
            <StyledInformationContainer>
               <InformationTitle>About Me</InformationTitle>
               <InformationText>
                  The Generator App is an online tool that helps you to export ready-made templates
                  ready to work as your future website. It helps you to combine slides, panels and
                  other components and export it as a set of static files: HTML/CSS/JS.
               </InformationText>
               <InformationTitle>Work Experience</InformationTitle>
               <ItemErapper>
                  <InformationItem workSchedule={'Full Time'} title={'Junior Web Developer'} />
                  <InformationItem workSchedule={'Internship'} title={'Web Development Intern'} />
                  <InformationItem workSchedule={'Internship'} title={'SEO / SEM Specialist'} />
               </ItemErapper>
               <InformationTitle>Education</InformationTitle>
               <EducationItem
                  title={'Bachelor in Electronics & Communication'}
                  workSchedule={'Full Time'}
               />
            </StyledInformationContainer>
         </Container>
      </StyledInformation>
   );
};

const StyledInformation = styled.section``;
const StyledInformationContainer = styled.section`
   max-width: 695px;
   padding: 0 0;
`;
const InformationTitle = styled.h2`
   font-size: 42px;
   font-weight: 700;
   letter-spacing: -0.4000000059604645px;
   color: ${theme.colors.mainTitleFont};
   //  margin-bottom: 40px;
`;
const InformationText = styled.p`
   margin: 40px 0;

   font-size: 18px;
   font-weight: 400;
   color: ${theme.colors.titleFont};
`;

const ItemErapper = styled.div`
   margin: 40px 0;
`;
