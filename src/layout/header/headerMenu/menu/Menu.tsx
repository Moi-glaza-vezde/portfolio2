import React from 'react';
import { S } from '../HeaderMenu_Stules';

const items = [
   { title: 'Home', href: 'home' },
   { title: 'About', href: 'about' },
   { title: 'Tech Stack', href: 'techStack' },
   { title: 'Projects', href: 'projects' },
   { title: 'Contact', href: 'contact' },
];

export const Menu: React.FC = () => {
   return (
      <S.MenuList>
         {items.map((item: { title: string; href: string }, index) => {
            return (
               <S.ListItem key={index}>
                  <S.NavLink to={item.href} activeClass="active" smooth={true} spy={true}>
                     {item.title}

                     <S.Mask>
                        <span> {item.title}</span>
                     </S.Mask>
                     <S.Mask>
                        <span> {item.title}</span>
                     </S.Mask>
                  </S.NavLink>
               </S.ListItem>
            );
         })}
      </S.MenuList>
   );
};
