import React, { useEffect, useState } from 'react';
import { animateScroll } from 'react-scroll';
import styled from 'styled-components';
import { animateScroll as scroll } from 'react-scroll';

export const GoTopBtn = () => {
   const [showBtn, SetShowBtn] = useState(false);

   useEffect(() => {
      window.addEventListener('scroll', () => {
         if (window.scrollY > 300) {
            SetShowBtn(true);
         } else {
            SetShowBtn(false);
         }
      });
   }, []);

   return (
      <>
         {showBtn && (
            <StyledGoTopBtn onClick={scroll.scrollToTop}>
               <span> &uarr;</span>
            </StyledGoTopBtn>
         )}
      </>
   );
};

const StyledGoTopBtn = styled.button`
   background-color: rgba(0, 0, 0, 0.3);

   width: 30px;
   height: 30px;
   position: fixed;
   right: 30px;
   bottom: 30px;
   display: flex;
   justify-content: center;
   align-items: center;
   padding-bottom: 5px;
   span {
      font-size: 20px;
      line-height: 0;
      color: #ffff;
      display: block;
   }
`;
