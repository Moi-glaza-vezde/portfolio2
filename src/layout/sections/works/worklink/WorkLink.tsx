import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../../../components/icon/Icon';
import { theme } from '../../../../styled/Theme';

type WorkLinkType = {
   iconId: string;
   linkText: string;
};
export const WorkLink = (props: WorkLinkType) => {
   return (
      <StyledWorkLinkContainer>
         <Icon iconId={props.iconId} width="20px" height="20px" viewBox="0 0 20 20" />
         <StyledWorkLink href="#">{props.linkText}</StyledWorkLink>
      </StyledWorkLinkContainer>
   );
};

const StyledWorkLinkContainer = styled.div`
   margin-top: 20px;
   width: 100%;
   height: 30px;
   display: flex;
   align-items: center;
   gap: 10px;
`;
const StyledWorkLink = styled.a`
   align-self: center;
   text-decoration: underline;

   font-size: 16px;
   font-weight: 400;

   color: ${theme.colors.linkColor};
`;
