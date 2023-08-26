import React from 'react'
import Moviecard from './Moviecard';
import upcome from '../../public/AllMovieData/Upcoming';
import { useState} from 'react';
  const Upcoming = () => {
    const [search,setSearch]=useState('');
    return (
      <div>
      <div className='Searchbar'>
      <input placeholder='search contact' onChange={(e)=> setSearch(e.target.value)}/>
      </div>

      {
        upcome.filter((element)=>{
          return search.toLocaleLowerCase===''?element:element.title.toLocaleLowerCase().includes(search);
        }).map((element)=>{
             return <Moviecard
            title={element.title}
            releaseDate={element.releaseDate}
            year={element.year}
            duration={element.duration}
            actors={element.actors}
            genres={element.genres}
            storyline={element.storyline}
            ratings={element.ratings}
            imdbRating={element.imdbRating}
            posterurl={element.posterurl}
          />
        })
      }
       
      </div>
    );
  };

export default Upcoming
