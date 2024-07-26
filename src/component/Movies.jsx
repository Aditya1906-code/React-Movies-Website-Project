import React, { useEffect, useState } from 'react'
import Moviecard from './Moviecard'
import axios from 'axios'
import Pagination from './Pagination'

function Movies({handleAddtoWatchList,handleRemoveFromWatchList,watchlist}) {

   const[movie,setMovie]=useState([])

   const[pageNo,setpageNo]=useState(1)

   const hanlePrv=()=>{
    if(pageNo===1){
      setpageNo(pageNo+499)
    }
    else{
      setpageNo(pageNo-1)
    }
  }

   const handleNext=()=>{
    if(pageNo===500){
      setpageNo(pageNo-499)
    }
    else{
      setpageNo(pageNo+1)
    }
  }
   

  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=9b639796613041b293261effad9d49b7&language=en-US&page=${pageNo}`).then(function(res){
      setMovie(res.data.results)
    })
  },[pageNo])
  return (
    <div className='p-5  '>
    <div className='text-center font-bold text-5xl items-center m-4 pb-6 ' > Trending Movies</div>

    <div className='flex flex-row flex-wrap justify-around items-end gap-5' >

      {movie.map((movieobj)=>{
        return <Moviecard  key={movieobj.id} movieobj={movieobj} handleRemoveFromWatchList={handleRemoveFromWatchList} handleAddtoWatchList={handleAddtoWatchList} watchlist={watchlist} poster_path={movieobj.poster_path} name={movieobj.original_title }  />
      })}
      

    </div>
    <Pagination pageNo={pageNo} handleNext={handleNext} handlePrv={hanlePrv}/>
    
    </div>
  )
}

export default Movies


//9b639796613041b293261effad9d49b7
//'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'
//https://api.themoviedb.org/3/movie/popular?api_key=9b639796613041b293261effad9d49b7&language=en-US&page=1