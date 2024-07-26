import React,{ useEffect, useState } from "react";
import genreIds from "../utility/Genre";

function Watchlist({watchlist,setWatchList,handleRemoveFromWatchList}) {

  const[search,setSearch]=useState('')
  const[genres,setgenres]=useState(['All Genres'])
  const[currgenres,setcurrgenres]=useState('All Genres')

  let handleSearch=(e)=>{
    setSearch(e.target.value)

  }

  let sortincreasing=()=>{
    let sortedincresing=watchlist.sort((movieA,movieB)=>{
      return movieA.vote_average-movieB.vote_average
    })
    setWatchList([...sortedincresing])
  }

  let sortdecreasing=()=>{
    let sorteddecresing=watchlist.sort((movieA,movieB)=>{
      return movieB.vote_average-movieA.vote_average
    })
    setWatchList([...sorteddecresing])
  }

  let handleFilter=(genres)=>{
    setcurrgenres(genres)
  }

  useEffect(()=>{
     let temp= watchlist.map((movieobj)=>{
      return genreIds[movieobj.genre_ids[0]]
     })
     temp=new Set(temp)
     setgenres(['All Genres',...temp])
     console.log(temp)
  },[watchlist])



  return (
    <>
      <div  className="flex justify-center flex-wrap m-5 ">
        {genres.map((genres)=>{
          return  <div  onClick={()=>{handleFilter(genres)}} className={currgenres==genres?  "flex justify-center bg-blue-800 w-[9rem] h-[3rem] rounded-xl items-center text-white font-bold ml-4 hover:cursor-pointer " :"flex justify-center bg-gray-800 w-[9rem] h-[3rem] rounded-xl items-center text-white font-bold ml-4 hover:cursor-pointer" }>
          {genres}
        </div>

        })}

      </div>

      <div className="flex justify-center m-4">
        <input onChange={handleSearch} value={search}
          type="text"
          placeholder="Search Movies"
          className=" bg-gray-200 outline-none w-[18rem] h-[2rem]"
        />
      </div>

      <div className="border border-gray-400 m-5 overflow-hidden">
        <table className="w-full text-center">
          <thead>
            <tr className="border-b-2">
              <th>Name</th>
              <th className="flex justify-center justify-around ">
                <div onClick={sortincreasing} className="hover:cursor-pointer hover:text-blue-400 "><i className="fa-solid fa-arrow-up"></i></div>
                <div >Ratings</div>
                <div onClick={sortdecreasing} className="hover:cursor-pointer hover:text-blue-400"  ><i className="fa-solid fa-arrow-down"></i></div>
              </th>
              <th>Popularity</th>
              <th>genre</th>
            </tr>
          </thead>

          <tbody>
            {watchlist.filter((movieobj)=>{
              if (currgenres=='All Genres'){
                return true
              }else{
                return genreIds[movieobj.genre_ids[0]]==currgenres
              }

            }).filter((movieobj)=>{
              return movieobj.original_title.toLowerCase().includes(search.toLocaleLowerCase())
            }).map((movieobj) => {
              return (
                <tr key={movieobj.id}>
                  <td className="flex items-center ">
                    <img
                      className="m-5 w-[8rem] h-[10rem]"
                      src={`http://image.tmdb.org/t/p/original/${movieobj.poster_path}`}
                    />
                    <div className=" ml-10">{movieobj.original_title}</div>
                  </td>

                  <td>{movieobj.vote_average}</td>
                  <td>{movieobj.popularity}</td>
                  <td>{genreIds[movieobj.genre_ids[0]]}</td>
                  <td onClick={()=>handleRemoveFromWatchList(movieobj)} className=" hover:cursor-pointer text-red-500">Delete</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Watchlist;
