import { Button } from "react-bootstrap";
import { Icon } from "../Icon";
import { CustomButtonProps } from "./types";

export const CustomBotton: React.FC<CustomButtonProps> =({
    cornered,
    outlined,
    iconProps,
    text,
    children,
    ...restProps
}) => {
    const corneredButtonTheme = cornered ? "cornered-button" : "";
    const outlinedButtonTheme = outlined ? "outlined-button" : "";
    const customButtonTheme = restProps.className ? restProps.className : "";

    return (
        <Button
        {...restProps}
        className={`button-container ${corneredButtonTheme} ${customButtonTheme} ${outlinedButtonTheme}`}
        >
           {!!iconProps && (
            <Icon {...iconProps} className={!!text ? "icon-container" : ""} >

            </Icon>
           )}
            {text}
            {children}
        </Button>
    )
}