import request from "@/utils/request";
import { DRIVE_MODULE } from "./_prefix";

export const driveCar = (direction, id, keydown) =>{
    return request.post(`${DRIVE_MODULE}?direction=${direction}&id=${id}&keydown=${keydown}`).then(res=>{
        return res.data
    })
}