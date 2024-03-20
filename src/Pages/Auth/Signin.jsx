import { Link } from "react-router-dom";

export default function Signin(){
    return(
        <div className="h-[100vh] flex flex-col items-center justify-center" >

        <div>
            <h1 className="text-white text-5xl">Login To ur Account</h1>
            </div> 

            <div className="mt-4">
                <p className="text-white">
                     Dont have an account ?
                     <Link to="/signup">
                     <button className="btn btn-success rounded-md px-2 mx-5 hover:bg-green-400">
                        Sign Up
                     </button>
                     </Link>
                </p>
                </div>  

                <div className="w-full">
                  <form className="flex flex-col justify-center items-center w-3/4 mx-auto"> 
                     <div className="my-5 w-1/3">
                    <input 
                    autoComplete="off"
                       type="email"
                       placeholder="Email..."
                       className="px-8 py-3 w-full bg-white"
                     />
                     </div>
                     <div className="my-5 w-1/3">
                    <input 
                      autoComplete="off"
                       type="password"
                       placeholder="Password..."
                       className="px-8 py-3 w-full bg-white"
                     />
                  </div>
                  <div className="my-5 w-1/3">
                  <button className="btn btn-success w-full hover:bg-green-400 rounded-md px-2 py-1" type="submit">Submit</button>
                  </div>
                   
                  </form>
                </div>

        </div>                              
    );
}