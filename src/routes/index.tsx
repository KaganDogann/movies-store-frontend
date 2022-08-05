import { Routes as RouteProvider, Route, Navigate } from "react-router-dom";
import { Movies } from "../pages/Movies";



export const Routes = () => (
    <RouteProvider>
         <Route path="*" element={<Navigate to="/movies" replace />} /> 
        <Route path="movies" element={<Movies/>}/> 
    </RouteProvider>
)