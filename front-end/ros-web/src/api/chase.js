import request from "@/utils/request";
import { CHASE_MODULE } from "./_prefix";

export const chaseStart = (sec) =>{
    return request.get(`${CHASE_MODULE}?sec=${sec}`).then(res=>{
        return res.data
    })
}