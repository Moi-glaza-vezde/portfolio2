import React from 'react';
import { Logo } from '../../components/logo/Logo';
import { SocialContacts } from '../../components/socialContacts/SocialContacts';
import { FlexWrapper } from '../../components/FlexWrapper.Styled';
import { Container } from '../../components/Container';
import { DesktopMenu } from './headerMenu/desktopMenu/DesktopMenu';
import { MobileMenu } from './headerMenu/mobileMenu/mobileMenu';
import { S } from './Header_Styles';

const items = ['Home', 'About', 'Tech Stack', 'Projects', 'Contact'];

export const Header: React.FC = () => {
   const [width, setWidth] = React.useState(window.innerWidth);
   const breakpoint = 927;

   React.useEffect(() => {
      const handleWindowResize = () => setWidth(window.innerWidth);

      window.addEventListener('resize', handleWindowResize);

      return () => window.removeEventListener('resize', handleWindowResize);
   }, []);

   return (
      <S.Header>
         <Container>
            <FlexWrapper align="center" justify="space-between">
               <S.WrapperLogo>
                  <Logo />
               </S.WrapperLogo>
               <FlexWrapper gap={'50px'}>
                  {width <= breakpoint ? (
                     <MobileMenu menuItems={items} />
                  ) : (
                     <DesktopMenu menuItems={items} />
                  )}

                  <S.WrapperContact>
                     <SocialContacts gap={'20px'} />
                  </S.WrapperContact>
               </FlexWrapper>
            </FlexWrapper>
         </Container>
      </S.Header>
   );
};
