import styled from 'styled-components';
import { theme } from '../../styled/Theme';
import { FlexWrapper } from '../../components/FlexWrapper.Styled';

const Header = styled.header`
   padding-top: 37px;
   z-index: 10;
   position: fixed;
   top: 0;
   left: 0;
   right: 0px;
   background-color: ${theme.colors.primaryBg};
   @media ${theme.media.largeЕablet} {
      ${FlexWrapper} {
         padding-right: 0;
      }
   }
`;
const WrapperLogo = styled.div`
   margin-left: -7px;
`;
const WrapperContact = styled.div`
   @media ${theme.media.mobile} {
      display: none;
   }
`;

export const S = {
   Header,
   WrapperLogo,
   WrapperContact,
};
