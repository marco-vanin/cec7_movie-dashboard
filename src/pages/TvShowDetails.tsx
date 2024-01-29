import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTvShowsDetails } from "../utils/tvShows/fetchData";
import { TvShowDetailsType } from "../components/types/tvShow.type";

const TvShowDetails = () => {
  const { id } = useParams();
  const [vShowDetails, setTvShowDetails] = useState<TvShowDetailsType | null>(
    null
  );

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      try {
        const data = await getTvShowsDetails(id);
        setTvShowDetails(data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchData();
  }, [id]);

  console.log("Movie Details:", vShowDetails);

  return <div>{vShowDetails?.homepage}</div>;
};

export default TvShowDetails;
