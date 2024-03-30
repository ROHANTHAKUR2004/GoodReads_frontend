import {BiUser} from 'react-icons/bi';

import imgs from '../../Assets/images/bookimg/bookshelfs.png';
export default function BookCard({title}){
    return(
        <div className="card card-side mt-5 bg-gray-800  h-60 w-9/12 shadow-md" >
        <figure className='h-full w-1/3'>
            <img src={imgs} alt="Movie" className='h-full'/>
            </figure>
        <div className="card-body">
          <h2 className="card-title text-white text-4xl">{title}</h2>
          <div className="mt-12 flex justify-between items-center">
          <div className='flex flex-col gap-3 text-white text-xl'>
        <div className=' flex justify-start gap-5 items-center'>
            <div>
            <BiUser/>
            </div>
            <div>
                    author
            </div>
            </div>
            <div>
                Description
            </div>
          </div>
           
          <div className="card-actions justify-end">
            <button className="btn btn-primary">More Details</button>
          </div>
        </div>
      </div>
      </div>
    );
}