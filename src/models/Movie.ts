export interface MovieCreateModal {
    movieName: string;
    description: string;
    releaseDate?: Date;
    iMDbRaiting?: number;
    price?:number;
    totalTime?:number;
    uploadDate?:Date;
    videoLink?:string;
}

export interface MovieModel extends MovieCreateModal {
    id:number;
}