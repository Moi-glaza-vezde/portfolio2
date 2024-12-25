import React from 'react';
import { FlexWrapper } from '../../components/FlexWrapper.Styled';
import { Icon } from '../../components/icon/Icon';
import { SocialContacts } from '../../components/socialContacts/SocialContacts';
import { Menu } from './FooterMenu/Footer.Menu';
import { Container } from '../../components/Container';
import { S } from './Footer_Styled';

const items = ['Home', 'About', 'Technologies', 'Projects', 'Contact'];
export const Footer: React.FC = () => {
   return (
      <S.Footer>
         <Container>
            <S.ItemsWrapper>
               <FlexWrapper wrap={'wrap'} justify={'space-between'}>
                  <Icon
                     iconId={'logoFooter'}
                     width={'97px'}
                     height={'59px'}
                     viewBox={'0 0 97 59'}></Icon>
                  <FlexWrapper align={'center'} gap={'90px'}>
                     <S.PhoneNumber href="#">+91 12345 09876</S.PhoneNumber>
                     <S.Mail>info@example.com</S.Mail>
                     <SocialContacts gap={'20px'} />
                  </FlexWrapper>
               </FlexWrapper>
            </S.ItemsWrapper>

            <S.ItemsWrapper>
               <FlexWrapper align={'center'} justify={'space-between'} wrap={'wrap'}>
                  <Menu menuItems={items} />
                  <S.Text>
                     Designed and built by{' '}
                     <S.TextColor>
                        Pavan MG <span>with</span> Love <span>&</span> Coffee
                     </S.TextColor>{' '}
                  </S.Text>
               </FlexWrapper>
            </S.ItemsWrapper>
         </Container>
      </S.Footer>
   );
};
