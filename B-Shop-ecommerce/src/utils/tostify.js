
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const tostifyNotofication = (message) => {
    const notify = () => toast({
        message,
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    return notify();
}