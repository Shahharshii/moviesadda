import { useState } from "react";
import { useSelector } from "react-redux";
import { useGetMoviesQuery } from "../Services/Api";
import Movielist from "../MovieList/MovieList";
import Pagination from "../Pagination/Pagination";

const Movies = () => {
  const [page, setPage] = useState(1);
  const { genreName, searchQuery } = useSelector((state) => state.currentGenre);
  const { data, error, isFetching } = useGetMoviesQuery({
    genreName,
    page,
    searchQuery,
  });

  if (isFetching) {
    return (
      <div className="flex justify-center">
        <img src="./loader.svg" alt="loader.." />
      </div>
    );
  }

  if (!data.results.length) {
    return (
      <div className="flex items-center mt-[20px]">
        <h4>No Movies Match That Name</h4>
        <br />
        Look for Something Else
      </div>
    );
  }

  if (error) return "An Error has Occurred";

  return (
    <div>
      <div className="m-5 bg-slate-900 rounded-3xl lg:rounded-[3%]">
        <Movielist movies={data} />
      </div>
      <Pagination
        currentPage={page}
        setPage={setPage}
        totalPages={data.total_pages}
      />
    </div>
  );
};

export default Movies;
