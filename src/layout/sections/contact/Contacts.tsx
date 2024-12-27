import React, { ElementRef, useRef } from 'react';
import { SectionTitle } from '../../../components/SectionTitle.Styled';
import { Container } from '../../../components/Container';
import { S } from './Contact_Styles';
import emailjs from '@emailjs/browser';

export const Contacts: React.FC = () => {
   const form = useRef<ElementRef<'form'>>(null);

   const sendEmail = (e: any) => {
      e.preventDefault();

      if (!form.current) return;

      emailjs
         .sendForm('service_wz1d77b', 'template_dqr3chg', form.current, {
            publicKey: '_nifs8OXEgnsUTV9L',
         })
         .then(
            () => {
               console.log('SUCCESS!');
            },
            (error) => {
               console.log('FAILED...', error.text);
            }
         );
      e.target.reset();
   };
   return (
      <S.Contact id={'contact'}>
         <Container>
            <SectionTitle>Contact</SectionTitle>

            <S.Form ref={form} onSubmit={sendEmail}>
               <S.Fild required placeholder={'name'} name={'user_name'} />
               <S.Fild required placeholder={'email'} name={'email'} />
               <S.Fild required placeholder={'subject'} name={'subJect'} />
               <S.Fild required placeholder={'messege'} as={'textarea'} name={'message'} />
               <S.Button type={'submit'}>
                  <span>Send message</span>{' '}
               </S.Button>
            </S.Form>

            <S.Email href="mailto:#">hi@pavanmg.in</S.Email>
         </Container>
      </S.Contact>
   );
};
