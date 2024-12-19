import React from 'react';
import styled from 'styled-components';
import { Logo } from '../../components/logo/Logo';
import { SocialContacts } from '../../components/socialContacts/SocialContacts';
import { FlexWrapper } from '../../components/FlexWrapper.Styled';
import { Container } from '../../components/Container';
import { theme } from '../../styled/Theme';
import { HeaderMenu } from './headerMenu/HeaderMenu';
import { MobileMenu } from './mobileMenu/mobileMenu';

const items = ['Home', 'About', 'Tech Stack', 'Projects', 'Contact'];

export const Header = () => {
   return (
      <StyledHeader>
         <Container>
            <FlexWrapper align="center" justify="space-between">
               <Logo />
               <FlexWrapper gap={'50px'}>
                  <HeaderMenu menuItems={items} />
                  <MobileMenu menuItems={items} />
                  <WrapperContact>
                     <SocialContacts gap={'20px'} />
                  </WrapperContact>
               </FlexWrapper>
            </FlexWrapper>
         </Container>
      </StyledHeader>
   );
};

const StyledHeader = styled.header`
   padding-top: 40px;
   z-index: 10;
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
   background-color: ${theme.colors.primaryBg};
`;
const WrapperContact = styled.div`
   @media ${theme.media.mobile} {
      display: none;
   }
`;
