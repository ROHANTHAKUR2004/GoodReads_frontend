import {BiUser} from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

import img from '../../Assets/images/bookimg/bookshelfs.png';
export default function BookCard({data}){

    const navigate = useNavigate();
    return(
    <div className="mt-5 mb-5 card md:card-side bg-gray-800  md:h-60 w-full shadow-md">
        <figure className='h-full '>
            <img src={img} alt="img" className='h-1/5 md:h-full'/>
        </figure>
        <div className="card-body">
            <h2 className="card-title text-white text-4xl">{data.title}</h2>
            <div className='mt-8 flex justify-between items-center gap-2'>
                <div className='flex flex-col gap-3 text-white text-xl  '>
                <div className='flex justify-start gap-5 md:gap-5 items-center '>
                    <div>
                        <BiUser />
                    </div>
                    <div>
                        
                         {data.author?.name}
                    </div>
                </div> 
                <div >
                   {data.description.slice(0,100) + "..."}

                </div>
                </div>
                
                <div className="card-actions justify-end">
                    <button 
                     onClick={() => {
                         navigate("/book/description", {state: {...data}});
                    }}
                    className="btn btn-primary ml-8">
                        More Details
                    </button>
                </div>
            </div>
           
        </div>
    </div>
);
}