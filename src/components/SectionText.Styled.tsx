import React from 'react';
import styled from 'styled-components';
import { theme } from '../styled/Theme';
import { font } from './Common';

export const SectionText = styled.span`
   ${font({ weight: 400, Fmax: 32, Fmin: 24 })}

   text-align: center;
   display: block;
   /* font-size: 32px;
   font-weight: 400; */
   color: ${theme.colors.secondaryFont};
   margin-bottom: 120px;
`;
