import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movies from "./component/Movies";
import Watchlist from "./component/Watchlist";
import Banner from "./component/Banner";

function App() {

  const[watchlist,setWatchList]=useState([])

  const handleAddtoWatchList=(movieobj)=>{
    let newWatchlist=[...watchlist,movieobj]
    localStorage.setItem('movieapp',JSON.stringify(newWatchlist))
    setWatchList(newWatchlist)
    console.log(newWatchlist)
  }

  const handleRemoveFromWatchList=(movieobj)=>{
    let filterwatchlist=watchlist.filter((movie)=>{
      return movie.id!=movieobj.id
    })
    localStorage.setItem('movieapp',JSON.stringify(filterwatchlist))
    setWatchList(filterwatchlist)
    console.log(filterwatchlist)
  }

  useEffect(()=>{
    let moviesFromLocalStorage=localStorage.getItem('movieapp')
    if(!moviesFromLocalStorage){
      return
    }
    setWatchList(JSON.parse(moviesFromLocalStorage))
  },[])



  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<> <Banner/> <Movies watchlist={watchlist} handleAddtoWatchList={handleAddtoWatchList} handleRemoveFromWatchList={handleRemoveFromWatchList} /> </>} />
          <Route path="/Watchlist" element={<Watchlist  setWatchList={setWatchList}  watchlist={watchlist} handleRemoveFromWatchList={handleRemoveFromWatchList} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
