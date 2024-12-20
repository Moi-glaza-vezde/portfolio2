import styled from 'styled-components';
import { theme } from '../../../styled/Theme';

const Skill = styled.div`
   flex-grow: 1;
   width: 330px;
   margin: 30px 10px;
   display: flex;
   flex-direction: column;
   align-items: center;
`;
const Title = styled.h3`
   color: ${theme.colors.titleFont};
   text-transform: uppercase;
   font-size: 30px;
   margin: 20px 0;
`;
const Text = styled.p`
   color: ${theme.colors.titleFont};
   text-align: center;
   font-size: 18px;
`;

export const S = {
   Skill,
   Title,
   Text,
};
