import instance from "@/utils/axios";


export function getProducts({page=1,size=10,searchWord,category}){
    return instance({
        url:"/products/all",
        method:"get",
        params:{
            page,
            size,
            searchWord,
            category
        }
    })
}