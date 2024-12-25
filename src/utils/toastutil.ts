import { toast } from "react-toastify";

type ToastType = "success" | "error";
interface ToastOptions {
    position: "top-right" | "top-center" | "top-left" | "bottom-right" | "bottom-center" | "bottom-left";
    autoClose: number;
    hideProgressBar: boolean;
    closeOnClick: boolean;
    pauseOnHover: boolean;
    draggable: boolean;
    progress: undefined;
    theme: "light" | "dark";
    }

export const showToast = (type: ToastType, message: string): void => {
  const toastOptions:ToastOptions = {
    position:  "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  };

  if (type === "success") {
    toast.success(message, toastOptions);
  } else if (type === "error") {
    toast.error(message, toastOptions);
  }
};
