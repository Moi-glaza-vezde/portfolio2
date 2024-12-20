import { theme } from '../styled/Theme';

type FontPropsType = {
   family?: string;
   weight?: number;
   color?: string;
   lineHeight?: number;
   Fmin?: number;
   Fmax?: number;
};

export const font = ({ family, weight, color, lineHeight, Fmin, Fmax }: FontPropsType) =>
   `font-family:${family || 'Poppins'} ;
	font-weight:${weight || 400} ;
	line-height: ${lineHeight || 1.2};
	color:${color || theme.colors.font} ;
font-size: calc((100vw - 360px)/(1252 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px);

`;

// font-size: calc( (100vw - Vmin)/(Vmax - Vmin) * (Fmax - Fmin) + Fmin);
