import React from 'react';
import { Icon } from '../../../../components/icon/Icon';
import styled from 'styled-components';

type DataJobType = {
   iconId: string;
   text: string;
   width: string;
   height: string;
   viewBox: string;
};
export const DataJob = (props: DataJobType) => {
   return (
      <StyledDataJob>
         <Icon
            iconId={props.iconId}
            width={props.width}
            height={props.height}
            viewBox={props.viewBox}
         />
         <StyledJubText>{props.text}</StyledJubText>
      </StyledDataJob>
   );
};

const StyledDataJob = styled.div`
   display: flex;
   gap: 7px;
`;
const StyledJubText = styled.span`
   align-self: center;
`;
