import React from 'react';
import iconstSprite from '../../assets/images/icons-sprite.svg';

type iconPropsType = {
   iconId: string;
   width?: string;
   height?: string;
   viewBox?: string;
};
export const Icon = (props: iconPropsType) => {
   return (
      <svg
         width={props.width}
         height={props.height}
         viewBox={props.viewBox}
         fill="none"
         xmlns="http://www.w3.org/2000/svg">
         <use xlinkHref={`${iconstSprite}#${props.iconId}`} />
      </svg>
   );
};
