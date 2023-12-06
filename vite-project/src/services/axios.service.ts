import axios from "axios";
import { errorToast } from "./toaster.service";
import { config } from "../config"

export const getData = async (url: string) => {
    try {
        const resp = await axios.get(`${config.SERVER_URL}${url}`);
        return resp.data;
    } catch (error: any) {
        errorToast('Error fetching data:');
    }
}