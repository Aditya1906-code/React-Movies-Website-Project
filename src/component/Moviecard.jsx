import React from "react";

function Moviecard({
  poster_path,
  name,
  handleAddtoWatchList,
  movieobj,
  handleRemoveFromWatchList,
  watchlist,
}) {
  function doesContain(movieobj) {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id == movieobj.id) return true;
    }
    return false;
  }
  return (
    <div
      className="h-[40vh] w-[400px]  bg-center bg-cover rounded-3xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between items-end "
      style={{
        backgroundImage: `url(http://image.tmdb.org/t/p/original/${poster_path})`,
      }}
    >
      {doesContain(movieobj) ? (
        <div
          onClick={() => handleRemoveFromWatchList(movieobj)}
          className="m-4 p-2 bg-gray-800/60 flex justify-center rounded-lg text-3xl"
        >
          &#10006;
        </div>
      ) : (
        <div
          onClick={() => handleAddtoWatchList(movieobj)}
          className="m-4 p-2 bg-gray-800/60 flex justify-center rounded-lg text-3xl"
        >
          &#128525;
        </div>
      )}

      <div className=" text-white w-full text-center text-3xl bg-gray-900/60 rounded-3xl">
        {name}
      </div>
    </div>
  );
}

export default Moviecard;
