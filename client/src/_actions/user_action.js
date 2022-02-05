import axios from "axios";
import { LOGIN_USER } from "./types";

export function loginUser(dataToSubmit) {
    const req = axios.post("/api/users/login", dataToSubmit).then((res) => {
        return res.data;
    });

    console.log("user_action");
    console.log(req);
    return {
        type: LOGIN_USER,
        payload: req,
    };
}
