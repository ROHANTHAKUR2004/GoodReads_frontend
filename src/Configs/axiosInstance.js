
import axios  from "axios";


const instance = axios.create();
instance.defaults.baseURL = "http://localhost:3005/api/v1"; 

export default instance;