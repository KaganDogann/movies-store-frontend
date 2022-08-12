import { useEffect, useState } from "react";
import MovieAPIService from "../../api/services/movie.service";
import { Genre } from "../../models/Genre";
import { CustomMegaMenu } from "../CustomMegaMenu";
import { CategoriesMegaMenuProps } from "./types";

export const CategoriesMegaMenu: React.FC<CategoriesMegaMenuProps[]> = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  useEffect(() => {
    let movieApiService = new MovieAPIService();
    movieApiService.getAllGenres().then((result) => setGenres(result.data));
  }, []);
  return (
    <>
    </>
  );
};
