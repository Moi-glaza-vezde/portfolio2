import React from 'react';
import { Icon } from '../../../../components/icon/Icon';
import styled from 'styled-components';
import { theme } from '../../../../styled/Theme';

type DataJobType = {
   iconId: string;
   text: string;
   width: string;
   height: string;
   viewBox: string;
};
export const DataJob: React.FC<DataJobType> = (props: DataJobType) => {
   return (
      <StyledDataJob>
         <Icon
            iconId={props.iconId}
            width={props.width}
            height={props.height}
            viewBox={props.viewBox}
         />
         <StyledJobText>{props.text}</StyledJobText>
      </StyledDataJob>
   );
};

const StyledDataJob = styled.div`
   display: flex;
   align-items: center;
   gap: 7px;
`;
const StyledJobText = styled.span`
   align-items: center;
   align-self: center;

   font-size: 12px;
   font-weight: 500;
   line-height: 28px;
   letter-spacing: 1px;
   color: ${theme.colors.secondaryFont};
`;
