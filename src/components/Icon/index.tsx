import { IconProps } from "./types";

export const Icon: React.FC<IconProps> =({
    name,
    size,
    theme,
    ...restProps
}) => {
    const customIconTheme = restProps.className ? restProps.className : "";
    return (
        <i
        {...restProps}
        className={`${name} ${customIconTheme}`}
        style={{color: theme, fontSize: size, ...restProps.style}}
        />
    )
}