import { Button, Stack } from "react-bootstrap"
import { CustomCard } from "../CustomCard"
import { MovieCardProps } from "./types"
import "./styles.scss"
import { CustomBotton } from "../../CustomButton"
import { useNavigate } from "react-router-dom"

export const MovieCard: React.FC<MovieCardProps> = ({
    id,
    movieName,
    imagePath,
    iMDbRaiting,
    releaseDate,
    description,
    onDelete,
    
}) => {

    const navigate = useNavigate();

    return (
        <CustomCard
        onClick={() => navigate("/moviedetail/"+id)}
        style={{position: "relative"}}
        className="nominee-card-container"
        key={id}
        title={movieName}
        image={imagePath}
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