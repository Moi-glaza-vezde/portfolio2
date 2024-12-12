import React from 'react';
import { Icon } from '../icon/Icon';
import styled from 'styled-components';

type SocialContactsPropsType = {
   display?: string;
   gap?: string;
};
export const SocialContacts = (props: SocialContactsPropsType) => {
   return (
      <StyledSocialContacts gap={props.gap}>
         <li>
            <a href="#">
               <Icon width={'30px'} height={'30px'} viewBox={'0 0 32 32 '} iconId={'gitHub'} />
            </a>
         </li>
         <li>
            <a href="#">
               <Icon width={'30px'} height={'30px'} viewBox={'0 0 32 32 '} iconId={'twitter'} />
            </a>
         </li>
         <li>
            <a href="#">
               <Icon width={'30px'} height={'30px'} viewBox={'0 0 32 32 '} iconId={'linkedIn'} />
            </a>
         </li>
      </StyledSocialContacts>
   );
};

const StyledSocialContacts = styled.ul<SocialContactsPropsType>`
   display: flex;
   gap: ${(props) => props.gap || '0'};
`;
