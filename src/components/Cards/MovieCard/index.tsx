import { Button, Stack } from "react-bootstrap"
import { CustomCard } from "../CustomCard"
import { MovieCardProps } from "./types"
import "./styles.scss"

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
        key={id}
        title={movieName}
        image={imageSource}
        content={description}
        buttons={
            <Stack>
                <Button>test delete</Button>
            </Stack>
        }
        >

        </CustomCard>
    )
}