import React from 'react';
import styled from 'styled-components';
import { Logo } from '../../components/logo/Logo';
import { Menu } from '../../components/menu/Menu';
import { SocialContacts } from '../../components/socialContacts/SocialContacts';
import { FlexWrapper } from '../../components/FlexWrapper.Styled';
import { Container } from '../../components/Container';

const items = ['Home', 'About', 'Tech Stack', 'Projects', 'Contact'];

export const Header = () => {
   return (
      <StyledHeader>
         <Container>
            <FlexWrapper align="center" justify="space-between">
               <Logo />
               <FlexWrapper gap={'51px'}>
                  <Menu menuItems={items} />
                  <SocialContacts gap={'20px'} />
               </FlexWrapper>
            </FlexWrapper>
         </Container>
      </StyledHeader>
   );
};

const StyledHeader = styled.header`
   /* background-color: #b3fdd2;
   display: flex;
   justify-content: space-between; */
`;
