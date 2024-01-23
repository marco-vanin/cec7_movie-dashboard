import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ActorDetails from "./pages/ActorDetails";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";

function App() {
  return (
    <div className="flex">
      {/* <Sidebar /> */}
      <div className="flex flex-col flex-grow">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie" element={<MovieDetails />} />
            <Route path="/actor" element={<ActorDetails />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
