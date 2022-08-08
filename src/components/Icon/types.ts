import { CSSProperties, HTMLProps } from "react";

export interface IconProps extends Omit<HTMLProps<HTMLElement>, "size"> {
    name:string;
    theme?:string;
    size?: number | string;
    style?: CSSProperties;
}