import CreateActor from "./actors/CreateActor";
import EditActor from "./actors/EditActor";
import IndexActors from "./actors/IndexActors";
import CreateGenre from "./genres/CreateGenre";
import EditGenre from "./genres/EditGenre";
import IndexGenres from "./genres/IndexGenres";
import CreateMovie from "./movies/CreateMovie";
import EditMovie from "./movies/EditMovie";
import FilterMovies from "./movies/FilterMovies";
import LandingPage from "./movies/LandingPage";
import CreateMovieTheater from "./movietheaters/CreateMovieTheater";
import EditMovieTheaters from "./movietheaters/EditMovieTheaters";
import IndexMovieTheaters from "./movietheaters/IndexMovieTheaters";

const route = [
    {path: '/genres', component: IndexGenres , exact:true},
    {path: '/genres/create', component: CreateGenre},
    {path: '/genres/edit', component: EditGenre},

    {path: '/actors', component: IndexActors , exact:true},
    {path: '/actors/create', component: CreateActor},
    {path: '/actors/edit', component: EditActor},
    
    {path: '/movietheaters', component: IndexMovieTheaters , exact:true},
    {path: '/movietheaters/create', component: CreateMovieTheater},
    {path: '/movietheaters/edit', component: EditMovieTheaters},

    {path: '/movies/create', component: CreateMovie },
    {path: '/filter/edit', component: EditMovie},
    {path: '/movie/filter', component: FilterMovies},

    {path: '/', component: LandingPage , exact : true}
];

export default route;