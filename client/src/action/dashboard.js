import { isTokenExpired, getNewAuthToken } from "../utils";
import { baseURL } from "../utils/url";
import { CLEAR_DASHBOARD, DASHBOARD } from "./type";

export const getDashboard = (token, code, year) => async (dispatch) => {
    const valid = await isTokenExpired(token);
    try {
        if (!valid)
            await getNewAuthToken().then((res) => {
                localStorage.setItem("token_gen", JSON.stringify(res));
                token = res.access_token;
            });
        const fetchResponse = await fetch(baseURL + `dashboard?id=${code}&year=${year}`, {
            method: "GET",
            headers: {
                Authorization: "Bearer " + token,
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        });
        fetchResponse
            .json()
            .then((res) => {
                dispatch({
                    type: DASHBOARD,
                    payload: res,
                });
                return res;
            })
            .catch(() => {
                return null;
            });
    } catch (error) {
        return error;
    }
};

export const clearDashboard = () => async (dispatch) => {
    dispatch({ type: CLEAR_DASHBOARD });
};