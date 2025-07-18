import { useState, useCallback } from "react";
import { ToastContext } from ".";
import ToastList from "../components/practice/molecules/ToastList";

const ToastProvider = ({ children }) => {
    const [toasts, setToasts] = useState([]);

    const showToast = useCallback((message, variant = 'success') => {
        let id = Date.now();

        setToasts((prev) => [...prev, { id, message, variant }]);

        setTimeout(() => {
            setToasts((prev) => prev.filter((toast) => toast.id !== id));
        }, 3000);
    }, []);

    return (
        <ToastContext.Provider value={{ toasts, showToast }}>
            {children}
            <ToastList toasts={toasts} />
        </ToastContext.Provider>
    )
}

export default ToastProvider;