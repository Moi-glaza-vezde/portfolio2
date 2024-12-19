import React from 'react';
import styled from 'styled-components';
import { WorkLink } from '../worklink/WorkLink';
import { FlexWrapper } from '../../../../components/FlexWrapper.Styled';
import { theme } from '../../../../styled/Theme';
import { font } from '../../../../components/Common';

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
   //width: 330px;
   // flex-grow: 1;
   margin: 10px;
   height: 568px;
   @media ${theme.media.tablet} {
      max-width: 600px;
      height: 100%;
   }
`;
const Image = styled.img`
   width: 100%;
   height: 260px;
   object-fit: cover;
`;

const TextWrapper = styled.div`
   padding: 20px 25px 25px 25px;
   @media ${theme.media.card} {
      padding: 15px 20px 20px 20px;
   }
`;

const WorkTitle = styled.h3`
   //  ${font({ weight: 500, Fmax: 26, Fmin: 24, lineHeight: 1.2 })}

   color: ${theme.colors.titleFont};
   font-size: 28px;
   font-weight: 500;
   //text-align: center;
   @media ${theme.media.tablet} {
      font-size: 35px;
   }
   @media ${theme.media.mobile} {
      font-size: 28px;
   }
   @media ${theme.media.card} {
      font-size: 24px;
   }
`;
const WorkText = styled.p`
   // ${font({ weight: 300, Fmax: 18, Fmin: 16, lineHeight: 1.6 })}
   font-size: 18px;
   font-weight: 300;
   color: ${theme.colors.titleFont};
   margin: 15px 0;
   @media ${theme.media.tablet} {
      font-size: 22px;
   }
   @media ${theme.media.mobile} {
      font-size: 20px;
   }
   @media ${theme.media.card} {
      font-size: 18px;
   }
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
