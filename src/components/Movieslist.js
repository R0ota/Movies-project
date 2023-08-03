import React from 'react'
import {Row } from "react-bootstrap"
import  Cardmovie from './CardMovies';
import  PaginationItem  from './pagination';
 const Movieslist = ({movies,getpage,pageCount}) => {
  return (
<Row className="mt-3">
  {movies?.length >=1 ?(movies.map((mov)=>{
   return (<Cardmovie key={mov.id} mov={mov}/>)

  } )) : <h2 className='text-center p-5 '> no films </h2>}
  {movies?.length >=1 ?(<PaginationItem getpage={getpage} pageCount={pageCount}/>
):null}
</Row>

)
}

export default Movieslist;