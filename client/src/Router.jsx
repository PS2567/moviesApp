import {Switch,Route} from "react-router-dom";

import Home from "./Pages/Home";
import AddMovie from "./Pages/AddMovie";
import MovieDetails from "./Pages/MovieDetails";

const Router = () =>{
    return(
        <Switch>
        <Route exact path="/">
           <Home/>
         </Route>
         <Route exact path="/add-movie">
           <AddMovie />
         </Route>
         <Route exact path="/:movieId">
           <MovieDetails/>
         </Route>
         </Switch> 
    )
}

export default Router;