import React, { useState } from 'react';
import { Menu } from '../menu/Menu';
import { S } from '../HeaderMenu_Stules';

export const MobileMenu: React.FC<{ menuItems: Array<string> }> = (props: {
   menuItems: Array<string>;
}) => {
   const [menuIsOpen, setMenuIsOpen] = useState(false);

   const onBurgerBtnClick = () => {
      setMenuIsOpen(!menuIsOpen);
   };
   return (
      <S.MobileMenu>
         <S.BurgerButton onClick={onBurgerBtnClick} isOpen={menuIsOpen}>
            <span></span>
         </S.BurgerButton>
         <S.MobileMenuPopup
            isOpen={menuIsOpen}
            onClick={() => {
               setMenuIsOpen(false);
            }}>
            <Menu menuItems={props.menuItems} />
         </S.MobileMenuPopup>
      </S.MobileMenu>
   );
};
