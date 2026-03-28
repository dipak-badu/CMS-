import { Toaster } from "react-hot-toast";
import React from "react";

export const ToastProvider = () => {
  return (
    <Toaster
      position="top-right"
      reverseOrder={false}
      toastOptions={{
        duration: 3000,
        style: { fontSize: "14px" },
      }}
    />
  );
};
