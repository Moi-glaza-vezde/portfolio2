import React from 'react';
import { InformationItem } from './informationItem/InformationItem';
import { EducationItem } from './educationItem/EducationItem';
import { Container } from '../../../components/Container';
import { S } from './Information_Stylea';

const infoData = [
   { workSchedule: 'Full Time', title: 'Junior Web Developer' },
   { workSchedule: 'Internship', title: 'Web Development Intern' },
   { workSchedule: 'Internship', title: 'SEO / SEM Specialist' },
];
export const Information: React.FC = () => {
   return (
      <S.Information id={'about'}>
         <Container>
            <S.InformationContainer>
               <S.Title>About Me</S.Title>
               <S.Text>
                  The Generator App is an online tool that helps you to export ready-made templates
                  ready to work as your future website. It helps you to combine slides, panels and
                  other components and export it as a set of static files: HTML/CSS/JS.
               </S.Text>
               <S.Title>Work Experience</S.Title>
               <S.ItemWrapper>
                  {infoData.map((i, index) => {
                     return (
                        <InformationItem
                           key={index}
                           workSchedule={i.workSchedule}
                           title={i.title}
                        />
                     );
                  })}
               </S.ItemWrapper>
               <S.Title>Education</S.Title>
               <EducationItem
                  title={'Bachelor in Electronics & Communication'}
                  workSchedule={'Full Time'}
               />
            </S.InformationContainer>
         </Container>
      </S.Information>
   );
};
