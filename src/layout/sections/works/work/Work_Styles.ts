import styled from 'styled-components';
import { theme } from '../../../../styled/Theme';

const Work = styled.div`
   overflow: hidden;
   border-radius: 20px;
   background-color: ${theme.colors.secondaryBg};
   max-width: 375px;

   height: 568px;
   margin: 0 5px 70px 5px;

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
   color: ${theme.colors.titleFont};
   font-size: 28px;
   font-weight: 500;
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
//--------------- work link

const WorkLinkContainer = styled.div`
   margin-top: 20px;
   width: 100%;
   height: 30px;
   display: flex;
   align-items: center;
   gap: 10px;
`;
const WorkLink = styled.a`
   align-self: center;
   text-decoration: underline;

   font-size: 16px;
   font-weight: 400;

   color: ${theme.colors.linkColor};
`;

export const S = {
   Work,
   Image,
   TextWrapper,
   WorkTitle,
   WorkText,
   WorkDescriptionBold,
   WorkDescription,

   WorkLinkContainer,
   WorkLink,
};
