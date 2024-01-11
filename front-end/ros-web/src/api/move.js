import request from "@/utils/request";
import { MOVE_MODULE } from "./_prefix";

export const moveCar = (param) =>{
    return request.post(`${MOVE_MODULE}`,param).then(res=>{
        return res.data
    })
}