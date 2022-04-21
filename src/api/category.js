import instance from "@/utils/axios";


export function getCategory(){
    return instance({
        url:"/category/all",
        method:"get",
    })
}