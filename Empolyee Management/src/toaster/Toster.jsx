import { Toaster, toast } from 'sonner';
import React from 'react';
export const SuccessToast = (message) => {
  toast.success(message, {
    duration: 2000,
  });
};

export const ErrorToast = (message) => {
  toast.error(message, {
    duration: 2000,
  });
};

export const LoadingToast = (state = true) => {
  if (state === true) {
    toast.loading('Loading...');
  } else {
    toast.dismiss();
  }
};


export const ToasterContainer = () => {
  return <Toaster richColors position='top-center' />;
};