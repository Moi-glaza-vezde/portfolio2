import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../components/FlexWrapper.Styled';
import { Icon } from '../../components/icon/Icon';
import { SocialContacts } from '../../components/socialContacts/SocialContacts';
import { Menu } from '../../components/menu/Menu';
import { Container } from '../../components/Container';
import { theme } from '../../styled/Theme';

const items = ['Home', 'About', 'Technologies', 'Projects', 'Contact'];
export const Footer = () => {
   return (
      <StyledFooter>
         <Container>
            <ItemsWrapper>
               <FlexWrapper justify={'space-between'}>
                  <Icon
                     iconId={'logoFooter'}
                     width={'97px'}
                     height={'59px'}
                     viewBox={'0 0 97 59'}></Icon>
                  <FlexWrapper align={'center'} gap={'63px'}>
                     <PhoneNumber href="#">+91 12345 09876</PhoneNumber>
                     <MailFooter>info@example.com</MailFooter>
                     <SocialContacts gap={'20px'} />
                  </FlexWrapper>
               </FlexWrapper>
            </ItemsWrapper>

            <ItemsWrapper>
               <FlexWrapper align={'center'} justify={'space-between'}>
                  <Menu menuItems={items} />
                  <TextFooter>
                     Designed and built by{' '}
                     <TextColor>
                        Pavan MG <span>with</span> Love <span>&</span> Coffee
                     </TextColor>{' '}
                  </TextFooter>
               </FlexWrapper>
            </ItemsWrapper>
         </Container>
      </StyledFooter>
   );
};

const StyledFooter = styled.footer``;
const ItemsWrapper = styled.div`
   padding: 50px 0;
   position: relative;
   & + & {
      &::before {
         content: '';
         display: inline-block;

         width: 100%;
         height: 2px;
         background-color: #fff;
         position: absolute;
         top: 0;
      }
   }
`;
const PhoneNumber = styled.a`
   font-family: 'DM Sans', sans-serif;
   font-size: 18px;
   font-weight: 400;
   color: ${theme.colors.secondaryFont};
`;
const MailFooter = styled.a`
   color: ${theme.colors.secondaryFont};

   font-family: 'DM Sans', sans-serif;
   font-size: 18px;
   font-weight: 400;
`;

const TextColor = styled.span`
   background: linear-gradient(90deg, ${theme.colors.gradientFont});
   -webkit-background-clip: text;
   -webkit-text-fill-color: transparent;
   span {
      background-color: ${theme.colors.secondaryFont};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
   }
`;
const TextFooter = styled.div`
   font-size: 18px;
   font-weight: 400;
   color: ${theme.colors.secondaryFont};
`;
