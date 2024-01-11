import request from "@/utils/request";
import { MAP_MODULE } from "./_prefix";

export const getmyMap = () => {
    return request.get(`${MAP_MODULE}`).then(res => {
        return res.data;
    })
}