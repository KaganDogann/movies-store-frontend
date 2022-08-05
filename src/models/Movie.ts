export interface MovieCreateModal {
    movieName: string;
    description: string;
    releaseDate?: Date;
    iMDbRaiting?: number;
    price?:number;
}

export interface MovieModel extends MovieCreateModal {
    id:number;
}