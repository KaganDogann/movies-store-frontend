import { useState } from "react";
import { Card } from "react-bootstrap";
import { CustomCardProps } from "./types";
import imageHolder from "../../../assets/images/image-holder.jpg";
import "./styles.scss"

export const CustomCard: React.FC<CustomCardProps> = ({
    title,
    image,
    content,
    buttons,
    children,
    ...restProps
}) => {

    const [isImageValid, setIsImageValid] = useState(true);

    const customCardTheme = restProps.className ? restProps.className : ""
  return (
    <Card
    {...restProps} className={`card-container ${customCardTheme}`}
    >
        <Card.Img
        variant="top"
        className="card-image-container"
        src={isImageValid ? image : imageHolder}
        onError={() => setIsImageValid(false)}
        />
        <Card.Body className="card-body-container">
        {!!title && (
          <Card.Title className="card-title-container">{title}</Card.Title>
        )}
        <Card.Text className="card-text-container">{content}</Card.Text>
        {buttons}
      </Card.Body>
      {children}
        
    </Card>
  )
};
CustomCard.defaultProps = {
    image: imageHolder,
  };