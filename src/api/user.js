import instance from "@/utils/axios"

export function login(params){
        return instance.post("/passport/login",params);
    }
