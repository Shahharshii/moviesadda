import React from "react";
import Topbar from "../TopBar/TopBar";
import Movies from "../Movies/Movies";
import { useGetGenresQuery } from "../services/Api";

const Genre = () => {
  const { data } = useGetGenresQuery();

  return (
    <div className="flex flex-col items-center justify-start">
      <div className="h-[100px] w-full">
        <Topbar />
      </div>
      <div className="w-full">
        <Movies movie={data} />
      </div>
    </div>
  );
};

export default Genre;
