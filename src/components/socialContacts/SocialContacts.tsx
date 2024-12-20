import React from 'react';
import { Icon } from '../icon/Icon';
import styled from 'styled-components';

type SocialContactsPropsType = {
   display?: string;
   gap?: string;
};

const iconData = [
   {
      href: '#',
      iconId: 'gitHub',
   },
   {
      href: '#',
      iconId: 'twitter',
   },
   {
      href: '#',
      iconId: 'linkedIn',
   },
];
export const SocialContacts: React.FC<SocialContactsPropsType> = (
   props: SocialContactsPropsType
) => {
   return (
      <StyledSocialContacts gap={props.gap}>
         {iconData.map((i, index) => {
            return (
               <li key={index}>
                  <a href={i.href}>
                     <Icon
                        width={'30px'}
                        height={'30px'}
                        viewBox={'0 0 32 32 '}
                        iconId={i.iconId}
                     />
                  </a>
               </li>
            );
         })}
      </StyledSocialContacts>
   );
};

const StyledSocialContacts = styled.ul<SocialContactsPropsType>`
   display: flex;
   gap: ${(props) => props.gap || '0'};
`;
