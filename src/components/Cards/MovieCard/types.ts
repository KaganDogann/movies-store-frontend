export interface MovieCardProps {
    movieName: string;
    imagePath?: string;
    description?: string;
    releaseDate?: Date;
    iMDbRaiting?: number;
    id?: number;
    onDelete?: () => void;
    children: React.ReactNode;
  }
  