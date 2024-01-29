import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ActorDetails from "./pages/ActorDetails";
import MovieDetails from "./pages/MovieDetails";
import Explore from "./pages/Explore";
import TvShowDetails from "./pages/TvShowDetails";

function App() {
  return (
    <div className="flex flex-col flex-grow px-6">
      <Navbar />
      <div className="flex-grow p-6">
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/explore/:page" element={<Explore />} />

          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/tvShow/:id" element={<TvShowDetails />} />
          <Route path="/actor" element={<ActorDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
