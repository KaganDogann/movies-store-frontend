import { MovieDirectorModal } from './MovieDreictor';
import { MovieGenreModal } from './MovieGenre';
import { MovieActorModal } from './MovieActor';

export interface MovieDetailModal {
    id:number;
    movieName: string;
    description: string;
    releaseDate?: Date;
    imDbRating?: number;
    price?:number;
    imagePath?: string;
    actors?: MovieActorModal[];
    directors?: MovieDirectorModal[];
    genres?: MovieGenreModal[];
    totalTime?:number;
    uploadDate?:Date;
    videoLink?:string;
}