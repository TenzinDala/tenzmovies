import IndexGenres from "./genres/IndexGenres";
import LandingPage from "./movies/LandingPage";

const route = [
    {path: '/genres', component: IndexGenres},
    {path: '/', component: LandingPage , exact : true}
];

export default route;