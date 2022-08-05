import { MovieModel } from './../../models/Movie';
import  axios  from 'axios';
import {api} from "../api";

export default class MovieAPIService {
   getMovies():Promise<{data:MovieModel[];}> {
    console.log("test",axios.get("https://localhost:5001/api/Movies/getall"))
    return axios.get("https://localhost:5001/api/Movies/getall")
    
   }
}