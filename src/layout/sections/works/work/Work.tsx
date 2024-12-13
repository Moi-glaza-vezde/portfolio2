import React from 'react';
import styled from 'styled-components';
import { WorkLink } from '../worklink/WorkLink';
import { FlexWrapper } from '../../../../components/FlexWrapper.Styled';

type WorkPropsType = {
   src: string;
   title: string;
   text: string;
   description: string;
};

export const Work = (props: WorkPropsType) => {
   return (
      <StyledWork>
         <Image src={props.src} alt="" />
         <WorkTitle>{props.title}</WorkTitle>
         <WorkText>{props.text}</WorkText>
         <WorkDescription>{props.description}</WorkDescription>

         <FlexWrapper justify="space-between">
            <WorkLink iconId={'link'} linkText={'Live Preview'} />
            <WorkLink iconId={'ghLink'} linkText={'Live Preview'} />
         </FlexWrapper>
      </StyledWork>
   );
};

const StyledWork = styled.div`
   background-color: #7e5effac;
   max-width: 375px;
   margin: 10px;
   height: 566px;
`;
const Image = styled.img`
   width: 100%;
   height: 260px;
   object-fit: cover;
`;
const WorkTitle = styled.h3``;
const WorkText = styled.p``;
const WorkDescription = styled.span``;
