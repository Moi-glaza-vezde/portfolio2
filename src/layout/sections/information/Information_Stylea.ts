//-------Information

import styled from 'styled-components';
import { theme } from '../../../styled/Theme';

const Information = styled.section``;
const InformationContainer = styled.section`
   max-width: 695px;
   padding: 0 0;
`;
const Title = styled.h2`
   font-size: 42px;
   font-weight: 700;
   letter-spacing: -0.4000000059604645px;
   color: ${theme.colors.mainTitleFont};
`;
const Text = styled.p`
   margin: 40px 0;

   font-size: 18px;
   font-weight: 400;
   color: ${theme.colors.titleFont};
`;

const ItemWrapper = styled.div`
   margin: 40px 0;
`;

//-------Information item
const InformationItem = styled.div`
   padding: 24px 0;
   position: relative;

   &::before {
      position: absolute;
      bottom: 0;
      content: '';
      display: inline-block;
      width: 100%;
      height: 2px;
      background-color: ${theme.colors.lineBg};
   }
`;

const JobTitleWrapper = styled.div`
   display: flex;
   justify-content: space-between;
   margin: 5px 0;
   gap: 10px;
`;
const JobData = styled.div`
   display: flex;
   justify-content: space-between;
   flex-wrap: wrap;
`;
const JobTitle = styled.h3`
   font-size: 20px;
   font-weight: 400;
   letter-spacing: 1px;
   text-align: left;
   text-underline-position: from-font;
   text-decoration-skip-ink: none;
   color: ${theme.colors.titleFont};
`;
const WorkType = styled.span`
   font-size: 9px;
   font-weight: 600;
   text-align: center;
   min-width: 84px;
   height: 24px;
   color: ${theme.colors.typeWorkfont};
   background-color: ${theme.colors.typeWorkBg};
   display: flex;
   align-items: center;
   justify-content: center;
   border-radius: 100px;
`;

//--------Education

const EducationItem = styled.div`
   padding-bottom: 24px;
   margin-top: 40px;
   position: relative;
   &::before {
      position: absolute;
      bottom: 0;
      content: '';
      display: inline-block;
      width: 100%;
      height: 2px;
      background-color: ${theme.colors.lineBg};
   }
`;
const EducationTitle = styled.h3`
   font-size: 20px;
   font-weight: 400;
   letter-spacing: 1px;
   margin-bottom: 10px;

   color: ${theme.colors.titleFont};
`;
const EducationWorkType = styled.span`
   font-size: 9px;
   font-weight: 600;
   line-height: 1.2;
   min-width: 84px;
   height: 24px;
   color: ${theme.colors.typeWorkfont};
   background-color: ${theme.colors.typeWorkBg};
   display: flex;
   align-items: center;
   justify-content: center;
   border-radius: 100px;
`;
export const S = {
   Information,
   InformationContainer,
   Title,
   Text,
   ItemWrapper,

   InformationItem,
   JobTitleWrapper,
   JobData,
   JobTitle,
   WorkType,

   EducationItem,
   EducationTitle,
   EducationWorkType,
};
