import axios from "axios";

const instance = axios.create({
    baseURL:"https://mallapi.duyiedu.com/"
})
instance.interceptors.request.use((config)=>{
    // console.log(config);
    if(!config.url.includes("/passport")){
        return {
            ...config,
            params:{
                ...config.params,
                appkey:"mallzjw_1650121094859",
            }
        }
    }
    return config;
}, (err)=> Promise.reject(err));

instance.interceptors.response.use((response)=>{
    if(response.data.status === "fail"){
        return Promise.reject(response.data.msg)
    }else{
        return response.data;
    }
},(err)=> Promise.reject(err));

export default instance;    