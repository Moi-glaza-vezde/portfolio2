import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle.Styled';
import { font } from '../../../components/Common';
import { theme } from '../../../styled/Theme';

const Contact = styled.section`
   ${SectionTitle} {
      ${font({ family: "'DM Sans', sans-serif", weight: 700, Fmax: 56, Fmin: 36 })}
      margin-bottom: 0;

      letter-spacing: 2px;
      text-align: center;
   }
`;
const Email = styled.a`
   ${font({ family: "'DM Sans', sans-serif", weight: 700, Fmax: 50, Fmin: 36 })}

   display: block;

   letter-spacing: -1px;
   text-align: center;

   background: linear-gradient(90deg, ${theme.colors.gradientFont});
   -webkit-background-clip: text;
   -webkit-text-fill-color: transparent;
`;

const Form = styled.form`
   position: relative;
   margin: 100px auto;
   max-width: 540px;
   width: 100%;
   display: flex;
   flex-direction: column;
   gap: 16px;
   align-items: center;

   textarea {
      resize: none;
      height: 155px;
   }

   @media ${theme.media.mobile} {
      margin: 70px auto 0;
   }
`;

const Fild = styled.input`
   font-family: 'Poppins' sans-serif;

   width: 100%;
   background-color: ${theme.colors.secondaryBg};
   border: 1px solid ${theme.colors.borderColor};
   padding: 7px 15px;

   font-size: 12px;
   font-weight: 400;
   letter-spacing: 0.05em;
   color: ${theme.colors.font};

   /* color: rgba(73, 80, 87, 1); */
   &::placeholder {
      color: ${theme.colors.placeholderColor};
      text-transform: capitalize;
      font-family: 'Poppins' sans-serif;
   }
   &:focus-visible {
      outline: 1px solid ${theme.colors.borderColor};
   }
`;

// const Button = styled.button`
//    /* margin: 0 auto; */
//    position: relative;
//    font-size: 14px;
//    font-weight: 400;
//    letter-spacing: 1px;
//    text-transform: uppercase;
//    width: 170px;
//    height: 32px;
//    cursor: pointer;
//    color: #ffff;
//    border: 1px solid transparent;
//    border-image: linear-gradient(to right, #13b0f5, #e70faa);
//    border-image-slice: 1; /* Использовать весь градиент */
//    transition: border-image 0.3s ease;
//    &:hover {
//       border: 2px solid transparent;
//       transform: scale(1.1);
//       border-image: linear-gradient(to right, #e70faa, #13b0f5);
//       border-image-slice: 1; /* Использовать весь градиент */
//    }
// `;

const Button = styled.button`
   position: relative;
   width: 170px;
   height: 32px;
   background: white;
   z-index: 1;
   overflow: hidden;
   span {
      background: #000;
   }
   &::before {
      content: '';
      position: absolute;
      top: 0px;
      left: 0px;
      right: 0px;
      bottom: 0px;
      //  border: 10px solid transparent;
      background: linear-gradient(0deg, #ff7e5f, #feb47b, #ff7e5f);
      // background-size: 200% 200%;
      /* border-image: linear-gradient(0deg, #ff7e5f, #feb47b, #ff7e5f);
      border-image-slice: 1; */
      z-index: -1;
      // border-radius: 10px;
      animation: rotate-gradient 3s linear infinite;
   }

   @keyframes rotate-gradient {
      0% {
         transform: rotate(0deg);
      }
      100% {
         transform: rotate(360deg);
      }
   }
`;
export const S = {
   Contact,
   Email,

   Form,
   Fild,
   Button,
};
