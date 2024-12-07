import React from 'react';
import styled from 'styled-components';
import { Logo } from '../../components/logo/Logo';
import { Menu } from '../../components/menu/Menu';
import { SocialContacts } from '../../components/socialContacts/SocialContacts';
import { FlexWrapper } from '../../components/FlexWrapper.Styled';

const items = ['Home', 'About', 'Tech Stack', 'Projects', 'Contact'];

export const Header = () => {
   return (
      <StyledHeader>
         <Logo />
         <FlexWrapper gap={'30px'}>
            <Menu menuItems={items} />
            <SocialContacts gap={'30px'} />
         </FlexWrapper>
      </StyledHeader>
   );
};

const StyledHeader = styled.header`
   background-color: #b3fdd2;
   display: flex;
   justify-content: space-between;
`;
