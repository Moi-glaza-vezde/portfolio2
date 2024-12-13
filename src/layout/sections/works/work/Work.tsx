import React from 'react';
import styled from 'styled-components';
import { WorkLink } from '../worklink/WorkLink';
import { FlexWrapper } from '../../../../components/FlexWrapper.Styled';
import { theme } from '../../../../styled/Theme';

type WorkPropsType = {
   src: string;
   title: string;
   text: string;
   description: string;
   descriptionBold?: string;
};

export const Work = (props: WorkPropsType) => {
   return (
      <StyledWork>
         <Image src={props.src} alt="" />
         <TextWrapper>
            <WorkTitle>{props.title}</WorkTitle>
            <WorkText>{props.text}</WorkText>

            <WorkDescription>
               <WorkDescriptionBold> {props.descriptionBold}</WorkDescriptionBold>
               {props.description}
            </WorkDescription>

            <FlexWrapper justify="space-between">
               <WorkLink iconId={'link'} linkText={'Live Preview'} />
               <WorkLink iconId={'ghLink'} linkText={'Live Preview'} />
            </FlexWrapper>
         </TextWrapper>
      </StyledWork>
   );
};

const StyledWork = styled.div`
   overflow: hidden;
   border-radius: 20px;
   background-color: ${theme.colors.secondaryBg};
   max-width: 375px;
   margin: 10px;
   height: 568px;
`;
const Image = styled.img`
   width: 100%;
   height: 260px;
   object-fit: cover;
`;

const TextWrapper = styled.div`
   padding: 20px 25px 25px 25px;
`;

const WorkTitle = styled.h3`
   line-height: 1.2;
   color: ${theme.colors.titleFont};
   font-size: 28px;
   font-weight: 500;
   //text-align: center;
`;
const WorkText = styled.p`
   font-size: 18px;
   font-weight: 300;
   color: ${theme.colors.titleFont};
   margin: 15px 0;
`;
const WorkDescriptionBold = styled.span`
   font-size: 16px;
   font-weight: 400;
   line-height: 26px;
   color: ${theme.colors.titleFont};
`;
const WorkDescription = styled.span`
   font-size: 14px;
   font-weight: 300;
   color: ${theme.colors.titleFont};
`;
