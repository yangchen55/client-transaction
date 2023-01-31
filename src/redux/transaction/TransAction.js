import { toast } from "react-toastify"
import { deleteTrans, fetchTrans, postTrans } from "../../utils/axiosHelper"
import { requestFailed, requestPending, requestSuccess, getTransSuccess } from "./TransSlice"

export const addTransAction = (transaction) => async (dispatch) => {

    try {
        dispatch(requestPending())
        const data = await postTrans(transaction)

        const { status, message } = data;
        status === "success"
            ? dispatch(requestSuccess({ status, message })) && toast[status](message) && dispatch(getTransAction())
            : dispatch(requestFailed({ status, message })) && toast[status](message);
    } catch (error) {
        dispatch(requestFailed(error))

    }
};

export const getTransAction = () => async (dispatch) => {

    try {
        dispatch(requestPending())
        const { message, status, trans } = await fetchTrans()
        console.log(message, status, trans, "action ")
        status === "success"
            ? dispatch(getTransSuccess(trans))
            : dispatch(requestFailed(message))
    } catch (error) {
        dispatch(requestFailed(error))
    }
}

export const deleteTransAction = (idsToDelete) => async (dispatch) => {
    try {
        dispatch(requestPending())
        const { status, message } = await deleteTrans(idsToDelete);
        status === "success"
            ? dispatch(requestSuccess({ status, message })) &&
            toast[status](message) &&
            dispatch(getTransAction())
            : dispatch(requestFailed({ status, message })) && toast[status](message)
    } catch (error) {
        dispatch(requestFailed(error))
    }
}