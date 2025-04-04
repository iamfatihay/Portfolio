import { Flip, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const toastSuccessNotify = msg => {
    toast.success(msg, {
        position: "top-center",
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Flip,
    });
};

export const toastErrorNotify = msg => {
    toast.error(msg, {
        position: "top-center",
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Flip,
    });
};
