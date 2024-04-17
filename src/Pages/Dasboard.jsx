import BookCard from "Components/bookcard/BookCard";
import Layout from "Layouts/Layout";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getallbooks } from "Redux/Slices/BookSlice";


export default function Dasboard(){


  const bookstate  = useSelector((state) => state.book);
  const dispatch = useDispatch();

 async function loadbook(){
  if(bookstate.bookList.length == 0 ){
    await dispatch(getallbooks());
  }
 }


  useEffect(()=>{
       loadbook();
  },[]);
    return(
          <Layout>
          {bookstate.bookList.length > 0  && bookstate.bookList.map(book =>{
            return <BookCard  key={book._id} data={book}/> ;
          })}
          </Layout>
  );
}