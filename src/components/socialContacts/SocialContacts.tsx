import React from 'react';
import { Icon } from '../icon/Icon';

export const SocialContacts = () => {
   return (
      <ul>
         <li>
            <a href="#">
               <Icon width={'32px'} height={'32px'} viewBox={'0 0 32 32 '} iconId={'gitHub'} />
            </a>
         </li>
         <li>
            <a href="#">
               <Icon width={'32px'} height={'32px'} viewBox={'0 0 32 32 '} iconId={'twitter'} />
            </a>
         </li>
         <li>
            <a href="#">
               <Icon width={'32px'} height={'32px'} viewBox={'0 0 32 32 '} iconId={'linkedIn'} />
            </a>
         </li>
      </ul>
   );
};
