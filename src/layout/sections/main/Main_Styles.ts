import styled from 'styled-components';
import { theme } from '../../../styled/Theme';
import { FlexWrapper } from '../../../components/FlexWrapper.Styled';
import { font } from '../../../components/Common';

const Main = styled.div`
   min-height: 92vh;

   background-color: ${theme.colors.primaryBg};

   display: flex;
   align-items: center;
   ${FlexWrapper} {
      padding-top: 20px;
   }
   @media ${theme.media.largeЕablet} {
      padding: 150px 0 0;
      ${FlexWrapper} {
         gap: 50px;
      }
   }
`;
const DecorWrapper = styled.div`
   position: relative;
   @media ${theme.media.largeЕablet} {
      margin: 0px 20px;
   }
`;
const DecorImg = styled.img`
   position: absolute;
   top: -40%;
   left: -40%;

   display: none;
   @media ${theme.media.desktop} {
      display: block;
   }
`;
const PhotoBorder = styled.div`
   max-width: 349px;
   max-height: 349px;
   overflow: hidden;
   border-radius: 50%;
   padding: 9px;
   background-image: linear-gradient(180deg, #e70faa 0%, #00c0fd 100%);

   @media ${theme.media.mobile} {
      max-width: 249px;
      max-height: 249px;
      padding: 5px;
   }
`;

const Photo = styled.img`
   width: 100%;
   height: 100%;
   border-radius: 50%;
`;

const GreetingsText = styled.span`
   margin-bottom: 10px;
   ${font({ weight: 700, Fmax: 50, Fmin: 36 })}

   letter-spacing: -1px;
   color: ${theme.colors.mainTitleFont};
`;
const AcquaintanceText = styled.span`
   ${font({ weight: 700, Fmax: 50, Fmin: 36 })}

   letter-spacing: -1px;
   color: ${theme.colors.mainTitleFont};
`;
const Name = styled.h2`
   ${font({ weight: 700, Fmax: 50, Fmin: 36 })}

   letter-spacing: -1px;
   background: linear-gradient(90deg, ${theme.colors.gradientFont});
   -webkit-background-clip: text;
   -webkit-text-fill-color: transparent;
`;
const MainTitle = styled.h1`
   ${font({ weight: 700, Fmax: 52, Fmin: 36 })}

   letter-spacing: -1px;
   color: ${theme.colors.mainTitleFont};
`;
const MainTextContainer = styled.div`
   display: flex;
   flex-direction: column;
`;

export const S = {
   Main,
   DecorWrapper,
   DecorImg,
   PhotoBorder,
   Photo,
   GreetingsText,
   AcquaintanceText,
   Name,
   MainTitle,
   MainTextContainer,
};
