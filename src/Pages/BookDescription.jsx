import Layout from "Layouts/Layout";
import { useEffect } from "react";
import { BiUser } from 'react-icons/bi';
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getallbookshelf } from "Redux/Slices/ShelfSlice";
import { addtobookshelf } from "Redux/Slices/ShelfSlice";

import img from '../Assets/images/bookimg/bookshelfs.png';

export default function Bookdescription(){

    const {state} = useLocation();
   const shelfstate = useSelector((state) => state.shelf);
    const dispatch = useDispatch();

    useEffect(()=>{
       dispatch(getallbookshelf()); 
    },[]);
    return(
        <Layout>
               {
                state._id &&  (
                    <div className="my-5 flex items-start justify-center gap-5 flex-col md:flex-row">
                        <div className="basis-2/3">
                            <img className="w-full" src={img}/>
                        </div>
                        <div className='flex flex-col items-center justify-center gap-10'>
                            <div className='text-white text-4xl font-semibold'>
                                {state.title}
                            </div>
                            <div className='text-white text-xl w-3/4'>
                                {state.description}
                            </div>
                            <div className=' flex justify-start gap-5 items-center text-2xl text-yellow-400'>
                                <div>
                                    <BiUser />
                                </div>
                                <div>
                                    {state.author?.name}
                                </div>
                            </div> 
                            <div className='tabs tabs-boxed flex justify-start items-start flex-wrap gap-3'>
                                {state.genres.map((genre) => {
                                    return <div key={genre._id} className="tab tab-active text-xl px-2 py-1">{genre.name}</div>; 
                                })}
                            </div>
                            <div className='text-xl'>
                                Pages: <span className='text-yellow-400'>{state.pages}</span>
                            </div>
                            <div className='text-xl'>
                                Publish Date: <span className='text-yellow-400'>{state.publishDate}</span>
                            </div>
                            <div>
                            <details className="dropdown mb-32">
                                <summary className="m-1 btn">Add to Shelf</summary>
                                <ul className="p-2 shadow menu dropdown-content z-[1] text-white bg-blue-500 rounded-box w-52">
                                {shelfstate.shelfList.length > 0 && shelfstate.shelfList.map((shelf) => {
                                        return <li onClick={async () => {
                                            await dispatch(addtobookshelf({shelfName: shelf.name, bookId: state._id}));
                                            await dispatch(getallbookshelf());
                                        }} className='text-white' key={shelf._id}><a>{shelf.name}</a></li>;
                                    })}
                                </ul>
                                </details>
                            </div>
                        </div>  
                    </div>
                )
            }
        </Layout>
       
    );
}