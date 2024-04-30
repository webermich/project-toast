import React from 'react';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([{ 'id': '1223', 'message': 'halloo', 'variant': 'notice' }, { 'id': '4444', 'message': 'fsfgffsbd', 'variant': 'warning' }]);

  function dismiss(id) {
    const nextToasts = toasts.filter((toast) => {
      return toast.id !== id;
    });
  
    setToasts(nextToasts);
  }

  function addToast(message, variant) {
    setToasts([...toasts, { 'id': crypto.randomUUID(), 'message': message, 'variant': variant }]);
  }

  const toastContext = { toasts, addToast, dismiss};
  return (
    <ToastContext.Provider value={toastContext}>
      {children}
    </ToastContext.Provider>
  )
}

export default ToastProvider;