import React from 'react';
import styled from 'styled-components';
import { theme } from '../styled/Theme';
import { font } from './Common';

export const SectionTitle = styled.h2`
   ${font({ weight: 700, Fmax: 48, Fmin: 38 })}

   /* font-size: 48px;
   font-weight: 700; */
   text-align: center;
   color: ${theme.colors.titleFont};
   margin-bottom: 35px;
`;
