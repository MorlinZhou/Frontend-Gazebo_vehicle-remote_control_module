import request from "@/utils/request";
import { CHAT_MODULE } from "./_prefix";

export const getCarlatlng = () => {
    return request.get(`${CHAT_MODULE}`).then(res => {
        return res.data;
    })
}