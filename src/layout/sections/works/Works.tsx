import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle.Styled';
import { SectionText } from '../../../components/SectionText.Styled';
import { FlexWrapper } from '../../../components/FlexWrapper.Styled';
import { Work } from './work/Work';
import projectImg1 from '../../../assets/images/project1.jpg';
import projectImg2 from '../../../assets/images/project2.jpg';
import projectImg3 from '../../../assets/images/project3.jpg';
import projectImg4 from '../../../assets/images/project4.jpg';
import projectImg5 from '../../../assets/images/project5.jpg';
import projectImg6 from '../../../assets/images/project6.jpg';
import { Container } from '../../../components/Container';

export const Works = () => {
   return (
      <StyledWorks>
         <Container>
            <SectionTitle>Projects</SectionTitle>
            <SectionText>Things I’ve built so far</SectionText>
            <FlexWrapper wrap="wrap" justify="space-between">
               <Work
                  title={'Project Tile goes here1'}
                  text={
                     'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'
                  }
                  src={projectImg1}
                  descriptionBold={'Tech stack :'}
                  description={' HTML , JavaScript, SASS, React'}
               />
               <Work
                  title={'Project Tile goes here2'}
                  text={
                     'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'
                  }
                  src={projectImg2}
                  descriptionBold={'Tech stack :'}
                  description={' HTML , JavaScript, SASS, React'}
               />
               <Work
                  title={'Project Tile goes here3'}
                  text={
                     'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'
                  }
                  src={projectImg3}
                  descriptionBold={'Tech stack :'}
                  description={' HTML , JavaScript, SASS, React'}
               />
               <Work
                  title={'Project Tile goes here4'}
                  text={
                     'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'
                  }
                  src={projectImg4}
                  descriptionBold={'Tech stack :'}
                  description={' HTML , JavaScript, SASS, React'}
               />
               <Work
                  title={'Project Tile goes here5'}
                  text={
                     'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'
                  }
                  src={projectImg5}
                  descriptionBold={'Tech stack :'}
                  description={' HTML , JavaScript, SASS, React'}
               />
               <Work
                  title={'Project Tile goes here6'}
                  text={
                     'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'
                  }
                  src={projectImg6}
                  descriptionBold={'Tech stack :'}
                  description={' HTML , JavaScript, SASS, React'}
               />
            </FlexWrapper>
         </Container>
      </StyledWorks>
   );
};

const StyledWorks = styled.section``;
