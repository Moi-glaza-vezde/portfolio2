import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../../../components/icon/Icon';

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
   /* display: flex;
   gap: 7px; */
`;
const StyledWorkLink = styled.a`
   align-self: center;
`;
