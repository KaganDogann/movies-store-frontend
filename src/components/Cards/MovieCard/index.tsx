import { Button, Stack } from "react-bootstrap"
import { CustomCard } from "../CustomCard"
import { MovieCardProps } from "./types"
import "./styles.scss"
import { CustomBotton } from "../../CustomButton"

export const MovieCard: React.FC<MovieCardProps> = ({
    id,
    movieName,
    imageSource,
    iMDbRaiting,
    releaseDate,
    description,
    onDelete,
}) => {
    return (
        <CustomCard
        style={{position: "relative"}}
        className="nominee-card-container"
        key={id}
        title={movieName}
        image={imageSource}
        content={description}
        // buttons={
        //     <Stack className="buttons-wrapper">
        //         <CustomBotton
                
        //         text="Filme Git"
        //         variant="primary"
        //         cornered
        //         />
        //     </Stack>
        // }
        >

        </CustomCard>
    )
}