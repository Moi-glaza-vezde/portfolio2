import React from 'react';
import { S } from '../Footer_Styled';

// type MenuPropsType = {
//    menuItems: Array<string>;
// };

export const Menu: React.FC<{ menuItems: Array<string> }> = (props: {
   menuItems: Array<string>;
}) => {
   return (
      <S.FooterMenu>
         <S.List>
            {props.menuItems.map((item: string, index) => {
               return (
                  <S.ListItem key={index}>
                     <S.Link href="#">{item}</S.Link>
                  </S.ListItem>
               );
            })}
         </S.List>
      </S.FooterMenu>
   );
};
