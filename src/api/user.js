import instance from "@/utils/axios"

/**
 * 获取登录信息
 * @param {*} params 
 * @returns 
 */
export function login(params){
        return instance.post("/passport/login",params);
    }

/**
 * 注册用户
 * @param {*} params 
 * @returns 
 */
export function logon(params){
    return instance.post("passport/logon",params);
};

/**
 * 获取验证码
 * @param {*} email 
 * @returns 
 */
export function getCode(email){
    return instance.post("/passport/getCode", email);
};