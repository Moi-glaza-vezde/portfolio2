import React from 'react';
import styled from 'styled-components';
import { Menu } from '../menu/Menu';
import { S } from '../HeaderMenu_Stules';
export const DesktopMenu: React.FC = () => {
   return (
      <S.DesktopMenu>
         <Menu />
      </S.DesktopMenu>
   );
};
