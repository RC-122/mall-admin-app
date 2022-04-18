import axios from "axios";

const instance = axios.create({
    baseURL:"https://mallapi.duyiedu.com/"
})
instance.interceptors.request.use((config)=>{
    return config;
}, (err)=> Promise.reject(err));

instance.interceptors.response.use((response)=>{
    if(response.data.status === "fail"){
        return Promise.reject(response.data.msg)
    }else{
        return response.data.msg;
    }
},(err)=> Promise.reject(err));

export default instance;    