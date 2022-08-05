import { CardProps } from "react-bootstrap";

export interface CustomCardProps extends CardProps {
    title: string;
    image?: string;
    content?:React.ReactNode;
    buttons?:React.ReactNode;
}