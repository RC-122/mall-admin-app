import jsCookie from "js-cookie";

export function setUserInfoCookies(info) {
    const arr = Object.entries(info);
    for (let i = 0; i < arr.length; i++) {
        jsCookie.set(arr[i][0], arr[i][1]);
    };
    return true;
};

export function getUserInfoCookies() {
    return {
        appkey: jsCookie.get("appkey"),
        username: jsCookie.get("username"),
        role: jsCookie.get("role"),
        email: jsCookie.get("email"),
    };
};


export function romoveUserInfoCookies(){
    jsCookie.remove("username");
    jsCookie.remove("appkey");
    jsCookie.remove("role");
    jsCookie.remove("email");
    return true;
};

