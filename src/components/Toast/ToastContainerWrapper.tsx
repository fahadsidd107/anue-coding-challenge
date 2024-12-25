// components/ToastContainerWrapper.js
import React from 'react';
import { ToastContainer } from 'react-toastify';

const ToastContainerWrapper = () => (
    <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
    />
);

export default ToastContainerWrapper;
