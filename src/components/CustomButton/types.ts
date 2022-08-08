import { ButtonProps } from 'react-bootstrap';
import { IconProps } from '../Icon/types';
export interface CustomButtonProps extends ButtonProps {
    cornered?: boolean;
    outlined?:boolean;
    text?:string;
    iconProps?:IconProps;
}