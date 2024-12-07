import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../components/FlexWrapper.Styled';
import { Icon } from '../../components/icon/Icon';
import { SocialContacts } from '../../components/socialContacts/SocialContacts';
import { Menu } from '../../components/menu/Menu';

const items = ['Home', 'About', 'Technologies', 'Projects', 'Contact'];
export const Footer = () => {
   return (
      <StyledFooter>
         <FlexWrapper justify={'space-between'}>
            <Icon iconId={'logoFooter'} width={'97px'} height={'59px'} viewBox={'0 0 97 59'}></Icon>
            <FlexWrapper align={'center'} gap={'63px'}>
               <PhoneNumber href="#">+91 12345 09876</PhoneNumber>
               <MailFooter>info@example.com</MailFooter>
               <SocialContacts gap={'20px'} />
            </FlexWrapper>
         </FlexWrapper>

         <FlexWrapper align={'center'} justify={'space-between'}>
            <Menu menuItems={items} />
            <TextFooter>
               Designed and built by <span>Pavan MG</span> with <span>Love</span> &{' '}
               <span>Coffee</span>{' '}
            </TextFooter>
         </FlexWrapper>
      </StyledFooter>
   );
};

const StyledFooter = styled.footer`
   background-color: #5effecac;
   min-height: 30vh;
`;

const PhoneNumber = styled.a``;
const MailFooter = styled.a``;
const TextFooter = styled.div``;
