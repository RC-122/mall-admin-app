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

export function delProduct(id){
    return instance.delete(`/products/${id}`)
}


export function addProduct(params){
    return instance.post("/products/add", params)
}

export function checkProduct(id){
    return instance.get(`/products/${id}`)
}

export function editProduct(params){
    return instance.put("/products/edit", params)
}