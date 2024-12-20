import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle.Styled';
import { font } from '../../../components/Common';
import { theme } from '../../../styled/Theme';

const Contact = styled.section`
   ${SectionTitle} {
      ${font({ family: "'DM Sans', sans-serif", weight: 700, Fmax: 56, Fmin: 36 })}
      margin-bottom: 0;

      letter-spacing: -1px;
      text-align: center;
   }
`;
const Email = styled.a`
   ${font({ family: "'DM Sans', sans-serif", weight: 700, Fmax: 50, Fmin: 36 })}

   display: block;

   letter-spacing: -1px;
   text-align: center;

   background: linear-gradient(90deg, ${theme.colors.gradientFont});
   -webkit-background-clip: text;
   -webkit-text-fill-color: transparent;
`;

export const S = {
   Contact,
   Email,
};
