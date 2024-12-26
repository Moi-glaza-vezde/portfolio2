import React from 'react';
import { Icon } from '../icon/Icon';
import { animateScroll as scroll } from 'react-scroll';
export const Logo: React.FC = () => {
   return (
      <a
         onClick={() => {
            scroll.scrollToTop();
         }}>
         <Icon width="98px" height="60px" viewBox="0 0 100 55" iconId={'logo'} />{' '}
      </a>
   );
};
