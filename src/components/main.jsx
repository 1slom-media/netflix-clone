import { response } from "../base/res";
import { Banner } from "./banner";
import { Films } from "./films";
import { Navbar } from "./navbar";

export const Main=({user})=>{

    return(
        <div className="main">
            <Navbar user={user}/>
            <Banner/>
            <Films
                isLargeRow
                title={"NETFLIX ORIGINALS"}
                movie_request={response.fetchNetflixOriginals}
            />
             <Films
                title={"Trending now"} movie_request={response.fetchTrending}
            />
            <Films
                title={"Top Rated"} movie_request={response.fetchTopRated}
            />
            <Films
                title={"Action movies"} movie_request={response.fetchActionMovies}
            />
            <Films
                title={"Comedy movies"} movie_request={response.fetchComedyMovies}
            />
            <Films
                title={"Horror movies"} movie_request={response.fetchHorrorMovies}
            />
            <Films
                title={"Romance movies"} movie_request={response.fetchRomanceMovies}
            />
            <Films
                title={"Documentaries"} movie_request={response.fetchDocumentaries}
            />
        </div>

    )
}